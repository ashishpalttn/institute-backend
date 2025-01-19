const express = require('express');
const studentController = require('../controllers/student.controller')

const router = express.Router()

router.get('/student', studentController.getAllStudents)
router.post('/student', studentController.createStudent)
router.delete('/student/:id', studentController.deleteStudent)
router.put('/student/:id', studentController.updateStudent)
router.get('/student/search', studentController.searchStudents)
module.exports = router
