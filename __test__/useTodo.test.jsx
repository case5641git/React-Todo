// import { renderHook, act } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
// import useTodos from "../src/hooks/useTodos.js";
// import { INIT_TODO_LIST } from "../src/constants/data.js";

// describe("【カスタムフックテスト】useApps test", () => {
//   describe("【関数テスト】handleSubmit", () => {
//     let expectTodos = [];
//     let eventObject = {
//       target: {
//         value: "New Todo",
//       },
//       key: "Enter",
//     };
//     beforeEach(() => {
//       eventObject = {
//         preventDefault: jest.fn(),
//         target: {
//           value: "NewTodo",
//         },
//         key: "Enter",
//       };
//       expectTodos = [...INIT_TODO_LIST, { task: "NewTodo" }];
//     });
//     test("【正常系】todosが更新されること", () => {
//       const { result } = renderHook(() => useTodos());
//       act(() => {
//         result.current.handleNewTodo(eventObject);
//       });
//       act(() => {
//         result.current.handleSubmit({ preventDefault: () => {} });
//       });
//       expect(result.current.todos).toEqual(expectTodos);
//       expect(result.current.newTodo).toBe("");
//     });

//     test("【正常系】入力値が無かった場合、todosに追加しないこと", () => {
//       const { result } = renderHook(() => useTodos());
//       eventObject.target.value = "";
//       act(() => {
//         result.current.handleNewTodo(eventObject);
//       });
//       act(() => {
//         result.current.handleSubmit({ preventDefault: () => {} });
//       });
//       expect(result.current.todos).toEqual(INIT_TODO_LIST);
//       expect(result.current.newTodo).toBe("");
//     });
//   });

//   describe("【関数テスト】handleNewTodo", () => {
//     let eventObject = {
//       target: {
//         value: "NewTodo",
//       },
//       key: "Enter",
//     };
//     beforeEach(() => {
//       eventObject = {
//         target: {
//           value: "NewTodo",
//         },
//         key: "Enter",
//       };
//     });
//     test("【正常系】newTodoが更新されること", () => {
//       const { result } = renderHook(() => useTodos());

//       act(() => {
//         result.current.handleNewTodo(eventObject);
//       });

//       expect(result.current.newTodo).toBe(eventObject.target.value);
//     });
//   });

//   describe("【関数テスト】handleSearch", () => {
//     let eventObject = {
//       target: {
//         value: "SearchTodo",
//       },
//       key: "Enter",
//     };
//     beforeEach(() => {
//       eventObject = {
//         target: {
//           value: "SearchTodo",
//         },
//         key: "Enter",
//       };
//     });

//     test("【正常系】検索された文字列に一致するtodosが返されること", () => {
//       const { result } = renderHook(() => useTodos());

//       act(() => {
//         result.current.handleSearch(eventObject);
//       });

//       expect(result.current.searchKeyword).toBe(eventObject.target.value);
//     });
//   });

//   describe("【関数テスト】handleDelTodo", () => {
//     test("【正常系】todosからtodoが削除されること", () => {
//       const { result } = renderHook(() => useTodos());
//       act(() => {
//         result.current.handleDelTodo(0);
//       });

//       expect(result.current.todos).toEqual(INIT_TODO_LIST.slice(1));
//     });
//   });

//   describe("【関数テスト】handleOnEdit", () => {
//     let expectEditTodo = "EditTodo";
//     beforeEach(() => {
//       expectEditTodo = "EditTodo";
//     });
//     test("【正常系】todoが編集後の値に更新されるかどうか", () => {
//       const { result } = renderHook(() => useTodos());
//       act(() => {
//         result.current.handleOnEdit(0, expectEditTodo);
//       });
//       expect(result.current.todos[0].task).toBe(expectEditTodo);
//     });
//   });

//   describe("【関数テスト】handleKeyPress", () => {
//     let eventObject = {
//       target: {
//         blur: jest.fn(),
//       },
//       key: "Enter",
//     };
//     beforeEach(() => {
//       eventObject = {
//         target: {
//           blur: jest.fn(),
//         },
//         key: "Enter",
//       };
//     });
//     test("【正常系】Enterを押されたら編集かが完了するかどうか", () => {
//       const { result } = renderHook(() => useTodos());
//       act(() => {
//         result.current.handleKeyPress(eventObject);
//       });
//       expect(eventObject.target.blur).toHaveBeenCalled();
//       expect(result.current.editingIndex).toBeNull();
//     });
//   });
// });
