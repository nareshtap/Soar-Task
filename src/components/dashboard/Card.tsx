import React from 'react';
interface CardProps {
    balance: string;
    cardHolder: string;
    validThru: string;
    cardNumber: string;
    isWhite?: boolean
}

const Card: React.FC<CardProps> = ({ balance, cardHolder, validThru, cardNumber, isWhite }) => {
    return (
        <div className={` ${isWhite ? 'bg-white' : 'bg-[linear-gradient(107.38deg,#5B5A6F_2.61%,#000000_101.2%)]'} border border-[rgba(223,234,242,1)] ${isWhite ? 'text-black' : 'text-white'} rounded-3xl shadow-lg min-w-[282px] w-full h-full`}>
            <div className="flex flex-col gap-5 md:gap-8">

                <div className='flex  justify-between items-center pt-6 px-6'>
                    <div className="flex flex-col">
                        <span className={`text-[11px] md:text-xs ${isWhite ? 'text-[#718EBF]' : 'text-white'}`}>Balance:</span>
                        <h5 className={`text-base md:text-[20px] font-semibold leading-[24px] ${isWhite ? 'text-black' : 'text-white'}`}>${balance}</h5>
                    </div>
                    <span className='w-[35px] h-[35px] min-w-[35px]'>
                        <img className='max-w-full h-full w-full' src="https://s3-alpha-sig.figma.com/img/6f2e/6ae8/177a4ce3a2803414348e09c79e61df4f?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=krKW7d67h~iyYDmgIPjkgAOBSo-lWkGXxF5f0lNucb0966J4flucRQX7BNB2lGCknEP~Bluc-jvg6ejo9S5-kgnJTS7dOjeUdAk9DmAYjwLP3NgVK1bDSREgUecHBoHoNw2wrU4QL3Ndo~~bSQSprtybfFvV19hPtciPthRDa5iQ6-4KwXRxhOqoVWtf2vCx9wCip06xGF16YNP1ePT7AOr7PVIof25ou81s7uSN060DYAhYD8ES-KZG~RcIBlLXPgp8CST2Bvn8jmdPpp~2JZgBZpWS0NPMP-7ir~zuC5N4tsX06i47~dsO7H9yY-NsR1HdxJMEd~9HXeaCuBF-RA__" alt="" />
                    </span>
                </div>
                <div className='flex w-full md:w-[calc(100%-100px)] gap-24 px-6'>
                    <div className="flex flex-col flex-1 w1/2">
                        <span className={`text-[10px] md:text-xs ${isWhite ? 'text-black' : 'text-white'}'`}>Card Holder:</span>
                        <h5 className={`!text-[13px] md:text-[20px] font-semibold leading-[15.6px] md:leading-[24px] whitespace-nowrap ${isWhite ? 'text-black' : 'text-white'}'`}>{cardHolder}</h5>
                    </div>
                    <div className="flex flex-col flex-1 w1/2">
                        <span className={`text-[10px] md:text-xs ${isWhite ? 'text-black' : 'text-white'}'`}>Valid Thru:</span>
                        <h5 className={`!text-[13px] md:text-[20px] font-semibold leading-[15.6px] md:leading-[24px] ${isWhite ? 'text-black' : 'text-white'}'`}>{validThru}</h5>
                    </div>
                </div>
                <div className='flex justify-between items-center px-6 py-5 bg-[linear-gradient(180deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0)_100%)]'>
                    <p className='text-[15px] md:text-base'>{cardNumber}</p>
                    <svg width="44" height="30" viewBox="0 0 44 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15" cy="15" r="15" fill="white" fill-opacity="0.5" />
                        <circle cx="29" cy="15" r="15" fill="white" fill-opacity="0.5" />
                    </svg>

                </div>
            </div>
        </div>
    );
};

export default Card;