const validateProject = (req, res, next) => {
  if (!req.body.project_name) {
    next({ message: "Project Name Required", status: 400 });
  } else {
    next();
  }
};

module.exports = {
  validateProject,
};
