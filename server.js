import express from "express";

//Import Other Needed Credentials
import { PORT }  from "./config.js";


const app = express()

//Set static folder
app.use(express.static("public"));

//Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended: true}));

//Parse JSON bodies (as sent by API clients)
app.use(express.json());


//Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})

 