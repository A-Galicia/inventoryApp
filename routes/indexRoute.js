const { Router } = require('express');
const indexRouter = Router();

indexRouter.get('/', (req, res) => {
  console.log('in the index');
  res.send('Fred Fredburger, YES');
});

module.exports = indexRouter;
