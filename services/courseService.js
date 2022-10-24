const Course = require("../models/Course");


async function getAllByDate() {
    return Course.find({}).sort({ createdAt: 1 }).lean();
}

async function createCourse(course) {
    return Course.create(course);
}

async function getRecent() {
    return Course.find({}).sort({ usersCount: -1 }).limit(3).lean();
}

async function getById(id) {
    return Course.findById(id).lean();
}

async function deleteById(id) {
    return Course.findByIdAndDelete(id);
}

// async function 

module.exports = {
    getAllByDate,
    createCourse,
    getRecent,
    getById,
    deleteById
}