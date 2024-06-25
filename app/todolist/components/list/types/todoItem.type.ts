import {TodoList, DeleteTodoAsync, UpdateTodoAsync} from '@/todolist/types/index.type';

/**
 * 每一項的代辦事項。
 * 
 * @interface TodoItemProps
 * @property {boolean} loading - 指示當前是否處於加載狀態。
 * @property {TodoList[]} todoList - 待辦事項的數組。
 * @property {DeleteTodoAsync} deleteTodo - 用於刪除待辦事項的函數。
 * @property {UpdateTodoAsync} updateTodo - 用於更新待辦事項的函數。
 */
export interface TodoItemProps {
  }