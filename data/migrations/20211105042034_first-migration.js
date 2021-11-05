
exports.up = function (knex) {
    return knex.schema
        .createTable('projects', table => {
            table.increments('project_id')
            table.string('project_name', 128).notNullable()
            table.string('project_description', 256)
            table.integer('project_completed').defaultTo(0)
        })
        .createTable('resources', table => {
            table.increments('resource_id')
            table.string('resource_name', 128).notNullable().unique()
            table.string('resource_description', 256)
        })
        .createTable('tasks', table => {
            table.increments('tasks_id')
            table.string('task_description', 256).notNullable()
            table.string('task_notes', 128)
            table.integer('task_completed').defaultTo(0)
            table.integer('project_id').notNullable()
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
    })
        .createTable('project_resources', table => {
            table.increments('project_resources_id')
            table.integer('project_id').notNullable()
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
            table.integer('resource_id').notNullable()
                .unsigned()
                .notNullable()
                .references('resource_id')
                .inTable('resources')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
    })
  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
}


// exports.up = function (knex) {
//     return knex.schema
//         .createTable('recipes', table => {
//             table.increments('recipe_id').primary()
//             table.string('recipe_name', 128).notNullable().unique()
//             table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
//         })
//         .createTable('ingredients', table => {
//             table.increments('ingredient_id').primary()
//             table.string('ingredient_name', 256).notNullable().unique()
//             table.string('ingredient_unit', 33)
//         })
//         .createTable('steps', table => {
//             table.increments('step_id').primary()
//             table.integer('step_number')
//             table.string('step_instructions', 256)
//             table.integer('recipe_id')
//                 .unsigned()
//                 .notNullable()
//                 .references('recipe_id')
//                 .inTable('recipes')
//                 .onDelete('RESTRICT')
//                 .onUpdate('RESTRICT')
//         })
//         .createTable('recipe_books', table => {
//             table.increments('recipe_book_id').primary()
//             table.decimal('quantity')
//             table.integer('ingredient_id')
//                 .unsigned()
//                 .notNullable()
//                 .references('ingredient_id')
//                 .inTable('ingredients')
//                 .onDelete('RESTRICT')
//                 .onUpdate('RESTRICT')
//             table.integer('step_id')
//                 .unsigned()
//                 .notNullable()
//                 .references('step_id')
//                 .inTable('steps')
//                 .onDelete('RESTRICT')
//                 .onUpdate('RESTRICT')
//         })
// }

// exports.down = function (knex) {
//     return knex.schema
//         .dropTableIfExists('recipe_books')
//         .dropTableIfExists('steps')
//         .dropTableIfExists('ingredients')
//         .dropTableIfExists('recipes')
// }