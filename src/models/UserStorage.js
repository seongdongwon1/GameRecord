"use strict";

class UserStorage
{
    static #users = 
    {

    };

    static getUsers(...fields)
    {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) =>
        {
            if (users.hasOwnProperty(field))
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
        const userInfo = usersKeys.reduce((newUsers, info) =>
        {
            newUser[info] = users[info][idx];
            return newUsers;
        }, {});

        return userInfo;
    }

    static save(userInfo)
    {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.id.push(userInfo.email);
        users.id.push(userInfo.psword);
        
        console.log('users', users);
    }
}

