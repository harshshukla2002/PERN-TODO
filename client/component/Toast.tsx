import React from "react";

type TYPE = "success" | "error";

interface TOASTPROPS {
  message: string;
  type: TYPE;
}

const Toast = ({ message, type }: TOASTPROPS) => {
  return (
    <div
      className={`border-2 border-b-5 p-1 w-[20%] ${
        type === "success" ? "border-green-500" : "border-red-500"
      } text-center absolute z-1 top-3 right-3 rounded-full text-xl`}
    >
      {message}
    </div>
  );
};

export default Toast;
