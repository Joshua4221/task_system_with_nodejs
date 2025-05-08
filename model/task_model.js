class Task {
  constructor(id, title, description, status) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
  }
}

class TaskController {
  constructor() {
    this.tasks = [];
  }

  async createTask({ title, description, status }) {
    const id = this.tasks.length;
    const task = new Task(id, title, description, status);
    this.tasks.push(task);
    return task;
  }

  async getAllTasks() {
    return this.tasks.filter((task) => task !== null);
  }

  async getSingleTask(id) {
    const task = this.tasks[id];
    if (!task) throw new Error('FailToGetTaskWithThisId');
    return task;
  }

  async deleteTask(id) {
    const task = this.tasks[id];
    if (!task) throw new Error('FailToDeleteTaskById');

    this.tasks[id] = null;
    return task;
  }

  async updateTask(id, { title, description, status }) {
    const task = this.tasks[id];
    if (!task) throw new Error('FailToUpdateTask');

    task.title = title;
    task.description = description;
    task.status = status;

    return task;
  }
}

module.exports = { TaskController };
