const express = require('express');
const indexRouter = require('./routes/indexRoute');
const path = require('node:path');
const assetsPath = path.join(__dirname, 'public');
//
//

const app = express();

//
// Views setup ////////////////////////////////////////////////////
//

app.use(express.static(assetsPath));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//
// ________________________________________________________________
//
app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
