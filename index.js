import express from 'express';
const app = express();
app.use(express.json());
const port = 3000;

import { getTasks, createTask, findTask } from './controller/task-controller.js';

app.get('/tasks', getTasks);
app.get('/tasks/:id',findTask);
app.post('/tasks', createTask);

app.listen(port, () => {
  console.log(`App de exemplo esta rodando na porta ${port}`)
});