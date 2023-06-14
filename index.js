const express = require('express')
const server = express()
const cors = require('cors')
server.use(cors({ origin: 'http://localhost:3000' }))
server.use(express.json()) // to converting incoming json data to js 

const logic = require('./services/logic')

server.listen(8000, () => {
    console.log("..........ems server started 8000..........");
})


// get all employee
server.get('/getEmployees', (req, res) => {
    logic.getAllEmployees().then(result => {
        res.status(result.statusCode).json(result)
    })
})

// get employee
server.get('/get-employee/:id', (req, res) => {
    logic.getEmployee(req.params.id).then(result => {
        res.status(result.statusCode).json(result)
    })
})


// delete employee
server.delete('/deleteEmployee/:id', (req, res) => {
    logic.removeEmployee(req.params.id).then(result => {
        res.status(result.statusCode).json(result)
    })
})


// add new employee
server.post('/addEmployee', (req, res) => {
    logic.addNewEmployee(req.body.id, req.body.name, req.body.designation, req.body.salary, req.body.experience).then(result => {
        res.status(result.statusCode).json(result)
    })
})


// edit employee
server.post('/editEmployee', (req, res) => {
    logic.editEmployee(req.body.id, req.body.name, req.body.designation, req.body.salary, req.body.experience).then(result => {
        res.status(result.statusCode).json(result)
    })
})
