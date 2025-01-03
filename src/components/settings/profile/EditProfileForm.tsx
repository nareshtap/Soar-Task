import React, { useEffect, useRef, useState } from 'react';
import InputField from './InputField';
import ProfilePicture from './ProfilePicture';
import { User } from '../../../utils/types/users';
import { ToastContainer, toast } from 'react-toastify';

type EditProfileFormProps = {
    userData: User;
};

const EditProfileForm: React.FC<EditProfileFormProps> = ({ userData }) => {
    const [formData, setFormData] = useState(userData);
    const [profileImage, setProfileImage] = useState(userData.profilePicture);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isChanged, setIsChanged] = useState<boolean>(false);
    const initialFormData = useRef(userData);

    useEffect(() => {
        const isFormChanged = Object.keys(formData).some(
            (key) => formData[key as keyof User] !== initialFormData.current[key as keyof User]
        );
        const hasErrors = Object.values(errors).some((error) => error !== '');
        setIsChanged(isFormChanged && !hasErrors);
    }, [formData, errors]);

    const validateField = (name: string, value: string): string => {
        switch (name) {
            case 'email':
                if (!value || !/^\S+@\S+\.\S+$/.test(value)) {
                    return 'Please enter a valid email address.';
                }
                break;
            case 'password':
                {
                    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
                    if (!value || !passwordRegex.test(value)) {
                        return 'Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character.';
                    }
                    break;
                }
            case 'name':
                if (!value.trim()) {
                    return 'Name is required.';
                }
                break;
            case 'username':
                if (!value.trim()) {
                    return 'Username is required.';
                }
                break;
            default:
                break;
        }
        return '';
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        const errorMessage = validateField(name, value);
        setErrors((prev) => ({
            ...prev,
            [name]: errorMessage,
        }));
    };

    const validateForm = (): boolean => {
        const newErrors: Record<string, string> = {};
        Object.keys(formData).forEach((key) => {
            const error = validateField(key, formData[key as keyof User] as string);
            if (error) newErrors[key] = error;
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSave = () => {
        if (validateForm()) {
            toast.success('Profile updated successfully!', {
                autoClose: 1000,
            });
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSave();
        }
    };

    return (
        <>
            <form
                className="flex lg:gap-[57px] flex-col lg:flex-row gap-6"
                onKeyDown={handleKeyDown}
            >
                <div className="col-span-2 flex justify-center">
                    <ProfilePicture
                        image={profileImage}
                        onImageChange={(file) => setProfileImage(URL.createObjectURL(file))}
                    />
                </div>
                <div className='flex flex-col gap-4 md:gap-10 w-full'>
                    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-y-[22px] gap-x-0 gap-y-4 md:gap-x-7'>
                        <InputField
                            label="Your Name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Charlene Reed"
                            error={errors.name}
                        />
                        <InputField
                            label="User Name"
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Charlene Reed"
                            error={errors.username}
                        />
                        <InputField
                            label="Email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="charlenereed@gmail.com"
                            error={errors.email}
                        />
                        <InputField
                            label="Password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="***********"
                            error={errors.password}
                        />
                        <InputField
                            label="Date of Birth"
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            placeholder="25 January 1990"
                        />
                        <InputField
                            label="Present Address"
                            type="text"
                            name="presentAddress"
                            value={formData.presentAddress}
                            onChange={handleChange}
                            placeholder="San Jose, California, USA"
                        />
                        <InputField
                            label="Permanent Address"
                            type="text"
                            name="permanentAddress"
                            value={formData.permanentAddress}
                            onChange={handleChange}
                            placeholder="San Jose, California, USA"
                        />
                        <InputField
                            label="City"
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="San Jose"
                        />
                        <InputField
                            label="Postal Code"
                            type="text"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                            placeholder="45962"
                        />
                        <InputField
                            label="Country"
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            placeholder="USA"
                        />
                    </div>

                    <div className="flex justify-end items-center">
                        <button
                            type="button"
                            onClick={handleSave}
                            disabled={!isChanged}
                            className="w-full max-w-full sm:max-w-[190px] disabled:bg-slate-400 disabled:cursor-not-allowed disabled:text-gray-200 disabled:border-none py-2 md:py-[10px] rounded-[9px] md:rounded-2xl border-[#232323] border hover:bg-transparent bg-[#232323] hover:text-[#232323] text-white transition-all text-[15px] md:text-lg font-medium"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </>
    );
};

export default EditProfileForm;
