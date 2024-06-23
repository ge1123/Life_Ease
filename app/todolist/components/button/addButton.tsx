import { AddButtonProps } from '@/todolist/types/index.type';

const AddButton: React.FC<AddButtonProps> = ({ toggleModalOpenStatus }) => {
    return (
        <button
            className="todoList__addButton"
            onClick={() => toggleModalOpenStatus()}>
            <i className="fas fa-plus"></i> {/* 新增 + */}
        </button>
    )
}

export default AddButton;