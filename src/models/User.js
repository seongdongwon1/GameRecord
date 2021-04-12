
const UserStorage = require("./UserStorage");

class User
{
    constructor(body)
    {
        this.body = body;
    }
}

// login()
// {
//     const body = this.body;
//     const { id, psword } = 
// }

register ()
{
    const client = this.body;
    UserStorage.save(client);
}

module.exports = User;