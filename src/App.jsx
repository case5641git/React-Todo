import {useState} from 'react'
import './App.css'

export const App = () => {
  const [todos, setTodos] = useState([]) //Todoリスト
  const [newTodo, setNewTodo] = useState('') //入力欄
  
  const handleAddTodo = e => {
    if(e.key === 'Enter' && newTodo.trim() !== '') {
      setTodos([...todos, newTodo.trim()])
      setNewTodo('')
    }
  }

  const handleInputChange = e => {
    setNewTodo(e.target.value);
  }

  const handleDelTodo =  index => {
    const delTodoList = [...todos]
    delTodoList.splice(index, 1)
    setTodos(delTodoList)
  }
  

  return (
    <div className="App">
      <h2>Todo List</h2>
      <section>
        <h3>ADD TASK</h3>
        <input 
          type="text" 
          placeholder="New Todo" 
          value={newTodo} 
          onChange={handleInputChange}
          onKeyDown={handleAddTodo}
        />
      </section>
      <section>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}<span onClick={()=>handleDelTodo(index)}>x</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
