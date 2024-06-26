import { AddButtonProps } from '@/todolist/types/index.type';
import BaseButton from '@/_components/baseButton';

const AddButton: React.FC<AddButtonProps> = ({ toggleModalVisibility }) => {
    return (
        <BaseButton
            onClick={() => toggleModalVisibility()}
            icon={<i className="fas fa-plus"></i>}
            className="todoList__addButton"
        />
    );
};

export default AddButton;