"use strict";

const id        = document.querySelector("#id"),
    email       = document.querySelector("#email"),
    psword      = document.querySelector("#password"),
    pswordc     = document.querySelector("#passwordcheck"),
    registerBtn    = document.querySelector("#Btn");

registerBtn.addEventListener("click", register);

function register()
{
    if(!id.value) return alert('아이디를 입력해주세요.');
    if(!email.value)
    {
        return alert('이메일을 입력해주세요.');
    }
    else
    {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const email_check = re.test(String(email.value).toLowerCase());
        if(email_check === false)
        {
            return alert("이메일 형식이 맞지 않습니다.");
        }
    }
    if(psword.value !== pswordc.value)
    {
        return alert('비밀번호가 일치 하지 않습니다.');
    }

    const req = 
    {
        id : id.value,
        email : email.value,
        psword : psword.value,
    };
    fetch("/register", {
        method : "POST",
        headers : {
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
        });
}