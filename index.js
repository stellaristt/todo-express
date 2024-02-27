const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const listsRouter = require('./routes/lists');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/users');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/lists', listsRouter);
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
