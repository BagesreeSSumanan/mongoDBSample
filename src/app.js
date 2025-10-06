const express = require('express');
const mongoos = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connectToDB = async() =>{
    try{
        await mongoos.connect('mongodb://localhost:27017',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("connected to mongoDB")
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }

}
connectToDB();

const port = 3000;
app.listen(port,()=>{
 console.log(`Example app listening on port ${port}`);
});
