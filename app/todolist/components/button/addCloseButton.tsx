
import { AddCloseButtonProps } from '@/todolist/types/index.type';
import BaseButton from '@/_components/baseButton';



const AddCloseButton: React.FC<AddCloseButtonProps> = ({ toggleModalOpenStatus }) => {

    return (
        <BaseButton
            onClick={() => toggleModalOpenStatus()}
            icon={<i className="fas fa-times"></i> /* 關閉視窗 X */}
            className="addItem__close-button"
        />
    );
}

export default AddCloseButton;