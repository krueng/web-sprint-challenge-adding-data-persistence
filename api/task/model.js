const db = require('../../data/dbConfig');

async function getTasks() {
    const results = await db('tasks as t')
    .join('projects as p', 't.project_id', 'p.project_id')
    return results.map(result => ({
        ...result,
        task_completed: Boolean(result.task_completed)
    }))
}

function getTaskById(task_id) {
    return db('tasks').where({ task_id }).first()
}

async function postTask(task) {
    const [task_id] = await db('tasks').insert(task)
    const result = await getTaskById(task_id)
    return {
        ...result,
        task_completed: Boolean(result.task_completed)
    }
}

module.exports = {
    getTasks,
    postTask,
}
