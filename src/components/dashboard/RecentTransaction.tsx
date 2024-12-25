import React from 'react';
import { svgData } from '../../utils/svg'


interface RequestTransactionData {
    amount: number,
    date: string,
    description: string,
    icon?: string
    id: number,
    type?: string,
    userId?: number
}
interface RecentTransactionProps {
    requestTransaction: RequestTransactionData[]
}
const RecentTransaction: React.FC<RecentTransactionProps> = ({ requestTransaction }) => {


    return (
        <div className="bg-white p-[18px] md:p-6 rounded-3xl shadow-2xl h-full">
            <div className="flex flex-col gap-[10px] max-h-[190px] overflow-auto custom-scrollbar">
                {
                    requestTransaction?.length > 0 && requestTransaction?.map((transaction) => (
                        <div className='flex justify-between pr-2' key={transaction?.id}>

                            <div className="flex flex-row items-center justify-start gap-4">
                                <div className={`rounded-full border p-3 flex items-center justify-center ${svgData?.find((e) => e.name === transaction?.icon)?.color} text-yellow-600`}>
                                    {svgData?.find((e) => e.name === transaction?.icon)?.icon}
                                </div>
                                <div className="flex flex-col items-start justify-start">
                                    <p>{transaction?.description}</p>
                                    <p>{transaction?.date}</p>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <p className={`font-bold ${transaction?.amount > 0 ? 'text-green-600' : 'text-red-600'} flex items-center`}>{transaction?.amount > 0 && "+$"} {transaction?.amount}</p>
                            </div>
                        </div>

                    ))

                }



            </div>


        </div>
    );
};

export default RecentTransaction;