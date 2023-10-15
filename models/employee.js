// models/Employee.js
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    first_name: { type: String, required: true, maxlength: 100 },
    last_name: { type: String, required: true, maxlength: 50 },
    email: { type: String, unique: true, maxlength: 50 },
    gender: { type: String, maxlength: 25 },
    salary: { type: Number, required: true },
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
