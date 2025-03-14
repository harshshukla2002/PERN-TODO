"use client";

import { getTodos } from "@/api";
import Toast from "@/component/Toast";
import TodoCard from "@/component/TodoCard";
import TodoInput from "@/component/TodoInput";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<TODO[]>([]);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [toastProps, setToastProps] = useState<TOASTPROPS>({
    message: "",
    type: "success",
  });

  const { mutate, isPending, error } = useMutation({
    mutationFn: getTodos,
    onSuccess: (data) => {
      setTodos(data.todos);
    },
    onError: (error: any) => {
      console.log(
        "error occured in getTodos!!",
        error?.reponse?.data?.message || error
      );
    },
  });

  console.log(todos);

  useEffect(() => {
    mutate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let timeout: any;
    if (isVisible) {
      timeout = setTimeout(() => setIsVisible(false), 3000);
    }

    return () => clearTimeout(timeout);
  }, [isVisible]);

  return (
    <>
      {isVisible && (
        <Toast message={toastProps.message} type={toastProps.type} />
      )}
      <main className="w-[1024px] mx-auto mt-[5%]">
        <h1 className="text-3xl text-center">TODO App</h1>
        <div className="h-1 border-b-2 border-gray-300" />
        <TodoInput
          getTodos={mutate}
          setIsVisible={setIsVisible}
          setToastProps={setToastProps}
        />
        <div className="border-2 border-b-5 rounded-full mt-[3%] p-5 px-10">
          {isPending && <h1 className="text-2xl text-center">Loading...</h1>}
          {error && (
            <h1 className="text-2xl text-center text-red-500 font-bold">
              Error occurred!!, check console.
            </h1>
          )}
          {!isPending &&
            !error &&
            todos.length > 0 &&
            todos.map((todo, index) => {
              if (index === todos.length - 1) {
                return (
                  <TodoCard
                    key={todo.todo_id}
                    todo={todo}
                    getTodos={mutate}
                    setIsVisible={setIsVisible}
                    setToastProps={setToastProps}
                  />
                );
              } else {
                return (
                  <>
                    <TodoCard
                      key={todo.todo_id}
                      todo={todo}
                      getTodos={mutate}
                      setIsVisible={setIsVisible}
                      setToastProps={setToastProps}
                    />
                    <div className="h-1 border-b-2 border-gray-300" />
                  </>
                );
              }
            })}
        </div>
      </main>
    </>
  );
}
