import {PORT} from './constant'
const express = require('express');
const app = express();

app.listen(()=>{
    console.log(`Server runnig on port ${PORT}`);
},PORT)