const express = require('express')
const app = express()
const dotenv = require('dotenv');
const connectDB = require('./config/db')
const cors = require("cors");
const TodoSchema = require('./Models/todo')
dotenv.config();

connectDB()

app.use(express.json({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const port = process.env.PORT

app.get('/getTodos', async (req, res) => {
  var todo = await TodoSchema.find({})
  res.status(200).send({ todos: todo })
})

app.post('/addTodo', async (req, res) => {
  try {
    const todo = new TodoSchema({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status
    });
    let response = await todo.save();
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.put('/updateTodo/:id', async (req, res) => {
  try {
    var todo = await TodoSchema.findById(req.params.id)
    todo.completed = !todo.completed
    await todo.save()
    res.send({ message: "Horray!! You completed task successfully" })

  } catch (error) {
    res.send({ message: error.message })
  }
})

app.delete('/deleteTodo/:id', async (req, res) => {
  try {
    var todo = await TodoSchema.findByIdAndDelete(req.params.id)
    res.send({ message: "Todo Deleted" })

  } catch (error) {
    res.send({ message: error.message })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})