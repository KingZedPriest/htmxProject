import express from "express";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Import Other Needed Credentials
import { PORT }  from "./config.js";


const app = express()

//Set static folder
app.use(express.static("public"));

//Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended: true}));

//Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Serve static files from the node_modules directory
app.use('/scripts', express.static(join(__dirname, 'node_modules')));


//Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})

 