const { getById, getByIdRaw } = require("../services/courseService");

module.exports = (lean) => async(req, res, next) => {
    lean ? res.locals.course = await getById(req.params.id) : res.locals.course = await getByIdRaw(req.params.id);
    next();
};