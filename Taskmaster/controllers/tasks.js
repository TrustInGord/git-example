import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';

const DATA_FILE = './tasks.json';

const loadTasks = () => {
    try {
        if (fs.existsSync(DATA_FILE)) {
            const data = fs.readFileSync(DATA_FILE, 'utf8');
            return JSON.parse(data);
        }
    } catch (err) {
        console.error('Error loading tasks:', err);
    }
    return [
        {
            title: "Complete Project",
            person: "John Doe",
            subtasks: ["Design mockups", "Write code", "Test application"],
            id: 1
        },
        {
            title: "Grocery Shopping",
            person: "Jane Smith",
            subtasks: ["Buy milk", "Buy eggs", "Buy bread"],
            id: 2
        }
    ];
};

const saveTasks = () => {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2));
    } catch (err) {
        console.error('Error saving tasks:', err);
    }
};

export let tasks = loadTasks();

export const createTask = (req, res) => {
    const task = req.body;
    console.log('POST ROUTE REACHED');

    tasks.push({ ...task, id: uuidv4() });
    saveTasks();
    
    res.send(`Task with the title ${task.title} added to the database!`);
}

export const getTasks = (req, res) => {
    res.send(tasks);
    console.log(tasks);
}


export const getTask = (req, res) => {
    const { id } = req.params;

    const foundTask = tasks.find((task) => task.id == id);

    res.send(foundTask);
}

export const deleteTask = (req, res) => {
    const { id } =  req.params;

    tasks = tasks.filter((task) => task.id != id);
    saveTasks();

    res.send(`Task with the id ${id} deleted from the database.`);
}

export const updateTask = (req, res) => {
    const { id } = req.params;
    const { title, person, subtasks, status } = req.body;

    const task = tasks.find((task) => task.id == id);
    
    if(!task) {
        return res.status(404).send(`Task with id ${id} not found`);
    }
    
    if(title) {
        task.title = title;
    }

    if(person) {
        task.person = person;
    }

    if(subtasks) {
        task.subtasks = subtasks;
    }

    if(status) {
        task.status = status;
    }

    saveTasks();
    res.send(`Task with the id ${id} has been updated`);
    
}

export const getTodoById = (req, res) => {
    const { id } = req.params;
    const task = tasks.find((task) => task.id == id);
    if (task) {
        const subtasksList = task.subtasks ? task.subtasks.map(s => 
            typeof s === 'string' ? `<li>${s}</li>` : `<li>${s.task} - ${s.person}</li>`
        ).join('') : '';
        
        const statusColor = task.status === 'pending' ? '#ffd700' : task.status === 'complete' ? '#4caf50' : '#f44336';
        const statusText = task.status === 'pending' ? 'P' : task.status === 'complete' ? '✓' : '✗';
        
        res.send(`
            <html>
                <head>
                    <title>Task: ${task.title}</title>
                    <link rel="stylesheet" href="/taskDetail.css">
                </head>
                <body>
                    <h1>Task Details</h1>
                    <div class="task-container">
                        <div class="task-header">
                            <div class="task-title">${task.title}</div>
                            <div class="status-circle" id="statusCircle" onclick="cycleStatus()" style="background: ${statusColor}; color: ${task.status === 'pending' ? 'black' : 'white'};">${statusText}</div>
                        </div>
                        <div class="task-content">
                            <div class="task-info">
                                <span class="label">Assigned to:</span> ${task.person}
                            </div>
                            <div class="task-info">
                                <span class="label">Subtasks:</span>
                                <ul>${subtasksList}</ul>
                            </div>
                            <div class="task-id">ID: ${task.id}</div>
                        </div>
                    </div>
                    <div style="text-align: center;">
                        <a href="/">← Back to All Tasks</a>
                    </div>
                    <script>
                        window.taskStatus = '${task.status || 'pending'}';
                        window.taskId = '${task.id}';
                    </script>
                    <script src="/taskDetail.js"></script>
                </body>
            </html>
        `);
    } else {
        res.status(404).send(`Task with id ${id} not found`);
    }
}

export const getTasksTable = (req, res) => {
    const tableRows = tasks.map(task => {
        const subtasksList = task.subtasks ? task.subtasks.map(s => 
            typeof s === 'string' ? `<li>${s}</li>` : `<li>${s.task} - ${s.person}</li>`
        ).join('') : '';
        return `<tr><td>${task.title}</td><td>${task.person}</td><td><ul>${subtasksList}</ul></td><td>${task.id}</td></tr>`;
    }).join('');
    
    res.send(`
        <html>
            <head><title>Lists</title></head>
            <body>
                <h1>Lists</h1>
                <table border="1">
                    <tr><th>Title</th><th>Person</th><th>Subtasks</th><th>ID</th></tr>
                    ${tableRows}
                </table>
            </body>
        </html>
    `);
}