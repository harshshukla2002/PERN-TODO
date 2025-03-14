import { addTodos } from "@/api";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";

const TodoInput = ({
  getTodos,
  setIsVisible,
  setToastProps,
}: TODOINPUTPROPS) => {
  const [desc, setDesc] = useState<string>("");

  const { mutate, isPending } = useMutation({
    mutationFn: addTodos,
    onSuccess: (data) => {
      setIsVisible(true);
      setToastProps({ message: data.message, type: "succes" });
      setDesc("");
      getTodos();
    },
    onError: (error: any) => {
      console.log("error on add todo", error?.response?.data?.message || error);
      setIsVisible(true);
      setToastProps({
        message: error?.response?.data?.message || "error on add todo",
        type: "error",
      });
    },
  });

  return (
    <div className="mt-[2%]">
      <form
        className="flex gap-1 items-center"
        onSubmit={(e) => {
          e.preventDefault();
          mutate({ description: desc });
        }}
      >
        <input
          placeholder="enter title"
          required
          className="outline-none border-2 border-b-5 rounded-full px-3 py-1 text-lg flex-4"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
        <button
          className="flex-1 outline-none border-2 border-b-5 rounded-full px-3 py-1 text-xl cursor-pointer hover:bg-black hover:text-white transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          disabled={isPending}
          type="submit"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
