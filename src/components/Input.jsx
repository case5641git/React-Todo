import React from "react";

const Input = (props) => {
  return (
    <section>
      <h2>ADD TASK</h2>
      <form onSubmit={props.handleSubmit} className="task-area">
        <input
          className="inputArea"
          type="text"
          value={props.newTodo}
          placeholder="New Todo"
          onChange={props.handleNewTodo}
        />
      </form>
    </section>
  );
};

export default Input;
