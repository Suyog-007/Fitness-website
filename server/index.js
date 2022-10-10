require('dotenv').config();
const express = require('express');
const app = express();
const cors=require('cors');
const postRoute = require("./routes/combineApi");


//middlewares
app.use(express.json());
const corsOptions={
    origin:"*",
    credentials: true,
    optionSuccessStatus:200,
  }
app.use(cors(corsOptions));
app.use('/api/posts',postRoute);


const port =process.env.PORT || 8080;
app.listen(port,()=>{
    console.log("Listening to port 8080");
});