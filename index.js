const express = require ('express');
const app = express();
const ejs = require ('ejs');
const port = 8000; 

app
  .use(express.static("public"))
  .set("views", "view")

app.use(function(req, res, next) {
  res.status(404).sendFile('404.html', {root: "public"});
});

  app.listen(port, () => console.log(`app running on port: ${port}`));