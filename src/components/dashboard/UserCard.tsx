import React from 'react';

interface UserCardProps {
    name: string;
    role: string;
    profilePicture: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, role, profilePicture }) => {
    return (
        <div className="flex flex-col items-center">
            <img
                src={profilePicture}
                alt={name}
                className="w-24 h-24 rounded-full"
            />
            <h3 className="text-lg">{name}</h3>
            <p className="text-gray-500">{role}</p>
        </div>
    );
};

export default UserCard;