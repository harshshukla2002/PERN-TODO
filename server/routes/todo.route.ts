import { Router } from "express";
import {
  addTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../controller/todo.controller";

const todoRouter = Router();

todoRouter.get("/", (req, res) => {
  getTodos(req, res);
});
todoRouter.post("/create", (req, res) => {
  addTodo(req, res);
});
todoRouter.put("/update/:id", (req, res) => {
  updateTodo(req, res);
});
todoRouter.delete("/delete/:id", (req, res) => {
  deleteTodo(req, res);
});

export default todoRouter;
