const express = require("express")
const app = express();

const { dbconnect } = require('./config/DataBase');

const cookieParser = require('cookie-parser')
const cors = require('cors')
require("dotenv").config();
const userRoutes = require("./Routes/User")


const PORT = process.env.PORT || 4000;

dbconnect();

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin:"http://localhost:3000",
        credentials : true
    })
)
// app.use(fileUpload({
//     useTempFiles : true,
//     tempFileDir : '/tmp/'
// }));


app.use("/api/v1/auth" , userRoutes);



app.get('/' , async(req ,res)=>{
    return res.json({
        success:true,
        message : 'your server is up and running'
    })
});


app.listen(PORT , ()=>{
    console.log(`app listen at port ${PORT}`)
});