
import React from 'react';
import Slider from 'react-slick';

interface FrequentTransferUser {
    id: number;
    userId: number;
    name: string;
    role: string;
    profilePicture: string;
}

interface UserSliderProps {
    users: FrequentTransferUser[];
}

const UserSlider: React.FC<UserSliderProps> = ({ users }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="max-w-2xl mx-auto">
            <Slider {...settings}>
                {users.map((user) => (
                    <div key={user.id} className="flex flex-col items-center p-4">
                        <img
                            src={user.profilePicture}
                            alt={user.name}
                            className="w-24 h-24 rounded-full object-cover mb-2"
                        />
                        <p className="text-lg font-medium text-gray-700">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.role}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default UserSlider;
