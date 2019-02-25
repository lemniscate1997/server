const express = require('express');
const bodyParser = require('body-parser');
const login = require('./routes/login/login.routing.js');
const session = require('./routes/session/session.routing');
const template = require('./routes/template/template.routing');
const errorHandle = require('./utils/errorHandle');
const app = express();
const middleware = require('./utils/middleware');
const config = require('./utils/config');
const cors = require('cors');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.options('*', cors());

app.use("/login", login);

app.use("*", middleware.checkToken);
app.use("/session", session);
app.use("/template", template);

app.use(function (err, req, res, next) {
  res.status(err.status || 500)
    .json({
      code: err.code,
      error: errorHandle(err)
    });
});

app.listen(3000);