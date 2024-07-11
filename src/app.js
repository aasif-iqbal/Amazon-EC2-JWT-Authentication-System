import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { connectDb } from './config.js';
import userRoute from "./routes/users.js";
import bodyParser from "body-parser";

// Get the current file's URL and convert it to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let app = express();
connectDb();

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/', userRoute);

// Set the views directory and engine
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


app.get('/login',(req, res)=>{
    // res.send('Hello');
    res.render('login/login');
})

// app.use('')


app.listen('3000', ()=>{
    console.log(`server is running on PORT::${3000}`);
});