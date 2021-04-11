"use strict";

const output =
{
    home : (req,res) =>
    {
        res.render("home/index");
    },

    register : (req,res) =>
    {
        res.render("home/register");
    }
}

const process = 
{
    login : (req, res) =>
    {
        console.log('req', req.body);
    }
}

module.exports =
{
    output,
    process,
}
