const express = require("express");//framework for rest api
const dotenv = require("dotenv");//env access package
const app = express();//create express app
const cors = require("cors");//cross origin rerference package
const mashupRoute = require("./routes/combineApi");//mashup route package
const auth = require("./routes/user");//authentication routes
const mongoose = require("mongoose");//ODM-object data mapping package
dotenv.config();
const PORT = 8000;
const corsOptions = {
  origin: "*",//can be access from any where(no PORT restriction)
};

//boiler plate - req,res options
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors(corsOptions));

// {* All the routes here *}

app.use("/api/combineApi", mashupRoute);
app.use("/api/user", auth);

app.listen(PORT, async () => {
  try {
    await mongoose.connect(//wating for moongose to connect
      process.env.DATABASE_URL.toString(),
      {
        useNewUrlParser: true,
      },
      () => {
      
        console.log("Connected to db");
        console.log(`Server running at port ${PORT}`);
      }
    );
  } catch (e) {//error
    console.log(e);
  }
});
