import React from 'react';

type ProfilePictureProps = {
    image: string;
    onImageChange: (file: File) => void;
};

const ProfilePicture: React.FC<ProfilePictureProps> = ({ image, onImageChange }) => {
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            onImageChange(event.target.files[0]);
        }
    };

    return (
        <div className="flex flex-col items-center gap-2">
            <img
                src={image}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
            />
            <label className="cursor-pointer text-blue-500">
                <span className="hover:underline">Edit</span>
                <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                />
            </label>
        </div>
    );
};

export default ProfilePicture;
