import express from 'express';
import bodyParser from 'body-parser';

import tasksRoutes from './routes/tasks.js';
import { getTasksTable, getTodoById, tasks } from './controllers/tasks.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/todos', tasksRoutes);

app.get('/', getTasksTable);

app.get('/todos', (req, res) => {
    res.json(tasks);
});

app.get('/todos/:id', getTodoById);

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`)); 