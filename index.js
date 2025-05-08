const express = require('express');

const helmet = require('helmet');
const cors = require('cors');
var bodyParser = require('body-parser');
const fileUploads = require('express-fileupload');
const { TaskController } = require('./model/task_model');
const task_routes = require('./routes/task_routes');

const notFoundMiddleware = require('./error');

const app = express();

const PORT = 4200;

app.use(
  fileUploads({
    useTempFiles: true,
  })
);

app.use(bodyParser.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json());
app.use(helmet());
app.use(cors());

const taskController = new TaskController();

app.use('/api/tasks', task_routes(taskController));

app.use(notFoundMiddleware);

const start = async () => {
  try {
    app.listen(PORT, () =>
      console.log(`Server is listening on port ${PORT}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
