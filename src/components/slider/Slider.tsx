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

// Custom Previous Button
const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
        onClick={onClick}
        className="absolute left-0 md:left-[-15px] min-w-[50px] w-[50px] flex  items-center justify-center h-[50px] top-1/2 transform -translate-y-1/2 z-10 bg-white hover:text-[#232323] text-[rgba(113,142,191,1)] p-2 rounded-full shadow-[4px_4px_18px_-2px_rgba(231,228,232,0.8)] hover:bg-white focus:outline-none"
    >
        <svg className='rotate-180' width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7.5 7.5L1 14" stroke="#718EBF" stroke-width="2" />
        </svg>

    </button>
);

// Custom Next Button
const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
        onClick={onClick}
        className="absolute right-0 md:right-[-15px] min-w-[50px] w-[50px] flex  items-center justify-center h-[50px] top-1/2 transform -translate-y-1/2 z-10 bg-white hover:text-[#232323] text-[rgba(113,142,191,1)] p-2 rounded-full shadow-[4px_4px_18px_-2px_rgba(231,228,232,0.8)] hover:bg-white focus:outline-none"
    >
        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7.5 7.5L1 14" stroke="#718EBF" stroke-width="2" />
        </svg>

    </button>
);

const UserSlider: React.FC<UserSliderProps> = ({ users }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
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
        <div className="w-full mx-auto">
            <Slider {...settings}>
                {users.map((user) => (
                    <div key={user.id} className="!flex justify-center md:justify-start flex-col items-center p-4">
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
