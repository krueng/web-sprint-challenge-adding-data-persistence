const db = require('../../data/dbConfig');

async function getProjects() {
    const results = await db('projects')
    return results.map(result => ({
        ...result,
        project_completed: Boolean(result.project_completed)
    }))
}

function getProjectById(project_id) {
    return db('projects').where({ project_id }).first()
}

async function postProject(project) {
    const [project_id] = await db('projects').insert(project)
    const result = await getProjectById(project_id)
    return {
        ...result,
        project_completed: Boolean(result.project_completed)
    }
}

module.exports = {
    getProjects,
    postProject,
}
