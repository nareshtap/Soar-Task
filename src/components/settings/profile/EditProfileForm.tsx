import React, { useState } from 'react';
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

    const validate = (): boolean => {
        const newErrors: Record<string, string> = {};

        if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address.';
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (!formData.password || !passwordRegex.test(formData.password)) {
            newErrors.password =
                'Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character.';
        }

        if (!formData.name) {
            newErrors.name = 'Name is required.';
        }

        if (!formData.username) {
            newErrors.username = 'Username is required.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: '',
        }));
    };

    const handleSave = () => {
        if (validate()) {
            console.log('Form Data:', formData);
            console.log('Profile Image:', profileImage);

            toast.success('Profile updated successfully!', {

                autoClose: 1000,
            });
        } else {
            console.log('Validation failed:', errors);
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
                            className="w-full max-w-full sm:max-w-[190px] py-2 md:py-[10px] rounded-[9px] md:rounded-2xl border-[#232323] border hover:bg-transparent bg-[#232323] hover:text-[#232323] text-white transition-all text-[15px] md:text-lg font-medium "
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>

            {/* Toast container to render the notifications */}
            <ToastContainer />
        </>
    );
};

export default EditProfileForm;
