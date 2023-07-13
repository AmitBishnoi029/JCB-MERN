import express from "express";
import { connect } from "./Database/db.js";
import router from "./Routes/auth.js";
import cors from "cors"

const app = express()
app.use(express.json())

app.use(cors());
app.use(express.urlencoded({extended:true}));

//defining router
// app.use("/auth",router)

// CALL DATABASE FUNCTION
connect();
const PORT = "8080";
app.listen(()=>{
    console.log(`server running on PORT ${PORT}`);
})