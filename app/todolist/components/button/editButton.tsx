import { EditButtonProps } from '@/todolist/types/index.type';
import BaseButton, {} from '@/_components/baseButton';

const EditButton: React.FC<EditButtonProps> = ({ toggleModal }) => {
 
    return (
        <BaseButton
            onClick={toggleModal}
            icon={<i className="fa fa-edit align-middle"></i> /* 編輯 icon */}
            className="updateButton__button"
        />
    )
}

export default EditButton;