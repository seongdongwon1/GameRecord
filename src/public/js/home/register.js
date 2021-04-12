"use strict";

const id        = document.querySelector("#id"),
    email       = document.querySelector("#email"),
    psword      = document.querySelector("#password"),
    pswordc     = document.querySelector("#passwordcheck"),
    registerBtn    = document.querySelector("#Btn");

registerBtn.addEventListener("click", register);

function register()
{
    const req = 
    {
        id : id.value,
        email : email.value,
        psword : psword.value,
        pswordc : pswordc.value,
    };

    fetch("/register", {
        method : "POST",
        header : {
            "Content-Type": "application/json",
        },
        body : JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success)
            {
                location.href = "/login";
            }
            else
            {
                alert(res.msg);
            }
        })
        .catch((err) =>
        {
            console.error("회원가입 중 에러 발생");
        })
}