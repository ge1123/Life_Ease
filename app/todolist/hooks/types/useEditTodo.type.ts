import { TodoList, UpdateTodoAsync, FormatDate } from "@/todolist/types/index.type";

type UseEditTodo = {
    todo: TodoList;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: () => void;
    formatDate: FormatDate;
}

export type UseEditTodoHook = (toggleModal: () => void, handleUpdate: UpdateTodoAsync, item: TodoList) => UseEditTodo;