import mongoose from "mongoose";

 const connectDb = async () => {

    // const connection_url = 'mongodb://localhost:27017/Jwt-auth-db';

    /*
        If password contained - @ then it should be replace by %40

        The @ symbol in your password should be URL-encoded as %40

        MONGO_URI=mongodb+srv://<username>:<password>@<cluster-address>/<database>?retryWrites=true&w=majority

        cluster-address: ec2-node-cluster
        appName: EC2-Node-Cluster
        username: aasifgithub
        password: aasif%4012345 (aasif@12345)
        database name: Auth-JWT-Nodejs


        database / browse collections
*/ 


    const connection_url = "mongodb+srv://aasifgithub:aasif%4012345@ec2-node-cluster.wzb71gt.mongodb.net/Auth-JWT-Nodejs?retryWrites=true&w=majority&appName=EC2-Node-Cluster";

    try{
        await mongoose.connect(connection_url);
        console.log('MongoDb atlas connection established');
    }catch(error){
        console.log(error);
    }

}

export {
    connectDb
} 

