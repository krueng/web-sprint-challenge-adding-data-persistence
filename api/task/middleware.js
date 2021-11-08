const projects = require('../project/model')

const validatePost = async (req, res, next) => {

    const { task_description, project_id } = req.body

    if (
        typeof project_id !== 'number' ||
        typeof task_description !== 'string' ||
        !task_description.trim().length) {
        next({
            message: 'project id and task description are required'
        })
    } else {
        const project = await projects.getProjectById(project_id)

        if (!project) {
            next({
                message: 'cannot find project'
            })
        } else {
            next()
        }

    }
}

module.exports = {
    validatePost
}
