exports.createTask = async (req, res) => {
  try {
    const task = await req.taskController.createTask(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: 'FailToCreate' });
  }
};

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await req.taskController.getAllTasks();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'FailToFetchTasks' });
  }
};

exports.getSingleTask = async (req, res) => {
  try {
    const task = await req.taskController.getSingleTask(Number(req.params.id));
    res.status(200).json(task);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await req.taskController.updateTask(
      Number(req.params.id),
      req.body
    );
    res.status(200).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await req.taskController.deleteTask(Number(req.params.id));
    res.status(200).json(task);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};
