const projects = [
    { project_name: "foo", project_description: null, project_completed: 0 },
    { project_name: "baz", project_description: "fizz", project_completed: 1 }
]

exports.seed = async function (knex) {
    await knex('projects').insert(projects)
}