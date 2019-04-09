const express = require('express');
const app = express();
const middleware = require('./middleware');
const bodyParser = require('body-parser');
const config = require('./config');
const jwt = require('jsonwebtoken');
app.use(bodyParser.json());
app.get('/login', middleware, (req, res)=>{
    let username = "";
    let password = "";
    const mockUserName = "admin";
    const mockPassword = "1234";
    if (username && password) {
        if(username === mockUserName && password === mockPassword){
            // create token
            let token = jwt.sign({username: username}, config.secret, {expiresIn: '24h'});
            res.status(200).send({
                message: "OK",
                token : "token"
            });
        } else {
            res.status(403).json({
                message: 'Username and password incorrect'
            });
        }
    } else {
        res.status(400).json({
            message: 'Authentication failed!'
        });    
    }
});