
"use strict";

const UserStorage = require("./UserStorage");


class User
{
    constructor(body)
    {
        this.body = body;
    }

    async login()
    {
        const client = this.body;
        try
        {
            const user = await UserStorage.getUserInfo(client.id);
            if(user)
            {
                if(user.id === client.id && user.psword === client.psword)
                {
                    return { success : true };
                }
                return { success : false, msg : "비밀번호가 틀렸습니다."};
            }
            return { success : false, msg : "존재하지 않는 아이디 입니다."};
        }
        catch (err)
        {
            return { success : false, mag : err };
        }
    }

    async register()
    {
        const client = this.body;
        //먼저 check 하자
        const check_id = await UserStorage.getUserInfo(client.id);
        if(check_id === undefined)
        {
            try
            {
                const response = await UserStorage.save(client);
                return response;
            }
            catch (err)
            {
                return { success : false, msg : err };
            }
        }
        else
        {
            return { succecc : false, msg : "이미 존재하는 Username 입니다." };
        }
    }
}



module.exports = User;