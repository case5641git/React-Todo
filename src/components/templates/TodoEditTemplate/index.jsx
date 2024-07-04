import { useTodoContext } from "../../../context/TodoContext";
import { BaseLayout } from "../../organisms/BaseLayout";
import { useTodoEditTemplate } from "./useTodoEditTemplate";
import styles from "./styles.module.css";
import { InputForm } from "../../atoms/InputForm";
import { CustomButton } from "../../atoms/CustomButton";

export const TodoEditTemplate = () => {
  const { originTodoList, updateTodo } = useTodoContext();

  const [
    { todo, inputTitle, inputContent },
    { handleChangeTitle, handleChangeContent, handleUpdateTodo },
  ] = useTodoEditTemplate({ originTodoList, updateTodo });

  return (
    <BaseLayout title={"TodoEdit"}>
      {!!todo && (
        <form className={styles.container} onSubmit={handleUpdateTodo}>
          <div className={styles.area}>
            <InputForm
              value={inputTitle}
              placeholder={"Title"}
              onChange={handleChangeTitle}
            />
          </div>
          <div className={styles.area}>
            <InputForm
              value={inputContent}
              placeholder={"Content"}
              onChange={handleChangeContent}
            />
          </div>
          <div className={styles.area}>
            <CustomButton type="submit" label="Edit Todo" />
          </div>
        </form>
      )}
    </BaseLayout>
  );
};
