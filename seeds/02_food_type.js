/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pet_food_types').del()
  await knex('pet_food_types').insert([
    {id: 1, name: 'bugs', description: 'live bugs'},
    {id: 2, name: 'seeds', description: 'for birds'},
    {id: 3, name: 'meat', description: 'chickn'}
  ]);
};
