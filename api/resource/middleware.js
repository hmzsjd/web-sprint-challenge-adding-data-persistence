const validateResource = (req, res, next) => {
    if (!req.body.resource_name) {
      next({ message: "Resource Name Required", status: 400 });
    } else {
      next();
    }
  };
  
  module.exports = {
    validateResource,
  };
  