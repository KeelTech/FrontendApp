require('dotenv').config()
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
global.document = null
const path = require('path');
const http = require('http');
const Express = require('express');
const app = new Express();
const server = new http.Server(app);
const compression = require('compression')
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { createLogger } from 'redux-logger'
// import CONFIG from './dev/js/config'
import STORAGE from './dev/js/helpers/storage'
import CookieHelper from './dev/js/helpers/storage/cookie.js';


// GZIP Compression
app.use(compression());

app.disable('etag');

app.use('/assets', Express.static(path.join(__dirname, '../assets')));
app.use('/dist', Express.static(path.join(__dirname, '../dist')));

app.all('*', function (req, res) {
    // path.resolve(__dirname, 'dist/')
    
    
    if(CookieHelper && CookieHelper.init){
        CookieHelper.init(req);
    }
    res.sendFile(path.join(__dirname,'../dist/index.html'));
});


server.listen(process.env.PORT || 3000, (err) => {
    if (err) {
        return console.error(err);
    }
    console.info(`Server running on http://localhost:${process.env.PORT || 3000}`);
});

