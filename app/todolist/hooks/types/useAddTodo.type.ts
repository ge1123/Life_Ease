
import { TodoList, FormatDate, AddTodoAsync, ToggleModalOpenState } from '@/todolist/types/index.type';

type UseAddTodo = {
    todo: TodoList;
    handleAddChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleAddSubmit: () => void;
    formatDate: FormatDate;
}



export type UseAddTodoHook = (toggleModalOpenState:ToggleModalOpenState, handleAdd: AddTodoAsync) => UseAddTodo;

