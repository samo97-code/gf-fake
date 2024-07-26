import React from 'react';

const StepLoading = () => {
    return (
        <div className="loader-partial">
            <div className="flex flex-wrap loader-background desktop">
                <div className="flex justify-around photo-col column-1">
                    <img src="/frame_1.png" alt="fram" className="background-frame"/>
                </div>
                <div className="flex justify-around photo-col column-2">
                    <img src="/frame_1.png" alt="fram" className="background-frame"/>
                </div>
                <div className="flex justify-around photo-col column-1">
                    <img src="/frame_1.png" alt="fram" className="background-frame"/>
                </div>
                <div className="flex justify-around photo-col column-2">
                    <img src="/frame_1.png" alt="fram" className="background-frame"/>
                </div>
                <div className="flex justify-around photo-col column-1">
                    <img src="/frame_1.png" alt="fram" className="background-frame"/>
                </div>
                <div className="flex justify-around photo-col column-2">
                    <img src="/frame_1.png" alt="fram" className="background-frame"/>
                </div>
            </div>

            <div className={`loader-content h-screen flex flex-col items-center justify-center`}>
                <img src="/small-logo.png" alt="Candy Logo" className="w-[288px] mb-3"/>
                <h4 className="text-center text-white text-[20px]">
                    Creation in Progress
                </h4>
                <p className="text-center text-zinc-500 text-[16px] mb-4">
                    Your Girlfriend will be ready soon
                </p>
                <div className="w-72 h-7 pl-2.5 pr-72 py-2.5 flex-col">
                    <div
                        className="w-72 h-2 bg-gradient-to-r from-red-600 via-orange-400 to-rose-400 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default StepLoading;
