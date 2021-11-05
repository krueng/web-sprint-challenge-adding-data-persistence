const db = require('../../data/dbConfig');

function getRecources() {
        return db('resources')
}

async function postRecource(resource) {
    const [resource_id] = await db('resources').insert(resource)
    return getRecources().where({ resource_id }).first()
}

module.exports = {
    getRecources,
    postRecource,
}
