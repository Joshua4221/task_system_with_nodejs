const express = require('express');
const {
  createTask,
  getAllTasks,
  getSingleTask,
  updateTask,
  deleteTask,
} = require('../controllers/task_controller');

module.exports = function (taskController) {
  const router = express.Router();

  // Inject taskController into each request
  router.use((req, res, next) => {
    req.taskController = taskController;
    next();
  });

  router.route('/').post(createTask).get(getAllTasks);
  router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask);

  return router;
};
