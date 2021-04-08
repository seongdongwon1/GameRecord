const express = require('express');
const fs = require('fs');
const app = express();

app.listen(8080, function()
{
    
});

app.get('/', function(req, res)
{
    res.sendFile(__dirname + '/index.html');
});

app.get('/index.html', function(req, res)
{
    res.sendFile(__dirname + '/index.html');
});

app.get('/register.html', function(req, res)
{
    res.sendFile(__dirname + '/register.html');
});

// app.use(express.static(__dirname + '../images/custom.css'));



//////////////////////////////////////////////////////////////////////
///////////////////////  image load    ///////////////////////////////
/////////////////////// 근데 이거 맞냐? ///////////////////////////////
//////////////////////////////////////////////////////////////////////
app.get('/imags1', function (req, res)
{
    fs.readFile('../Record/images/image1.PNG', function (errer, data)
    {
        res.writeHead(200, { 'Content-Type' : 'text/html' });
        res.end(data);
    })
})

app.get('/imags2', function (req, res)
{
    fs.readFile('../Record/images/image2.PNG', function (errer, data)
    {
        res.writeHead(200, { 'Content-Type' : 'text/html' });
        res.end(data);
    })
})

app.get('/imags3', function (req, res)
{
    fs.readFile('../Record/images/image3.PNG', function (errer, data)
    {
        res.writeHead(200, { 'Content-Type' : 'text/html' });
        res.end(data);
    })
})



////////////////////////////////////////////////////

// app.get('/css', function (req, res)
// {
//     fs.readFile('../Record/css/custom.css', function (errer, data)
//     {
//         res.writeHead(200, { 'Content-Type' : 'text/css' });
//         res.end(data);
//     })
// })

app.use(express.static('public'));