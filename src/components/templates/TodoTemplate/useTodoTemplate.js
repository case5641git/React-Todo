import { useCallback, useMemo, useState } from "react";

export const useTodoTemplate = ({ originTodoList }) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  console.log("originTodoList at useTodoTemplate:", originTodoList);

  const showTodoList = useMemo(() => {
    const regexp = new RegExp("^" + searchKeyword, "i");
    return originTodoList.filter((todo) => {
      return todo.title.match(regexp);
    });
  }, [originTodoList, searchKeyword]);

  const handleChangeSearchKeyword = useCallback(
    (e) => setSearchKeyword(e.target.value),
    []
  );

  const states = {
    searchKeyword,
    showTodoList,
  };

  const actions = {
    handleChangeSearchKeyword,
  };

  return [states, actions];
};
