const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// EJSをテンプレートエンジンとして設定
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 静的ファイルの提供
app.use(express.static(path.join(__dirname, "public")));

// ルートルート
app.get("/", (req, res) => {
  const rund = Math.floor(Math.random() * 10) + 1;
  res.render("index", { rund });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
