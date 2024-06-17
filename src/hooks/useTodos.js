import { useState } from "react";
import { INIT_TODO_LIST } from "../constants/data";

const useTodos = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState(INIT_TODO_LIST); //Todoリスト
  const [searchKeyword, setSearchKeyword] = useState(""); //検索欄
  const [editingIndex, setEditingIndex] = useState(null); //編集中の

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTodo === "") return;
    setTodos((todos) => [...todos, { task: newTodo }]);
    setNewTodo("");
  };

  const handleNewTodo = (event) => {
    setNewTodo(event.target.value);
  };

  const handleSearch = (event) => {
    setSearchKeyword(event.target.value);
  };

  const handleDelTodo = (index) => {
    const newTodos = (todos) =>
      [...todos].filter((todo, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  };

  const handleOnEdit = (index, value) => {
    const newTodos = todos.map((todo, todoIndex) => {
      if (todoIndex === index) {
        return { ...todo, task: value };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.target.blur();
      setEditingIndex(null);
    }
  };

  return {
    todos,
    newTodo,
    searchKeyword,
    editingIndex,
    setEditingIndex,
    handleSubmit,
    handleNewTodo,
    handleSearch,
    handleDelTodo,
    handleOnEdit,
    handleKeyPress,
  };
};

export default useTodos;
