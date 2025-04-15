import express from 'express';
const app = express();
app.use(express.json());
const port = 3000;

import Task from './model/task.js';

app.get('/tasks', async (req, res)=>{
  const tasks = await Task.findAll();
  res.status(200).json(tasks);
});

app.post('/tasks', async (req,res)=>{
  try{
    const newTask = await Task.create(req.body);
    res.status(201).json(newTask);
  }catch(err){
    res.status(400).json("Erro ao criar tarefa", err);
  }
});

app.listen(port, () => {
  console.log(`App de exemplo esta rodando na porta ${port}`)
});