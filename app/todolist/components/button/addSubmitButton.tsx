import { AddSubmitButtonProps } from '@/todolist/types/index.type';
import BaseButton from '@/_components/baseButton';

const AddSubmitButton: React.FC<AddSubmitButtonProps> = ({ handleAddSubmit }) => {

    return (
        <BaseButton
            onClick={handleAddSubmit}
            icon={<i className="fas fa-save"></i> /* 儲存 icon */}
            className="addItem__submit-button"
        />
    );
}

export default AddSubmitButton;