import React from 'react';

type TabNavigationProps = {
    tabs: string[];
    activeTab: string;
    onTabChange: (tab: string) => void;
};

const TabNavigation: React.FC<TabNavigationProps> = ({
    tabs,
    activeTab,
    onTabChange,
}) => (
    <div className="flex border-b mb-4">
        {tabs.map((tab) => (
            <button
                key={tab}
                onClick={() => onTabChange(tab)}
                className={`px-4 py-2 ${activeTab === tab
                    ? 'border-b-2 border-blue-500 text-blue-500'
                    : 'text-gray-500'
                    }`}
            >
                {tab}
            </button>
        ))}
    </div>
);

export default TabNavigation;
