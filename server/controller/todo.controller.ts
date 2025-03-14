import { Request, Response } from "express";
import pool from "../config/db";

export const getTodos = async (req: Request, res: Response) => {
  try {
    const query = "SELECT * FROM todo";
    const newTodo = await pool.query(query);

    return res.status(200).json({
      message: "get todos successfully",
      success: true,
      todos: newTodo.rows,
    });
  } catch (error: any) {
    console.error("error on get todos", error.messsage || error);
    res
      .status(500)
      .json({ message: error.message || "error on get todos", success: false });
  }
};

export const addTodo = async (req: Request, res: Response) => {
  try {
    const { description } = req.body;
    const query = "INSERT INTO todo (description) VALUES ($1) RETURNING *";
    const newTodo = await pool.query(query, [description]);
    return res.status(200).json({
      message: "todo added successfully",
      success: true,
      todo: newTodo.rows[0],
    });
  } catch (error: any) {
    console.error("error on add todos", error.messsage || error);
    return res
      .status(500)
      .json({ message: error.message || "error on add todos", success: false });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const query =
      "UPDATE todo SET description = $1 where todo_id = $2 RETURNING *";
    const newTodo = await pool.query(query, [description, id]);
    return res.status(200).json({
      message: "todo updated successfully",
      success: true,
      todo: newTodo.rows[0],
    });
  } catch (error: any) {
    console.error("error on udpate todos", error.messsage || error);
    res.status(500).json({
      message: error.message || "error on udpate todos",
      success: false,
    });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const query = "DELETE FROM todo WHERE todo_id=$1";
    const newTodo = await pool.query(query, [id]);
    return res.status(200).json({
      message: "todo deleted successfully",
      success: true,
    });
  } catch (error: any) {
    console.error("error on delete todos", error.messsage || error);
    res.status(500).json({
      message: error.message || "error on delete todos",
      success: false,
    });
  }
};
