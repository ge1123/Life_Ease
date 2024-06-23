import { AddCloseButtonProps } from '@/todolist/types/index.type';
import BaseButton from '@/_components/baseButton';


const EditCloseButton: React.FC<AddCloseButtonProps> = ({ toggleModalOpenStatus }) => {

    return (
        <BaseButton
            onClick={toggleModalOpenStatus}
            icon={<i className="fas fa-times"></i> /* 關閉視窗 X */}
            className="editItem__close-button"
        />
    );
}

export default EditCloseButton;