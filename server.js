const express = require("express");
const path = require("path");
const port = (process.env.PORT || 7770);

const app = express();

if(process.env.NODE_ENV !== 'production') {
    const webpack = require('webpack');
    const config = require('./webpack.config.dev');
    const complier = webpack(config);

    app.use(require('webpack-dev-middleware')(complier, {
        noInfo: true,
        publicPath: config.output.publicPath
    }));
    
    app.use(require('webpack-hot-middleware')(complier));
}

app.use('/public', express.static(path.join(__dirname, './public')));
app.get('/', function(_, res) {
    res.sendFile(path.join(__dirname, './index.html'));
});
app.listen(port);
console.log(`Listening at http://localhost:${port}`);