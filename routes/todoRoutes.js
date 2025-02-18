import express from "express";
import * as Todo from "../controllers/Todo.js";

const router = express.Router();

// create a todo
router.post("/", Todo.create);

// get all todos
router.get("/", Todo.getAll);

// update todo
router.patch("/:id", Todo.update);

// delete todo
router.delete("/:id", Todo.remove);

export default router;
