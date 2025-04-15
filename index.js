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
  const newTask = await Task.create(req.body);
  res.status(201).json(newTask);
});

app.listen(port, () => {
  console.log(`App de exemplo esta rodando na porta ${port}`)
});