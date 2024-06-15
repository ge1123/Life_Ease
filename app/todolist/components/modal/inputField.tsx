import React from 'react';
import '@/todolist/styles/index.scss';

interface InputFieldProps {
    label: string;
    type: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, name, placeholder, value, onChange }) => {
    return (
        <label className="inputField__label">
            {label}
            <input
                className="inputField__input"
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            />
        </label>
    );
};

export default InputField;
