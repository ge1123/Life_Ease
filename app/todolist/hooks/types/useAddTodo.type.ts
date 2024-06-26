
import { TodoList, FormatDate, ToggleModalVisibility } from '@/todolist/types/index.type';

type UseAddTodo = {
    todo: TodoList;
    handleAddChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleAddSubmit: () => void;
    formatDate: FormatDate;
}



export type UseAddTodoState = (toggleModalOpenState:ToggleModalVisibility) => UseAddTodo;

