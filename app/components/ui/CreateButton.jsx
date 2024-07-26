import React from 'react';

const CreateButton = ({setStep}) => {
    return (
        <div className="h-[76px]">
            <button
                onClick={() => setStep(1)}
                type='button'
                    className="create-button absolute cursor-pointer w-full py-3.5 bg-gradient-to-r from-rose-500 to-rose-400 rounded-full justify-center items-center inline-flex border-b-4 border-[#953747] hover:border-b-[12px] active:shadow-none active:scale-95 active:border-b-4 transition duration-300 ease-in-out next-button custom-button">
                <span
                    className="flex items-center justify-center text-white text-[1.875rem] leading-[2.25rem] font-bold">CREATE NOW</span>
            </button>
        </div>
    );
};

export default CreateButton;
