import { UserModel } from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const saltRounds = 10;

const signInUser = async (req, res) => {
    
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

                const token = await jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn:'72h'});


                // Set the token in an HTTP-Only cookie
                res.cookie('token', token, {
                    httpOnly: true,
                                        
                });

                // res.json({ 
                //     user,
                //     token
                // });
                
                res.redirect('login/dashboard');

            console.log('Password matches!');
            } else {
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
    signInUser,
    loginUser
}