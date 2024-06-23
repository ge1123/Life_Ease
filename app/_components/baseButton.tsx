import { BaseButtonProps } from '@/_components/type/baseButtonProps.type';

const BaseButton: React.FC<BaseButtonProps> = ({ className, onClick, icon }) => {
    return (
        <button
            className={className}
            onClick={onClick}>
            {icon}
        </button>
    );
};

export default BaseButton;
