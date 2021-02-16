const express = require ('express');
const app = express();
const port = 8000; 

app
  .use(express.static("public"))
  .set("views", "view")

// app.use(function(req, res) {
//     res.send("404: Page not found", 404);
//   });
  
app.use(function(req, res, next) {
  res.status(404).sendFile('404.html', {root: public});
});

  app.listen(port, () => console.log(`app running on port: ${port}`));