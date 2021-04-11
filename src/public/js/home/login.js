"use strict";

const id        = document.querySelector("#id"),
    email       = document.querySelector("#email"),
    psword      = document.querySelector("#password"),
    pswordc     = document.querySelector("#passwordcheck"),
    loginBtn    = document.querySelector("#Btn");

loginBtn.addEventListener("click", login);

function login()
{
    const req = 
    {
        id : id.value,
        email : email.value,
        psword : psword.value,
        pswordc : pswordc.value,
    };

}