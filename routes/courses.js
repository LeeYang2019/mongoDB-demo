const express = require('express');
const router = express.Router();
const Course = require('../models/Courses');

//get courses from mongodb
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find().sort({ date: -1 });
    res.send(courses);
  } catch (error) {
    console.error('error', error.message);
  }
});

//add a course
router.post('/', async (req, res) => {
  try {
    const courseObj = new Course({
      name: req.body.name,
      author: req.body.author,
      tags: req.body.tags,
      isPublished: req.body.isPublished,
    });
    const result = await courseObj.save();
    res.send(result);
  } catch (error) {
    console.error('error', error.message);
  }
});

//GET A COURSE By ID
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.send(course);
  } catch (error) {
    console.error('error', error.message);
  }
});

//UPDATE A COURSE By ID
router.put('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return;
    course.set({
      name: req.body.name,
      author: req.body.author,
      tags: req.body.tags,
      isPublished: req.body.isPublished,
    });
    const result = await course.save();
    res.send(result);
  } catch (error) {
    console.error('error', error.message);
  }
});

//DELETE A COURSE
router.delete('/:id', async (req, res) => {
  try {
    const result = await Course.deleteOne({ _id: req.params.id });
    res.send(result);
  } catch (error) {
    console.error('error', error.message);
  }
});

module.exports = router;
