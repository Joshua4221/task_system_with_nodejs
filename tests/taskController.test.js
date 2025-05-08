const { TaskController } = require('../model/task_model');

describe('TaskController', () => {
  let taskController;

  beforeEach(() => {
    taskController = new TaskController();
  });

  test('should create a task', async () => {
    const task = await taskController.createTask({
      title: 'Test Task',
      description: 'Test Description',
      status: 'pending',
    });

    expect(task).toMatchObject({
      id: 0,
      title: 'Test Task',
      description: 'Test Description',
      status: 'pending',
    });
  });

  test('should return all tasks', async () => {
    await taskController.createTask({
      title: 'T1',
      description: 'D1',
      status: 'new',
    });
    await taskController.createTask({
      title: 'T2',
      description: 'D2',
      status: 'done',
    });

    const tasks = await taskController.getAllTasks();
    expect(tasks.length).toBe(2);
    expect(tasks[0].title).toBe('T1');
    expect(tasks[1].title).toBe('T2');
  });

  test('should get a task by ID', async () => {
    await taskController.createTask({
      title: 'Find Me',
      description: 'Detail',
      status: 'open',
    });
    const task = await taskController.getSingleTask(0);

    expect(task.title).toBe('Find Me');
  });

  test('should update a task', async () => {
    await taskController.createTask({
      title: 'Old',
      description: 'Old Desc',
      status: 'old',
    });
    const updated = await taskController.updateTask(0, {
      title: 'New',
      description: 'New Desc',
      status: 'new',
    });

    expect(updated.title).toBe('New');
    expect(updated.description).toBe('New Desc');
    expect(updated.status).toBe('new');
  });

  test('should delete a task', async () => {
    await taskController.createTask({
      title: 'Delete Me',
      description: 'Bye',
      status: 'x',
    });
    const deleted = await taskController.deleteTask(0);

    expect(deleted.title).toBe('Delete Me');
    const allTasks = await taskController.getAllTasks();
    expect(allTasks).toHaveLength(0);
  });

  test('should throw on getting non-existent task', async () => {
    await expect(taskController.getSingleTask(99)).rejects.toThrow(
      'FailToGetTaskWithThisId'
    );
  });

  test('should throw on deleting non-existent task', async () => {
    await expect(taskController.deleteTask(88)).rejects.toThrow(
      'FailToDeleteTaskById'
    );
  });

  test('should throw on updating non-existent task', async () => {
    await expect(
      taskController.updateTask(77, {
        title: 'X',
        description: 'Y',
        status: 'Z',
      })
    ).rejects.toThrow('FailToUpdateTask');
  });
});
