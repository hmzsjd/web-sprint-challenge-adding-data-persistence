// build your `Resource` model here
// build your `Project` model here
const e = require("express");
const db = require("../../data/dbConfig");

async function find() {

    return await db('resources')

}

async function add(resource) {
    const newResource = await db('resources')
    .insert(resource)
    return await db('resources').where('resource_id', newResource).first()
    
}

module.exports = {
  add,
  find
}

