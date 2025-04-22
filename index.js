import express from 'express';
const app = express();
app.use(express.json());
const port = 3000;

import TaskRouter from './router/task-router.js';

app.use('/tasks', TaskRouter);

app.listen(port, () => {
  console.log(`App de exemplo esta rodando na porta ${port}`)
});