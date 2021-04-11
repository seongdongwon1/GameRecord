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


module.exports =
{
    output,
}
