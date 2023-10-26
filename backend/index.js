const express=require('express');
const app=express();
const connectDB =require('./config/database')
const dotenv=require('dotenv');
const cors=require('cors');
const cookieParser=require('cookie-parser');
const authRoute=require('./routes/auth');
const userRoute=require('./routes/users');
const postRoute=require('./routes/posts');
const commentRoute=require('./routes/comments');
const multer=require('multer');
const path=require('path')



//configur dotenv file
require('dotenv').config();


//middleware
app.use(express.json())
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());
// Set up CORS with credentials
const corsOptions = {
    origin: "https://resonant-marshmallow-1cd1b7.netlify.app",
    credentials: true,
  };
  
  app.use(cors(corsOptions));
  
  // Add this line to enable credentials
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Credentials", true);
    next();
  });
  

if(process.env.Node_ENV="production"){
    app.use(express.static("frontend/build"))
}

//image upload
const storage=multer.diskStorage({
    destination:(req,file,fn)=>{
        fn(null,"images")
    },
    filename:(req,file,fn)=>{
        fn(null,req.body.img)
        // fn(null,"image1.jpg")
    }
})

const upload=multer({storage:storage})
app.post("/api/upload",upload.single("file"),(req,res)=>{
    // console.log(req.body)
    res.status(200).json("Image has been uploaded successfully!")
})





//routes
app.use("/api/user",authRoute);
app.use("/api/user",userRoute);
app.use("/api/posts",postRoute);
app.use("/api/comments",commentRoute);
app.use("/images",express.static(path.join(__dirname,"/images")))



//datbases
connectDB()

app.listen(process.env.PORT,()=>{

    console.log(`app is running on port ${process.env.PORT}`)
})