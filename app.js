const express = require('express');
const http = require('http');
const cors = require('cors');

const app = express();

const server = http.createServer(app);
server.listen(3000,(err)=>{
    if (err) console.log(err);

})