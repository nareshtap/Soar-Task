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

        if (!formData.password || formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters long.';
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
                className="grid grid-cols-2 gap-4"
                onKeyDown={handleKeyDown}
            >
                <div className="col-span-2 flex justify-center">
                    <ProfilePicture
                        image={profileImage}
                        onImageChange={(file) => setProfileImage(URL.createObjectURL(file))}
                    />
                </div>
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

                <div className="col-span-2">
                    <button
                        type="button"
                        onClick={handleSave}
                        className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Save
                    </button>
                </div>
            </form>

            {/* Toast container to render the notifications */}
            <ToastContainer />
        </>
    );
};

export default EditProfileForm;
