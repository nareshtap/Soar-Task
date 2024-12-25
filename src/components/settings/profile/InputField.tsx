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
    <div className="relative flex flex-col gap-2 md:gap-3">
        <label className="block text-[13px] font-normal md:text-base  text-[#232323]">{label}</label>
        <Tippy content={error || ''} visible={!!error} placement="right" arrow={true}>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`flex py-3 md:py-[14px] px-5 box-border placeholder:text-[#718EBF] w-full rounded-2xl border ${error ? 'border-red-500' : 'border-[#DFEAF2]'
                    } shadow-sm focus:ring-[#232323] focus:border-[#232323] text-xs sm:text-sm`}
            />
        </Tippy>
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
);

export default InputField;
