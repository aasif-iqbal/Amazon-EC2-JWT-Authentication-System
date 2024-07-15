import { UserModel } from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const saltRounds = 10;

const registration = async (req, res) => {
    
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log(hashedPassword);
    
    await UserModel.create({
        username,
        email,
        password:hashedPassword
    });

    return res.redirect("login/dashboard");
}

// http://localhost:3000/login
const loginUser = async (req, res) => {

    try {            
        const {username, password} = req.body;        
        
        // fetch hashedPassword from user db to compare
        const user = await UserModel.find({username});
    
        if(user.length > 0){
            const result = await bcrypt.compare(password, user[0].password);
            if (result) {
                
                // generate jwt token
                const payload = {
                    username:user[0].username
                }

                const token = await jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn:process.env.EXPIRES_IN});


                // Set the token in an HTTP-Only cookie
                res.cookie('token', token, {
                    // Prevents client-side JavaScript from accessing the cookie
                    httpOnly: true,             
                    // Ensures the cookie is sent over HTTPS only
                    secure: true,               
                    // Controls how cookies are sent with cross-site requests (options: 'strict', 'lax', 'none')
                    sameSite: 'strict',                    
                });

                // res.json({ 
                //     user,
                //     token
                // });
                res.redirect('/dashboard');
            console.log('Password matches!');
            } else {
                res.redirect('/login');
            console.log('Password does not match!');
            }
        }else{
            return res.json({
                msg:'User Not Found!'
            });
        }
    } catch (error) {
        console.log(error);            
    }   
}


export {
    registration,
    loginUser
}