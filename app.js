const express = require('express');
const indexRouter = require('./routes/indexRoute');

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

app.use('/', indexRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
