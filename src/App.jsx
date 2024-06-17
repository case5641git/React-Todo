import Title from "./components/Title";
import Input from "./components/Input";
import Search from "./components/Search";
import Todolist from "./components/Todolist";
import "./App.css";
import useTodos from "./hooks/useTodos";

const App = () => {
  const {
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
  } = useTodos();

  return (
    <div className="wrapper">
      <Title title="Todo List"></Title>
      <Input
        todos={todos}
        newTodo={newTodo}
        handleNewTodo={handleNewTodo}
        handleSubmit={handleSubmit}
      ></Input>
      <Search handleSearch={handleSearch}></Search>
      <Todolist
        todos={todos}
        searchKeyword={searchKeyword}
        editingIndex={editingIndex}
        handleOnEdit={handleOnEdit}
        setEditingIndex={setEditingIndex}
        handleKeyPress={handleKeyPress}
        handleDelTodo={handleDelTodo}
      ></Todolist>
    </div>
  );
};

export default App;
