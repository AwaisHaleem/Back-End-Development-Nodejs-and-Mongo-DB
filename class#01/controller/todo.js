const todoModel = require('../models/todoSchema');


const todoAdd = async(req, res)=>{
    let todoCreate = await todoModel({todoName: req.body.todoWalaKam})
    todoCreate.save()
    .then((response)=>{
        res.status(200).send({result: response, message: "todo is added"});
    })
    .catch((err)=>{
        res.status(400).send({result: err.message, message: "Todo not added successfully"})
    })
    
}

const getAllTodo = async(req, res)=>{
    const result = await todoModel.find({});
    res.status(200).send({message: "All data fetched succesfully", data: result});

}

module.exports({todoAdd, getAllTodo});