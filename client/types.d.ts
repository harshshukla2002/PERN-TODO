interface TODOCARDPROPS {
  todo: TODO;
  getTodos: () => void;
  setIsVisible: (value: boolean) => void;
  setToastProps: (TOASTPROPS) => void;
}

interface TODO {
  todo_id: number;
  description: string;
}

interface TOASTPROPS {
  message: string;
  type: "success" | "error";
}

interface TODOINPUTPROPS {
  getTodos: () => void;
  setIsVisible: (value: boolean) => void;
  setToastProps: (TOASTPROPS) => void;
}
