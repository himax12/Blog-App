const express = require("express");
const app = express();
const mongoose = require("mongoose");

const articleRouter = require("./routes/articles.js");
app.set("view engine", "ejs");
mongoose.connect(
  "mongodb+srv://ghimansh23:VA4NHrrg9psCUqqF@cluster0.l2t90xi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

app.use(express.urlencoded({ extended: false }));
const articles = [
  {
    title: "Test Article",
    createdAt: new Date(),
    description: " sample",
  },
  {
    title: "Test Article2",
    createdAt: new Date(),
    description: " sample 2",
  },
];
app.get("/", (req, res) => {
  res.render("articles/index", { articles: articles });
});
app.use("/articles", articleRouter);
app.listen(5000);
//
