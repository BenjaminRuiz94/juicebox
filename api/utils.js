const { user } = require("pg/lib/defaults");

function requireUser(req, res, next) {
  if (!req.user) {
    next({
      name: "MissingUserError",
      message: "You must be logged in to perform this action",
    });
  }

  next();
}

//work zone

function requireActiveUser(req, res, next) {
  if (!req.user || req.user.active === false) {
    next({
      name: "MissingUserError",
      message: "You must be logged in to perform this action",
    });
  }

  next();
}

//work zone end
module.exports = {
  requireUser,
  requireActiveUser,
};
