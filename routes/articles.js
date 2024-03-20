const express = require("express");
const Article = require("./../models/article");
const router = express.Router();

router.get("/new", (req, res) => {
  res.render("articles/new", { article: new Article() });
});

router.get("/:id", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    console.log(article);
    if (article === null) res.render("articles/show", { article: article });
  } catch (error) {
    console.error(error);
    res.status(404).send("Article not found");
  }
});

router.post("/", async (req, res) => {
  const article = new Article({
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown,
  });

  try {
    const savedArticle = await article.save();
    res.redirect(`/articles/${savedArticle._id}`); // Use savedArticle._id instead of savedArticle.id
  } catch (error) {
    console.error(error);
    res.render("articles/new", { article: article });
  }
});

module.exports = router;
