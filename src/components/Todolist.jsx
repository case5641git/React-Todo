import React from "react";

const Todolist = (props) => {
  return (
    <section>
      <div className="task-area">
        <ul className="todolist">
          {props.todos
            .filter((val) => {
              if (props.searchKeyword === "") {
                return val;
              } else if (
                val.task
                  .toString()
                  .toLowerCase()
                  .includes(props.searchKeyword.toString().toLowerCase())
              ) {
                return val;
              }
              return false;
            })
            .map((todo, index) => (
              <li className="todo" key={index}>
                <input
                  className={props.editingIndex === index ? "editing" : ""}
                  type="text"
                  value={todo.task}
                  onChange={(event) =>
                    props.handleOnEdit(index, event.target.value)
                  }
                  onFocus={() => props.setEditingIndex(index)}
                  onBlur={() => props.setEditingIndex(null)}
                  onKeyPress={(event) => props.handleKeyPress(index, event)}
                />
                <span onClick={() => props.handleDelTodo(index)}>
                  <i className="far fa-trash-alt"></i>
                </span>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Todolist;
