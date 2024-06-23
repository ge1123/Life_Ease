import { EditButtonProps } from '@/todolist/types/index.type';


const EditButton: React.FC<EditButtonProps> = ({ toggleModal }) => {
    return (
        <button
            className="updateButton__button"
            onClick={toggleModal}
        >
            <i className="fa fa-edit align-middle"></i>
        </button>
    )
}

export default EditButton;