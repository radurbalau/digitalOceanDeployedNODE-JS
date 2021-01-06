const express = require('express')
const app = express();
app.set('port', process.env.PORT || 3000)

app.get('/', (req, res) => {
  res.send('<h1>Hello World!<h1>')
});

app.listen(app.get('port'), () => {
    console.log(`Express server listening on port ${app.get('port')}`);
  })