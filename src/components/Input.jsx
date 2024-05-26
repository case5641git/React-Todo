import React, {useState} from "react"

const Input = props => {
    const [newTodo, setNewTodo] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        if(newTodo === '') return
        props.setTodos(todos => [...todos, {task:newTodo}])
        setNewTodo('')
    }

    const handleNewTodo = event => {
        setNewTodo(event.target.value)
    }

    return (
        <section>
            <h2>ADD TASK</h2>
            <form 
                onSubmit={handleSubmit} 
                className="task-area">
                    <input 
                        className="inputArea" t
                        ype="text" value={newTodo} 
                        placeholder='New Todo' 
                        onChange={handleNewTodo}
                    />
            </form>
        </section>
    )
}

export default Input