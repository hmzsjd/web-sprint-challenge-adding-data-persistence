const express = require("express");
const Task = require("./model");
const { checkProjectID } = require('./middleware');

const router = express.Router();

router.post("/", checkProjectID, (req, res, next) => {
  const task = req.body;

  Task.add(task)
    .then((newTask) => {

      res.status(201).json(newTask);

    })
    .catch(next);
});

router.get("/", (req, res, next) => {
  Task.find()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch(next);
});

module.exports = router;
