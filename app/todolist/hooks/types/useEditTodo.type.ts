import { TodoList, FormatDate } from "@/todolist/types/index.type";

type UseEditTodo = {
    todo: TodoList;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: () => void;
    formatDate: FormatDate;
}

export type UseEditTodoState = (toggleModal: () => void, id: number) => UseEditTodo;