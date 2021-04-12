"use strict";

const id        = document.querySelector("#login-id"),
    psword      = document.querySelector("#login-password"),
    loginBtn    = document.querySelector("#login-Btn");

loginBtn.addEventListener("click", login);

function login()
{
    const req = 
    {
        id : id.value,
        psword : psword.value,
    };

    fetch("/login", {
        method : "POST",
        header : {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req),
    });
}