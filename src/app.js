const path = require('path')
const express = require("express");
const app = express();

const staticPath = path.join(__dirname,'../')
console.log(staticPath)
const templatePath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

const PORT = 3000;

//to set view engine 

app.use(express.static(staticPath))

// template engine route


app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}...`);
});
