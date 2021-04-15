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
        const id = req.body.id;
        const psword = req.body.psword;

        if(users.id.includes(id))
        {
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword)
            {
                return res.json({
                    success : true,
                });
            }
        }

        return res.json({
            success : false,
            msg : " 로그인에 실패하였습니다.",
        });
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
