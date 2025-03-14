import express from "express";
import cors from "cors";
import todoRouter from "./routes/todo.route";

const server = express();
const PORT = 5500;

server.use(cors());
server.use(express.json());

server.use("/api/todos", todoRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "server is running", success: true });
});

server.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
