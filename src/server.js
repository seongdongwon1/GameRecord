"use strict";

//모듈
const express = require('express');
const fs = require('fs');
const app = express();
const dotenv = require('dotenv');
dotenv.config();


const PORT = process.env.PORT || 9000;

//라우팅
const home = require("./routes/home");

//앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/public`)); //미들웨어 정적경로
app.use(express.json());
app.use(express.urlencoded({ extended : true }));



app.use("/", home);


app.listen(PORT, function()
{
    console.log("서버 가동");
});

//////////////////////////////////////////////////////////////////////
///////////////////////  image load    ///////////////////////////////
/////////////////////// 근데 이거 맞냐? ///////////////////////////////
//////////////////////////////////////////////////////////////////////

app.get('/images/image1.PNG', function (req, res)
{
    fs.readFile('images/image1.PNG', function (errer, data)
    {
        res.writeHead(200, { 'Content-Type' : 'image/png' });
        res.end(data);
    })
})

app.get('/images/image2.PNG', function (req, res)
{
    fs.readFile('images/image2.PNG', function (errer, data)
    {
        res.writeHead(200, { 'Content-Type' : 'image/png' });
        res.end(data);
    })
})

app.get('/images/image3.PNG', function (req, res)
{
    fs.readFile('images/image3.PNG', function (errer, data)
    {
        res.writeHead(200, { 'Content-Type' : 'image/png' });
        res.end(data);
    })
})


//////////////////////////////////////////////////////////////////////
///////////////////////  register    /////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////