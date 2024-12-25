import React, { ReactNode } from 'react';

interface PageLayoutProps {
    title: string;
    children?: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ title, children }) => {
    return (
        <div className="w-full h-screen flex flex-col">
            <div className="h-16 bg-gray-200 flex items-center px-4 shadow">
                {title}
            </div>
            <div className="flex-1 p-4">
                {children}
            </div>
        </div>
    );
};

export default PageLayout;
