const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const ProductsRouter = require('./Routes/ProductsRouter');

require('dotenv').config();
require('./models/db');
const PORT = process.env.PORT || 8080;

app.get('/ping', (req, res) =>{
    res.send('PONG');
})

app.use(bodyParser.json());
app.use(cors());
app.use('/auth',AuthRouter);
app.use('/products', ProductsRouter);

app.listen(PORT, () =>{
    console.log(`server is running on ${PORT}`)
})