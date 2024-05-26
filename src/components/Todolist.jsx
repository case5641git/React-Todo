import React from 'react'

const Todolist = props => {
    const handleDelTodo =  index => {
        const newTodos = todos => [...todos].filter((todo, todoIndex) => todoIndex !== index)
        props.setTodos(newTodos)
      }
    
      const handleOnEdit = (index, value) => {
        const newTodos = props.todos.map((todo, todoIndex) => {
          if (todoIndex === index) {
            return { ...todo, task: value }
          }
          return todo
        })
        props.setTodos(newTodos)
      }
    
      const handleKeyPress = (index, event) => {
        if (event.key === 'Enter') {
          event.target.blur()
          props.setEditingIndex(null)
        }
      }

      return (
        <section>
        <div className="task-area">
          <ul className="todolist">
            {props.todos.filter(val => {
              if (props.searchKeyword === '') {
                return val
              } else if (val.task.toString().toLowerCase().includes(props.searchKeyword.toString().toLowerCase())) {
                return val
              } return false
            }).map((todo, index) => (
              <li className="todo" key={index}>
                <input 
                  className={props.editingIndex === index ? 'editing': ''}
                  type="text" 
                  value={todo.task} 
                  onChange={event => handleOnEdit(index, event.target.value)}
                  onFocus={() => props.setEditingIndex(index)}
                  onBlur={()=>props.setEditingIndex(null)}
                  onKeyPress={event => handleKeyPress(index, event)}
                /> 
                <span onClick={() => handleDelTodo(index)}>
                  <i className="far fa-trash-alt"></i>
                </span> 
              </li>
            ))}
          </ul>
        </div>
      </section>
      )
}

export default Todolist