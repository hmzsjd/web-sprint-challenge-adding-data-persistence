// build your `/api/projects` router here
const express = require("express");
const Project = require("./model");
const { validateProject } = require('./middleware');


const router = express.Router();

router.post("/", validateProject, (req, res, next) => {
  const project = req.body;

  Project.add(project)
    .then((project) => {

      res.status(201).json(project);

    })
    .catch(next);
});

router.get("/", (req, res, next) => {
  Project.find()
    .then((projects) => {
      res.json(projects);
    })
    .catch(next);
});

module.exports = router;
