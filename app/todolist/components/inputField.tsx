import React from 'react';

const InputField: React.FC<InputFieldProps> = ({ label, type, name, placeholder, value, onChange }) => {
    return (
        <label className="block text-lg font-semibold text-gray-700 mb-2">
            {label}
            <input
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
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
