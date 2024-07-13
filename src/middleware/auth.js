import jwt from "jsonwebtoken";

const authenticateUser = async (req, res, next) => {
    
    try {    
        const token = req.cookies.token;
        console.log(token);
        if (token == null) return res.sendStatus(401); // Unauthorized
        // Access cookies
        console.log('Cookies: ', req.cookies);

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        
        if (err) return res.sendStatus(403); // Forbidden    
        console.log('here--middle ware');     
        req.user = user;
        next();
        });
    } catch (error) {
        console.log(error);
    }
}

export {
    authenticateUser
}

