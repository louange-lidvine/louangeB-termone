const express = require('express');
const app = express();

app.get('/sum', (req, res) => {
    const numbers = req.query.numbers;
    // ...
  });
  app.get('/sum', (req, res) => {
    const numbers = req.query.numbers.split(',');
    let sum = 0;
    for (i=0;i<numbers[i];i++) {
      sum += parseFloat(numbers[i]);
    }
    res.send(`The sum of numbers is: ${sum}`);
  });
  app.get('/multiply', (req, res) => {
    const numbers = req.query.numbers;
    // ...
  });
  app.get('/multiply', (req, res) => {
    const numbers = req.query.numbers.split(',');
    let product = 1;
    for (i=0;i<numbers[i];i++) {
      product *= parseFloat(numbers[i]);
    }
    res.send(`The product of numbers is: ${product}`);
  });
  const port = 3000;
app.listen(port, () => {
  console.log(`calculator API listening at port:${port}`);
});
  
