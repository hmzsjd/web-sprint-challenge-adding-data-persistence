const e = require("express");
const db = require("../../data/dbConfig");

async function find() {
  const rows = await db("tasks as t")
    .join("projects as p", "t.project_id", "p.project_id")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name",
      "p.project_description"
    );

  const results = [];

  rows.forEach((t) => {
    if (t.task_completed === 1) {
      t.task_completed = true;
    } else {
      t.task_completed = false;
    }
    results.push(t);
  });

  return results;
}

async function add(task) {
  const newTask = await db("tasks").insert(task);
  const intermediate = await db("tasks").where("task_id", newTask).first();

  const response = {
    task_id: intermediate.task_id,
    task_description: intermediate.task_description,
    task_notes: intermediate.task_notes,
    task_completed: intermediate.task_completed ? true : false,
    project_id: intermediate.project_id,
  };

  return response;
}

module.exports = {
  add,
  find,
};
