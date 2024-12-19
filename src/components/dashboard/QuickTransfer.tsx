import React, { useState } from 'react';
import Slider from '../slider/Slider';
import UserCard from './UserCard';

interface FrequentTransfer {
    id: number;
    userId: number;
    name: string;
    role: string;
    profilePicture: string;
}


interface QuickTransferProps {
    frequentTransfers: FrequentTransfer[];
}


const QuickTransfer: React.FC<QuickTransferProps> = ({ frequentTransfers }) => {
    console.log("<<<frequentTransfers", frequentTransfers)
    const [amount, setAmount] = useState('');

    const handleSend = () => {
        console.log(`Sending ${amount} to ${frequentTransfers[0].name}`); // Update as needed
        setAmount('');
    };

    return (
        <div className="App flex flex-col items-center">
            <h2 className="text-xl font-bold mb-4">Quick Transfer</h2>
            <Slider
                items={frequentTransfers}
                renderItem={(item) => (
                    <UserCard
                        name={item.name}
                        role={item.role}
                        profilePicture={item.profilePicture}
                    />
                )}
                itemsToShow={2}
            />
            <div className="mt-4">
                <input
                    type="text"
                    placeholder="Write Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="border rounded p-2"
                />
                <button
                    onClick={handleSend}
                    className="ml-2 bg-blue-500 text-white rounded p-2"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default QuickTransfer;