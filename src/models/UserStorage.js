"use strict";


class UserStorage
{
    static #users = 
    {
        id : ["s1", "s12", "s123"],
        psword : ["12", "123", "1234"],
        name : ["김팅장", "최팀장", "오팀장"],
    };

    static getUsers(...fields) 
    {
        const users= this.#users;
        const newUsers = fields.reduce((newUsers, field) =>
        {
            if(users.hasOwnProperty(field))
            {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id)
    {
        const users= this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) =>
        {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static save(userInfo)
    {
        const users = this.#users;
        
    }
}

module.exports = UserStorage;

