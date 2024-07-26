import React from 'react';
import ProgressImage from "@/app/components/ProgressImage";
import {relationshipLine1, relationshipLine2} from "@/app/utils";
import NextButton from "@/app/components/ui/NextButton";

const Step1 = ({step, setStep, isTransitioning}) => {
    const [active, setActive] = React.useState(null);

    return (
        <div
            className={`${step === 1 ? 'active' : ''} ${step > 1 ? 'section-back' : 'section'} ${isTransitioning && step === 2 ? 'transitioning' : ''} step1 h-screen flex-col items-center md:h-auto flex mx-auto w-full`}>
            <div>
                <img src="/small-logo.png" alt="Candy Logo" className="mx-auto mt-4 mb-2 w-1/3"/>
                <ProgressImage step={step}/>
            </div>

            <div className="flex justify-center items-center flex-col text-center w-[333px] sm:w-[483px]">
                <div className="w-full">
                    <p className="text-center text-zinc-500 text-[0.875rem] leading-[1.25rem] mb-4">Enter new name</p>
                    <input
                        className="mb-5 w-full h-12 px-6 py-2.5 bg-darkGrey text-white placeholder-gray-500 border-0 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="text" id="name-input" placeholder="Enter new name"/>
                </div>

                <div className="w-full">
                    <p className="text-center text-zinc-500 text-[0.875rem] leading-[1.25rem] mb-4">
                        Choose relationship
                    </p>
                    <div className="flex flex-col gap-y-4 w-full justify-between">
                        <div className="flex gap-4 w-full">
                            {
                                relationshipLine1.map((relationship) => {
                                    return <div key={relationship.id}
                                                onClick={() => setActive(relationship.id)}
                                                className={`${!active ? 'opacity-100 border-transparent' : active && active !== relationship.id ? 'opacity-30 border-transparent' : 'opacity-100 border-[#fc768a]'} border-4 group pb-2 pt-4 md:pb-10 md:pt-10 pill cursor-pointer w-1/2 flex flex-col items-center gap-4 justify-center bg-darkGrey rounded-[10px] transition-[background] ease-in-out duration-300 hover:bg-secondaryGrey`}>
                                        <img src={relationship.src} alt={relationship.title}
                                             className="lg:w-12 lg:h-12 2xl:w-24 2xl:h-24"/>
                                        <p className="text-grey flex items-center justify-center whitespace-nowrap">
                                            {relationship.title}
                                        </p>
                                    </div>
                                })
                            }
                        </div>

                        <div className="flex gap-4 w-full justify-between">
                            {
                                relationshipLine2.map((relationship) => {
                                    return <div key={relationship.id}
                                                onClick={() => setActive(relationship.id)}
                                                className={`${!active ? 'opacity-100 border-transparent' : active && active !== relationship.id ? 'opacity-30 border-transparent' : 'opacity-100 border-[#fc768a]'} border-4 group pb-2 pt-4 md:pb-10 md:pt-10 pill cursor-pointer w-1/2 flex flex-col items-center gap-4 justify-center bg-darkGrey rounded-[10px] transition-[background] ease-in-out duration-300 hover:bg-secondaryGrey`}>
                                        <img src={relationship.src} alt={relationship.title}
                                             className="lg:w-12 lg:h-12 2xl:w-24 2xl:h-24"/>
                                        <p className="text-grey flex items-center justify-center whitespace-nowrap">
                                            {relationship.title}
                                        </p>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>

                <NextButton disabled={!active} step={step} setStep={setStep}/>
            </div>
        </div>
    );
};

export default Step1;
