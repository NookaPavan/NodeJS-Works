const express = require('express');
const app = express();
var cors = require('cors');
const fs = require('fs');
var bodyParser = require('body-parser');
const port = 3004;
const random= 5297;
const file= 'employees.json';

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get(`/${random}listEmployees`, (req,res) => {
    let rawdata = fs.readFileSync(file);
    res.send(JSON.parse(rawdata));
});

app.get(`/${random}listEmployeeById/:id`, (req,res) => {
    let id = "employee"+req.params.id;
    fs.readFile(file, function (err, data) {
        if(err) { console.log(err); }
        var json = JSON.parse(data);
        res.send(json[id]);
    })
});

app.post(`/${random}addEmployee/:id`, (req,res) => {
    const key= "employee"+req.params.id;
    const employe=  req.body ;
    fs.readFile(file, function (err, data) {
        if(err) { console.log(err); }
        var json = JSON.parse(data);
        json[key]= employe;
        fs.writeFileSync(file, JSON.stringify(json));   
        res.redirect(`/${random}listEmployees`);
    });
});

app.put(`/${random}updateEmployee/:id` , (req,res) => {
    const key= "employee"+req.params.id;
    const employe=  req.body ;
    fs.readFile(file, function (err, data) {
        if(err) { console.log(err); }
        var json = JSON.parse(data);
        json[key]= employe;
        fs.writeFileSync(file, JSON.stringify(json));   
        res.redirect(`/${random}listEmployees`);
    });
});

app.delete(`/${random}deleteEmployee/:id`, (req,res) => {
    const key= "employee"+req.params.id;
    const employe=  req.body ;
    fs.readFile(file, function (err, data) {
        if(err) { console.log(err); }
        var json = JSON.parse(data);
        var result={};
        for (let e in json) {
            if(e!=key){
                result[e]=json[e];
            }
        }
        fs.writeFileSync(file, JSON.stringify(result));  
        res.redirect(`/${random}listEmployees`);
    })
});
app.listen(port , ()=>{ console.log(`Server running on... http://localhost:${port}/`)});
