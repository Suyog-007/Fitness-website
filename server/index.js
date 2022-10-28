const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const mashupRoute = require("./routes/combineApi");
const auth = require("./routes/user");
const mongoose = require("mongoose");
dotenv.config();
const PORT = 8000;
const corsOptions = {
  origin: "*",
};

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors(corsOptions));

// {* All the routes here *}

app.use("/api/combineApi", mashupRoute);
app.use("/api/user", auth);

app.listen(PORT, async () => {
  try {
    await mongoose.connect(
      process.env.DATABASE_URL.toString(),
      {
        useNewUrlParser: true,
      },
      () => {
      
        console.log("Connected to db");
        console.log(`Server running at port ${PORT}`);
      }
    );
  } catch (e) {
    console.log(e);
  }
});
