import React from 'react';

const NextButton = ({setStep, step, disabled}) => {
    return (
        <div className="md:relative absolute w-full pb-4 mx-10 bottom-0 mt-5 px-5 md:px-0 flex gap-x-2">
            {
                step > 1 && step < 4 ? <button onClick={() => setStep(step - 1)}
                    className="bg-[#393742] hover:bg-[#444] cursor-pointer h-[64px] min-w-[64px] flex justify-center items-center rounded-full p-2">
                    <img src="/back_arrow.svg" alt="back arrow"/>
                </button> : ''
            }
            <button
                onClick={() => setStep(step + 1)}
                type='button'
                disabled={disabled}
                className={`${disabled ? 'cursor-not-allowed opacity-30' : 'cursor-pointer'} h-[68px] w-full py-3.5 bg-gradient-to-r from-rose-500 to-rose-400 rounded-full justify-center items-center inline-flex border-b-4 border-[#953747] hover:border-b-[12px] active:shadow-none active:scale-95 active:border-b-4 transition duration-300 ease-in-out next-button custom-button`}>
                <span
                    className="flex items-center justify-center text-white text-[1.875rem] leading-[2.25rem] font-bold">Next</span>
            </button>
        </div>
    );
};

export default NextButton;
