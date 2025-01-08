const express = require("express");
const dotenv = require("dotenv")
dotenv.config()
const app = express();

app.get("/", (req, res) => {
    res.status(200).json({message:"Hello World"});
});

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on ${process.env.BASE_URL}`);
})