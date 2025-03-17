import bcrypt from "bcryptjs";

const users = [
    {
        name: "Admin",
        email: "adminsemail@gmail.com",
        password: bcrypt.hashSync("1111Uh", 10),
        isAdmin: true,
    },
    {
        name: "Jone Doe",
        email: "jdsemail@gmail.com",
        password: bcrypt.hashSync("2222Uh", 10),
        isAdmin: false,
    },
];

export default users;