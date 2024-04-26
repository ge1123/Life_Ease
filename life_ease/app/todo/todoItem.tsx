
const TodoItem = ({ todoList }: { todoList: Todo[] | null }) => {
    return (
        <div>
            {todoList !== null &&
                todoList.map((todo, index) => (
                    <div key={index}>
                        <span>{todo.name}</span>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                ))}
        </div>
    );
}


export default TodoItem;