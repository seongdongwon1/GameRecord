"use strict";

const users = 
{
    id : ["s1", "s12", "s123"],
    psword : ["12", "123", "1234"],
};

const output =
{
    home : (req,res) =>
    {
        res.render("home/index");
    },

    login : (req,res) =>
    {
        res.render("home/login");
    },

    register : (req,res) =>
    {
        res.render("home/register");
    }
};

const process = 
{
    login : (req, res) =>
    {
        console.log('1111111');
        console.log(req.body);
    },

    register : (req, res) =>
    {
        console.log(req.body);
    }
};

module.exports =
{
    output,
    process,
};
