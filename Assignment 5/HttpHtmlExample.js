const path = require('path');
const bodyParser= require('body-parser');
const express = require('express');
const fs = require('fs');
const app=express();

app.use(bodyParser.json());

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
})
app.post('/',(req,res) => {
    req.on("data", data => {
        fs.appendFile('sample.txt',data+'\n', ()=> {
            console.log('done');
        });
    });
    res.end();
});

app.listen(8888 , ()=>{ console.log('Server running on... http://localhost:8888/')});
