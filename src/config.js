import mongoose from "mongoose";

 const connectDb = async () => {

    const connection_url = 'mongodb://localhost:27017/Jwt-auth-db';

    try{
        await mongoose.connect(connection_url);
        console.log('connection established');
    }catch(error){
        console.log(error);
    }

}

export {
    connectDb
} 

