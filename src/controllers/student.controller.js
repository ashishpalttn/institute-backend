const { Op } = require('sequelize');
const {Student} = require('../../models');

exports.getAllStudents = async (req, res) => {
    try{
        const students = await Student.findAll();
        res.status(200).json(students)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

exports.createStudent = async (req, res) => {
    try{
        const newStudent = await Student.create(req.body);
        res.status(201).json(newStudent)
    }
    catch(error){
        res.status(500).json({error:"faild to create student"})
    }
}

exports.deleteStudent = async (req, res) => {
    try{
    const {id} = req.params;
        const deletedStudent = await Student.destroy({where:{id}})
        if(deletedStudent){
            res.status(200).json("Student deleted Successfully")
        }else{
            res.status(404).json("student not found")
        }
        
    }catch(error){
        res.status(500).json({error:"failed to delete student"})
    }
}

exports.updateStudent = async (req, res) => {
    try{
        const id = req.params.id;
        const updateStudent = await Student.update(req.body,{
            where:{id:id}
        })
        if(updateStudent){
            const student = await Student.findByPk(id)
            res.status(200).json(student)
        }else{
            res.status(404).json({error:'student not found'})
        }
    }catch(e){
        res.status(501).json({error:e.message})
    }
}

exports.searchStudents = async (req, res)=>{
    try{
        const {id, name} = req.query
        const whereClause = {};
        if(!id && !name){
           return res.status(400).json("please pass the parameters id or name")
        }
        if(name){
            whereClause.studentName = {[Op.iLike]:`%${name}%`}
        }
        if(id){
            whereClause.id = id
        }
        const students = await Student.findAll({where : whereClause})
        
        if(students.length===0){
            return res.status(400).json("No student found")
        }
        res.json(students)

    }catch(e){
        console.error(e)
        res.status(500).send('Server Error')
    }
}