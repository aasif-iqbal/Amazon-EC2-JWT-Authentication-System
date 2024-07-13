import express from "express";
import path from "path";
import 'dotenv/config';
import { fileURLToPath } from 'url';
import { connectDb } from './config_atlas.js';
import userRoute from "./routes/users.js";
import bodyParser from "body-parser";
import { authenticateUser } from "./middleware/auth.js";
// import cookieParser from "cookie-parser";

// Get the current file's URL and convert it to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let app = express();
connectDb();

//cookie parser
// app.use(cookieParser);

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
// app.use('/', userRoute);
app.use(userRoute);


// Set the views directory and engine
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


app.get('/signIn',(req, res)=>{
    // res.send('Hello');
    res.render('login/signin');
})

app.get('/login',(req, res)=>{
    
    res.render('login/login');
})

// app.use('')

app.get('/dashboard', authenticateUser, (req, res) => {
    
    res.render('login/dashboard');
});



app.listen(process.env.PORT, ()=>{
    console.log(`server is running on PORT::${process.env.PORT}`);
});