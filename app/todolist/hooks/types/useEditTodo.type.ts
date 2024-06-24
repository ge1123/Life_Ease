import { TodoList } from "@/todolist/types/index.type";
import { UpdateTodoAsync } from "@/todolist/types/index.type";

type UseEditTodo = {
    todo: TodoList;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: () => void;
}

export type UseEditTodoHook = (id: number, toggleModal: () => void, handleUpdate: UpdateTodoAsync) => UseEditTodo;