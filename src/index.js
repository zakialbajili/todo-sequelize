const express = require("express");
const dotenv = require("dotenv")
dotenv.config()
const app = express();

const rolesRouter = require("./routes/rolesRouter");
app.get("/", (req, res) => {
    res.status(200).json({message:"Hello World"});
});

app.use('', rolesRouter);

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on ${process.env.BASE_URL}`);
})