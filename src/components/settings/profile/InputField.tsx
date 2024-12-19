import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


type InputFieldProps = {
    label: string;
    type: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    error?: string;
};

const InputField: React.FC<InputFieldProps> = ({
    label,
    type,
    name,
    value,
    onChange,
    placeholder,
    error,
}) => (
    <div className="relative">
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <Tippy content={error || ''} visible={!!error} placement="right" arrow={true}>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`mt-1 block w-full rounded-md border ${error ? 'border-red-500' : 'border-gray-300'
                    } shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            />
        </Tippy>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
);

export default InputField;
