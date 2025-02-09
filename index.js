const express = require('express')
const app = express();


app.use(express.json())


app.get('/', async (req, res) => {

  res.send('<h1>Hello Engineers !');
});

app.listen(5000, (err) => {
    console.log(`SERVER LISTEN ON PORT 5000`);
})