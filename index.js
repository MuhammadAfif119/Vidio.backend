const express = require('express');
const bodyParser = require('body-parser');
const router = require ('../Tugas5/router/router');
const axios = require('axios');
const cors = require('cors');


const app = express ()
const port = 3080
app.use(cors());

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json())
app.use('/',router)

app.listen(port,()=>{
    console.log(`example app listening on port ${port}`)
})