import { useTodoContext } from "../../../context/TodoContext";
import { BaseLayout } from "../../organisms/BaseLayout";
import { useTodoCreateTemplate } from "./useTopCreateTemplate";
import styles from "./styles.module.css";
import { InputForm } from "../../atoms/InputForm";
import { TextArea } from "../../atoms/TextArea";
import { CustomButton } from "../../atoms/CustomButton";

export const TodoCreateTemplate = () => {
  const { addTodo } = useTodoContext();
  const [
    { inputTitle, inputContent },
    { handleChangeTitle, handleChangeContent, handleCreateTodo },
  ] = useTodoCreateTemplate({ addTodo });

  return (
    <BaseLayout title={"Create Todo"}>
      <form className={styles.container} onSubmit={handleCreateTodo}>
        <div className={styles.area}>
          <InputForm
            value={inputTitle}
            placeholder={"Title"}
            onChange={handleChangeTitle}
          />
        </div>
        <div className={styles.area}>
          <TextArea
            value={inputContent}
            placeholder={"Content"}
            onChange={handleChangeContent}
          />
        </div>
        <div className={styles.area}>
          <CustomButton type="submit" label="Create Todo" />
        </div>
      </form>
    </BaseLayout>
  );
};
