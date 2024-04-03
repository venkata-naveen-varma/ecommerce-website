import bcrypt from 'bcryptjs';

const users = [
    {
        name: "Admin User",
        email: "admin@gmail.com",
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: "Naveen",
        email: "naveen@gmail.com",
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    },
    {
        name: "Varma",
        email: "varma@gmail.com",
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    }
]

export default users;