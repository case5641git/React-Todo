import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { NAVIGATION_PATH } from "../../../constants/navigations";

export const useTodoCreateTemplate = ({ addTodo }) => {
  const navigate = useNavigate();

  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  /**
   * titleの変更処理
   * @type {function(*): void}
   */
  const handleChangeTitle = useCallback(
    (e) => setInputTitle(e.target.value),
    []
  );

  /**
   * content変更処理
   * @type {function(*): void}
   */
  const handleChangeContent = useCallback(
    (e) => setInputContent(e.target.value),
    []
  );

  /**
   * Todo追加処理
   * @type {(function(*): void | *)}
   */
  const handleCreateTodo = useCallback(
    (e) => {
      console.log(inputTitle);
      console.log(inputContent);
      e.preventDefault();
      if (inputTitle !== "" && inputContent !== "") {
        addTodo(inputTitle, inputContent);
        navigate(NAVIGATION_PATH.TOP);
      }
    },
    [addTodo, inputTitle, inputContent, navigate]
  );

  const states = {
    inputTitle,
    inputContent,
  };

  const actions = {
    handleChangeTitle,
    handleChangeContent,
    handleCreateTodo,
  };

  return [states, actions];
};
