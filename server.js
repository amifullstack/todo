const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser');


const PORT = 5000;

const app = express();

// // / view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// app.use(express.static(path.join(__dirname, 'public')));

// // Parse request of content application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

// // Parser request of content application/json
// app.use(bodyParser.json());

// webpack-hot-middleware
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

// // WebpackServer
// // creating webpackCompiler that instantiate webapck and adding it as a express middleware
const webpackCompiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(webpackCompiler, {
  publickPath: webpackConfig.output.publicPath,
  stats: {
    color: true,
    chunks: true,
    errorOnly: true,
  },
}));

app.use(webpackHotMiddleware(webpackCompiler, {
  log: console.log,
}));

app.use(express.static('./public'));
app.use('/', (req, res) => {
  res.sendFile(path.resolve('views/index.html'));
  // res.render('index', { title: 'Exp Works?' });
});

app.listen(PORT, () => {
  console.log(`We are live at PORT: ${PORT}`);
});
