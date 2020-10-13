const express = require('express');
const http = require('http');
const cors = require('cors');

const {STATUS_CODE: {SERVER_ERROR}} = require('./constant');
const {PORT} = require('./config');
require('./dataBase').getInstance().setModels();
const {AuthorRouter,AuthRouter} = require('./router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use('/authors', AuthorRouter);
app.use('/auth', AuthRouter);


app.use((err, req, res, next) => {

    res
        .status(err.status || SERVER_ERROR)
        .json({
            status: err.status,
            message: err.message || 'Unknown Error',
            code: err.code

        });
});

const server = http.createServer(app);

server.listen(3000, (err) => {
    if (err) console.log(err);
    console.log(`listening port ${PORT}...`);
});