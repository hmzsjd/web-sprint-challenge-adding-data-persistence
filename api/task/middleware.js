const db = require("../../data/dbConfig");

const checkProjectID = (req, res, next) => {
  const project =  db("projects")
    .where("project_id", req.body.project_id)
    .first();
  if (project) {
    next();
  } else {
    next({
      message: `Project with ID ${req.body.project_id} does not exist, cannot add tasks to nonexistent project`,
      status: 404,
    });
  }
};

module.exports = {
  checkProjectID,
};
