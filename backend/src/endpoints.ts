const { readFileSync } = require("fs");
import express, { response } from 'express';

function parseJSON() {
    let jsonString = readFileSync("../data/textbooks.json");
    return JSON.parse(jsonString);
}

function endpoints(app: any) {

    const validDepartments = ["English", "Computer science", "Maths", "Music", "Other"]

    app.get('/AllBooks', (req: any, res: any) => {
        
        let data = parseJSON()

        res.send(data)
    })
      
    app.get('/Test', (req: any, res: any) => {
        res.send("Test")
    })
    
    app.post('/Assign', (req: any, res: any) => {

        let department = req.body.newDepartment;
        let bookID = req.body.bookName;
        let data = parseJSON()

        let status = 500;
        let response = "Server error"

        console.log(department)

        if (!validDepartments.includes(department)) {
            status = 400
            response = "Invalid department"
        } else {
            
            let bookFound = false
    
            for (let i of data) {
                if (i.name == bookID) {
                    if (!i.assignment.isAssigned) {
                        i.assignment.assignedTo = department;
                        i.assignment.isAssigned = true;
                    } else {
                        status = 409
                        response = `Book already assigned to ${i.assignment.assignedTo}`
                    }
                    bookFound = true;
                    status = 200
                    response = `${i.name} has been assigned to ${i.assignment.assignedTo}`
                    break;
                } 
            }
    
            if (!bookFound) {
                status = 400
                response = "Book not found"
            }
        }
        res.status(status)
        res.send(response)

    })
}

export {endpoints};