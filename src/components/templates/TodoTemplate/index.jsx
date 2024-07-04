import { useTodoContext } from "../../../context/TodoContext";
import { InputForm } from "../../atoms/InputForm";
import { BaseLayout } from "../../organisms/BaseLayout";
import { TodoList } from "../../organisms/TodoList";
import styles from "./styles.module.css";
import { useTodoTemplate } from "./useTodoTemplate";

export const TodoTemplate = () => {
  const { originTodoList, deleteTodo } = useTodoContext();
  console.log("originTodoList at TodoTemplate:", originTodoList);

  const [{ searchKeyword, showTodoList }, { handleChangeSearchKeyword }] =
    useTodoTemplate({ originTodoList });
  return (
    <BaseLayout title={"Todo List"}>
      <div className={styles.container}>
        <div className={styles.area}>
          <InputForm
            value={searchKeyword}
            placeholder={"Search Keyword"}
            onChange={handleChangeSearchKeyword}
          />
        </div>
        <div className={styles.area}>
          {showTodoList.length > 0 && (
            <TodoList todoList={showTodoList} handleDeleteTodo={deleteTodo} />
          )}
        </div>
      </div>
    </BaseLayout>
  );
};
