import '@/ledger/styles/accountingForm/categoryButton.scss';
import { CategoryButtonProps } from '@/ledger/components/accountingForm/button/types';



const CategoryButton: React.FC<CategoryButtonProps> = ({ category, bgColor }) => {
    return (
        <button
            className={`categoryButton bg-${bgColor}-500 hover:bg-${bgColor}-600`}>
            {category}
        </button>
    )
}

export default CategoryButton;