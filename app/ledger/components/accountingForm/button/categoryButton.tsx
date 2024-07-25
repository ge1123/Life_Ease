import '@/ledger/styles/accountingForm/categoryButton.scss';
import { CategoryButtonProps } from '@/ledger/components/accountingForm/button/types';



const CategoryButton: React.FC<CategoryButtonProps> = ({ category, bgStyle, onClick, hoverStyle }) => {
    return (
        <button
            onClick={() => onClick(category)}
            className={`categoryButton ${bgStyle} ${hoverStyle}`}>
            {category}
        </button>
    )
}

export default CategoryButton;