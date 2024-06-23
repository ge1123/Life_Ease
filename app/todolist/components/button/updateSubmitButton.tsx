import { UpdateSubmitButtonProps } from '@/todolist/types/index.type';
import BaseButton from '@/_components/baseButton';


const UpdateSubmitButton: React.FC<UpdateSubmitButtonProps> = ({ handleSubmit }) => {

    return (
        <BaseButton
            onClick={handleSubmit}
            icon={<i className="fas fa-save"></i> /* 儲存 icon */}
            className="editItem__submit-button"
        />
    );
}

export default UpdateSubmitButton;