// build your `Project` model here
const e = require("express");
const db = require("../../data/dbConfig");

async function find() {

    const projects = await db('projects')

    const results = [];

    projects.forEach(proj => {
        if(proj.project_completed === 1) {
            proj.project_completed = true
        } else {
            proj.project_completed = false
        }
        results.push(proj);
    })

    return results;
  }

async function add(project) {
    const newProject = await db('projects')
    .insert(project)
    const intermediate = await db('projects').where('project_id', newProject).first()

    const response = {
        project_id: intermediate.project_id,
        project_name: intermediate.project_name,
        project_description: intermediate.project_description,
        project_completed: (intermediate.project_completed ? true : false)
    }

    return response;

    
}


module.exports = {
  add,
  find
}
