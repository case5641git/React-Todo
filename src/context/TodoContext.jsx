import { useContext, createContext } from "react";
import { useTodo } from "../hooks/useTodos.js";

const TodoContext = createContext({});

export const TodoProvider = ({ children }) => {
  const { originTodoList, addTodo, updateTodo, deleteTodo } = useTodo();

  console.log("originTodoList at TodoContext:", originTodoList);

  return (
    <TodoContext.Provider
      value={{ originTodoList, addTodo, updateTodo, deleteTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
