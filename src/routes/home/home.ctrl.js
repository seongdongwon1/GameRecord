"use strict";

const home = (req,res) =>
{
    res.render("home/index");
}

const register = (req,res) =>
{
    res.render("home/register");
}

module.exports =
{
    home,
    register,
}
