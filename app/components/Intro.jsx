import React from 'react';
import CreateButton from "@/app/components/ui/CreateButton";

const Intro = ({step, setStep, isTransitioning}) => {
    return (
        <div
            className={`${step === 0 ? 'active' : ''} ${isTransitioning && step === 1 ? 'transitioning' : ''} flex section step0 h-screen flex-col justify-center items-center gap-10 mx-auto p-4 w-full`}>
            <img src="/logo.png" alt="Candy Logo"
                 className="w-auto mt-6 mx-auto fixed top-0 md:relative mb-10 md:mb-0 md:h-[107px] h-[72px]"/>
            <div className="w-full md:w-[60%] mb-8 px-6 absolute md:relative bottom-0">
                <div className="flex-col justify-center items-center flex mb-8">
                    <p className="text-center text-white md:text-zinc-500 mb-4 md:mb-2 font-light text-[1.125rem] md:text-[1.25rem] md:leading-[1.75rem]">
                        Welcome to Candy.ai
                    </p>
                    <p className="text-center text-white text-[32px] leading-7 md:text-[1.875rem] md:leading-[2.25rem] font-black capitalize">
                        CREATE YOUR AI GIRLFRIEND
                    </p>
                </div>
                <CreateButton setStep={setStep}/>
            </div>
        </div>
    );
};

export default Intro;
