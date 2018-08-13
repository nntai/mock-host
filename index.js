var express = require('express')
var app = express()
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT"),
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

// respond with "hello world" when a GET request is made to the homepage
app.post('/:course_id', (req, res, next) => {
  console.log(req.params)
  console.log(req.body);
  res.json({
    data: 1,
    d: 1
  })
})
app.listen(4000, () => console.log('Example app listening on port 4000!'))