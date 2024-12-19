import React, { useState } from 'react';

interface SliderProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
    itemsToShow: number; // Number of items to show at once
}

const Slider = <T,>({ items, renderItem, itemsToShow }: SliderProps<T>) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextItem = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + itemsToShow < items.length ? prevIndex + itemsToShow : 0
        );
    };

    const prevItem = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - itemsToShow >= 0 ? prevIndex - itemsToShow : items.length - itemsToShow
        );
    };

    return (
        <div className="flex flex-col items-center">
            <div className="flex items-center space-x-4">
                <button onClick={prevItem} className="p-2 bg-gray-300 rounded">
                    &lt;
                </button>
                <div className="flex space-x-4 overflow-hidden">
                    {items.slice(currentIndex, currentIndex + itemsToShow).map((item, index) => (
                        <div key={index} className="flex-shrink-0">
                            {renderItem(item)}
                        </div>
                    ))}
                </div>
                <button onClick={nextItem} className="p-2 bg-gray-300 rounded">
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Slider;

