import React from 'react';
import ProgressImage from "@/app/components/ProgressImage";
import NextButton from "@/app/components/ui/NextButton";
import {ethnicities} from "@/app/utils";

const Step2 = ({step, setStep, isTransitioning}) => {
    const [active, setActive] = React.useState(null);

    return (
        <div
            className={`${step === 2 ? 'active' : ''} ${step > 2 ? 'section-back' : 'section'} ${isTransitioning && step === 3 ? 'transitioning' : ''} step1 h-screen flex-col items-center md:h-auto flex mx-auto w-full`}>
            <div>
                <img src="/small-logo.png" alt="Candy Logo" className="mx-auto mt-4 mb-2 w-1/3"/>
                <ProgressImage step={step}/>
            </div>

            <div className="flex justify-center items-center flex-col text-center px-5 md:px-0 sm:w-[483px] mt-5">
                <div className="w-full">
                    <p className="text-center text-zinc-500 text-[0.875rem] leading-[1.25rem] mb-2">Choose Ethnicity</p>

                    <div
                        className="flex flex-col gap-5 max-h-auto lg:max-h-[320px] lg:overflow-y-scroll lg:p-1 2xl:max-h-max 2xl:overflow-y-auto custom-scroll">
                        {
                            ethnicities.map((ethnicity) => {
                                return <div key={ethnicity.id}
                                            onClick={() => setActive(ethnicity.id)}
                                            className={`${!active ? 'opacity-100 border-transparent' : active && active !== ethnicity.id ? 'opacity-30 border-transparent' : 'opacity-100 is-selected bg-[#fc768a76]'} rounded-2xl relative pill cursor-pointer min-h-max sm:min-h-[85px] md:min-h-[97px] h-auto mx-h mx-auto`}>
                                    <img src={ethnicity.src} alt={ethnicity.title}
                                         className="rounded-2xl min-h-max sm:min-h-[85px] md:min-h-[97px] h-full w-full object-cover"/>
                                    <p
                                        className={`${active && active === ethnicity.id ? 'bg-blurTitle' : ''} right-1 top-2 md:top-6 px-5 py-2.5 absolute text-white bg-zinc-900 bg-opacity-50 rounded-full backdrop-blur-sm`}>
                                        {ethnicity.title}
                                    </p>
                                </div>
                            })
                        }
                    </div>
                </div>

                <NextButton disabled={!active} step={step} setStep={setStep}/>
            </div>
        </div>
    );
};

export default Step2;
