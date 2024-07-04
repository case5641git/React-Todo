// import Input from "./components/Input";
// import Search from "./components/molecules/Search";
// import Todolist from "./components/templates/Todolist";
// import "./App.css";
// import { useTodoContext } from "./context/TodoContext";
// import { InputForm } from "./components/atoms/InputForm";

// const App = () => {
//   const {
//     todos,
//     newTodo,
//     searchKeyword,
//     editingIndex,
//     setEditingIndex,
//     handleSubmit,
//     handleNewTodo,
//     handleSearch,
//     handleDelTodo,
//     handleOnEdit,
//     handleKeyPress,
//   } = useTodoContext();

//   return (
//     <div className="wrapper">
//       <h1>Todo List</h1>
//       <Input
//         todos={todos}
//         value={newTodo}
//         handleNonChangeewTodo={handleNewTodo}
//         handleSubmit={handleSubmit}
//       ></Input>
//       <InputForm newTodo={newTodo} />
//       <Search handleSearch={handleSearch}></Search>
//       <Todolist
//         todos={todos}
//         searchKeyword={searchKeyword}
//         editingIndex={editingIndex}
//         handleOnEdit={handleOnEdit}
//         setEditingIndex={setEditingIndex}
//         handleKeyPress={handleKeyPress}
//         handleDelTodo={handleDelTodo}
//       ></Todolist>
//     </div>
//   );
// };

// export default App;
