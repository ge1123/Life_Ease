import '@/todolist/styles/index.scss';
import React from 'react';
import {InputFieldProps} from '@/todolist/types/index.type';

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
