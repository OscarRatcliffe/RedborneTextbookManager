const { readFileSync } = require("fs");
import express from 'express';

function endpoints(app: any) {
    app.get('/AllBooks', (req: any, res: any) => {
        
        let jsonString = readFileSync("../data/textbooks.json");
        let data = JSON.parse(jsonString);

        res.send(data)
    })
      
    app.get('/Test', (req: any, res: any) => {
        res.send("Test")
    })
    
    app.post('/Assign', (req: any, res: any) => {

        let department = req.body.newDepartment;
        let bookID = req.body.newDepartment;

        

    })
}

export {endpoints};