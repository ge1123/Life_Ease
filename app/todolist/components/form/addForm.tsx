import { AddFormProps } from '@/todolist/types/index.type';
import InputField from '@/todolist/components/modal/inputField';


const AddForm: React.FC<AddFormProps> = ({ todo, formatDate, handleAddChange }) => {
    return (
        <>
            <InputField
                label="標題"
                type="text"
                name="title"
                placeholder="請輸入標題"
                value={todo.title}
                onChange={handleAddChange}
            />
            <InputField
                label="內容"
                type="text"
                name="description"
                placeholder="請輸入內容"
                value={todo.description}
                onChange={handleAddChange}
            />
            <InputField
                label="到期日"
                type="date"
                name="dueDate"
                placeholder="請輸入時間"
                value={formatDate(todo.dueDate)}
                onChange={handleAddChange}
            />
        </>
    )
}

export default AddForm;