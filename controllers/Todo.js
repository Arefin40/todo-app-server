import Todo from "../models/Todo.js";
import { request } from "../utils/index.js";

// create a todo
export const create = request(async (req, res) => {
   const todo = await Todo.create(req.body);
   res.status(201).send({ success: true, message: "Todo added successfully", data: todo });
});

// get all todos
export const getAll = request(async (req, res) => {
   const todos = await Todo.find().lean();
   res.status(200).send(todos);
});

// get todo details
export const getTodo = request(async (req, res) => {
   const todo = await Todo.findOne({ id: req.params.id });
   res.status(200).send(todo);
});

// update todo
export const update = request(async (req, res) => {
   const { title, completed } = req.body;
   await Todo.updateOne({ _id: req.params.id }, { title, completed }, { runValidators: true });
   res.status(200).send({ success: true, message: "Todo updated successfully" });
});

// delete todo
export const remove = request(async (req, res) => {
   await Todo.deleteOne({ _id: req.params.id });
   res.status(200).send({ success: true, message: "Todo deleted successfully" });
});
