import { deleteTodo, updateTodos } from "@/api";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";

const TodoCard = ({
  todo,
  getTodos,
  setIsVisible,
  setToastProps,
}: TODOCARDPROPS) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [desc, setDesc] = useState<string>(todo.description);

  const { mutate: updateMutate, isPending } = useMutation({
    mutationFn: updateTodos,
    onSuccess: (data) => {
      setIsVisible(true);
      setToastProps({ message: data.message, type: "success" });
      getTodos();
      setIsEdit(false);
    },
    onError: (error: any) => {
      console.error(
        "error occured in update todo",
        error?.response?.data?.message || error
      );
      setToastProps({
        message:
          error?.response?.data?.message || "error occured in update todo",
        type: "error",
      });
    },
  });

  const { mutate: deleteMutate } = useMutation({
    mutationFn: deleteTodo,
    onSuccess: (data) => {
      setIsVisible(true);
      setToastProps({ message: data.message, type: "success" });
      getTodos();
    },
    onError: (error: any) => {
      console.error(
        "error occured in delete todo",
        error?.response?.data?.message || error
      );
      setToastProps({
        message:
          error?.response?.data?.message || "error occured in delete todo",
        type: "error",
      });
    },
  });

  return (
    <div className="flex flex-row gap-2 items-center m-2">
      {isEdit ? (
        <div className="flex gap-1 items-center w-full">
          <input
            placeholder="enter title"
            required
            className="outline-none border-2 border-b-5 rounded-full px-3 py-1 text-lg w-[80%]"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          />
          <button
            className="flex-1 outline-none border-2 border-b-5 rounded-full px-3 py-1 text-xl cursor-pointer hover:bg-black hover:text-white transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={isPending}
            onClick={() =>
              updateMutate({ body: { description: desc }, id: todo.todo_id })
            }
          >
            Update
          </button>
        </div>
      ) : (
        <>
          <h1 className="text-2xl flex-5">{todo.description}</h1>
          <div className="flex-1 flex flex-row gap-2 items-center justify-center">
            <FiEdit2
              size={40}
              className="cursor-pointer hover:bg-gray-300 p-2 rounded"
              onClick={() => setIsEdit(true)}
            />
            <MdOutlineDelete
              size={40}
              className="cursor-pointer hover:bg-red-300 p-2 rounded"
              onClick={() => deleteMutate(todo.todo_id)}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default TodoCard;
