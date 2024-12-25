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
    <div className="flex border-b mb-4 overflow-auto whitespace-pre">
        {tabs.map((tab) => (
            <button
                key={tab}
                onClick={() => onTabChange(tab)}
                className={`px-4 py-2 text-base ${activeTab === tab
                    ? 'relative before:absolute before:left-0 before:bottom-0 before:content-[" "] before:w-full before:h-[3px] before:rounded-tl-[10px] before:rounded-tr-[10px] before:bg-[#232323] text-[#232323]'
                    : 'text-[#718EBF]'
                    }`}
            >
                {tab}
            </button>
        ))}
    </div>
);

export default TabNavigation;
