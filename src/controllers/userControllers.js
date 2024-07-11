import { UserModel } from "../models/users.js";

const signInUser = async (req, res) => {
    console.log('hi');
    const { username, email, password } = req.body;

    await UserModel.create({
        username,
        email,
        password
    });

    return res.redirect('./login/dashboard');
}

export {
    signInUser
}