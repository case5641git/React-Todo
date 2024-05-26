import {useState} from 'react'
import Title from './components/Title'
import Input from './components/Input'
import Search from './components/Search'
import Todolist from './components/Todolist'
import './App.css'

export const App = () => {
  const initialTodoState = [
    {
      task: 'Todo1'
    },
    {
      task: 'Todo2'
    }
  ]

  const [todos, setTodos] = useState(initialTodoState) //Todoリスト
  const [searchKeyword, setSearchKeyword] = useState('') //検索欄
  const [editingIndex, setEditingIndex] = useState(null) //編集中のインデックス
  
  const handleSearch = event => {
    setSearchKeyword(event.target.value)
  }  

  return (
    <div className="wrapper">
      <Title title="Todo List"></Title>
      <Input todos={todos} setTodos={setTodos}></Input>
      <Search todos={todos} value={searchKeyword} onChange={handleSearch}></Search>
      <Todolist todos={todos} setTodos={setTodos} searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} editingIndex={editingIndex} setEditingIndex={setEditingIndex}></Todolist>
    </div>
  )
}
