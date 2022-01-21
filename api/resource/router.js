const express = require("express");
const Resource = require("./model");
const { validateResource } = require("./middleware");

const router = express.Router();

router.post("/", validateResource, (req, res, next) => {
  const resource = req.body;

  Resource.add(resource)
    .then((newResource) => {
      res.status(201).json(newResource);
    })
    .catch(next);
});

router.get("/", (req, res, next) => {
  Resource.find()
    .then((resources) => {
      res.json(resources);
    })
    .catch(next);
});

module.exports = router;
