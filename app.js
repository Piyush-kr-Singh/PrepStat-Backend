const express = require("express");
const app = express();
const mysql=require('mysql2');
const cors=require('cors');
const PORT = 4000;
require("./db/conn");
const router=require('./Routes/router');

app.get("/", (req, res) => {
  res.send("Hello World");
});


// Middlewares

app.use(express.json());
const corsOptions = {
  origin: '*',
  methods: 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
};

// Apply CORS middleware
app.use(cors(corsOptions));

app.use(router);



app.listen(PORT,()=>
{
    console.log(`Server started at port ${PORT}`);
})