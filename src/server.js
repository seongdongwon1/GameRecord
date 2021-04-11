"use strict";

//모듈
const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');


const PORT = 8080;

//라우팅
const home = require("./routes/home");

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/public`)); //미들웨어 정적경로

/////////////////////////////////////////////////////////////////////
app.use("/", home);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.listen(PORT, function()
{
    console.log("서버 가동");
});

//////////////////////////////////////////////////////////////////////
///////////////////////    경로    ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// app.get('/', function(req, res)
// {
//     res.sendFile(__dirname + '/index.html');
// });

// app.get('/index.html', function(req, res)
// {
//     res.sendFile(__dirname + '/index.html');
// });

// app.get('/register.html', function(req, res)
// {
//     res.sendFile(__dirname + '/register.html');
// });



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

app.post("/register-check", (req, res) =>
{

    //1..먼저 비밀번호 체크
    //2-1 ..DB에 userID가 있는지.
    //2-2 ..DB에 없다면 저장.

    
    var userID = req.body.inputUserame;
    var userEmail = req.body.inputEmail;
    var userPassword = req.body.inputPassword;
    var userPasswordCheck = req.body.inputConfirmPassword;

    if(userPassword != userPasswordCheck)
    {
        alert('비밀번호를 다시 한번 확인해주세요.');
        return;
    }
    

})


//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
app.use(express.static('public'));