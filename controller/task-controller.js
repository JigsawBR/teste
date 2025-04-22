import Task from "../model/task.js";

export async function getTasks(req, res){
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
}

export async function createTask(req,res){
    try{
      const newTask = await Task.create(req.body);
      res.status(201).json(newTask);
    }catch(err){
      console.log(err);
      res.status(400).json("Erro ao criar tarefa");
    }
  }