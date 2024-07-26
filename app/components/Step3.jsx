import React from 'react';
import ProgressImage from "@/app/components/ProgressImage";
import NextButton from "@/app/components/ui/NextButton";
import {bodyTypes, breastSizes, buttSizes} from "@/app/utils";

const Step3 = ({step, setStep, isTransitioning}) => {
    const [bodyType, setBodyType] = React.useState(null);
    const [breastSize, setBreastSize] = React.useState(null);
    const [buttSize, setButtSize] = React.useState(null);

    return (
        <div
            className={`${step === 3 ? 'active' : ''} ${step > 3 ? 'section-back' : 'section'} ${isTransitioning && step === 4 ? 'transitioning' : ''} step1 h-screen flex-col items-center md:h-auto flex mx-auto w-full`}>
            <div>
                <img src="/small-logo.png" alt="Candy Logo" className="mx-auto mt-4 mb-2 w-1/3"/>
                <ProgressImage step={step}/>
            </div>

            <div className="flex justify-center items-center flex-col text-center px-5 md:px-0 sm:w-[483px] mt-5">
                <div className="w-full">
                    <p className="text-center text-zinc-500 text-[0.875rem] leading-[1.25rem] mb-2">Choose Body Type</p>
                    <div className="grid grid-cols-3 gap-3 mb-3">
                        {
                            bodyTypes.map((item) => {
                                return <div key={item.id}
                                            className={`${!bodyType ? 'opacity-100 border-transparent' : bodyType && bodyType !== item.id ? 'opacity-30 border-transparent' : 'opacity-100 is-selected'} rounded-2xl relative pill cursor-pointer h-full mx-auto`}
                                            onClick={() => setBodyType(item.id)}>
                                    <img src={item.src} alt={item.title}
                                         className="block rounded-2xl h-auto"/>
                                    <p className={`${bodyType && bodyType === item.id ? 'bg-blurTitle' : 'bg-zinc-900'} bottom-1 left-1/2 transform -translate-x-1/2 px-2 py-0.5 absolute text-[0.75rem] leading-[1rem] text-white bg-opacity-50 rounded-full backdrop-blur-sm`}>{item.title}</p>
                                </div>
                            })
                        }
                    </div>
                </div>

                <div className="w-full">
                    <p className="text-center text-zinc-500 text-[0.875rem] leading-[1.25rem] mb-2">Choose Breast
                        Size</p>
                    <div className="grid grid-cols-3 gap-3 mb-3">
                        {
                            breastSizes.map((item) => {
                                return <div key={item.id}
                                            className={`${!breastSize ? 'opacity-100 border-transparent' : breastSize && breastSize !== item.id ? 'opacity-30 border-transparent' : 'opacity-100 is-selected'} rounded-2xl relative pill cursor-pointer h-full mx-auto`}
                                            onClick={() => setBreastSize(item.id)}>
                                    <img src={item.src} alt={item.title}
                                         className="block rounded-2xl h-auto"/>
                                    <p className={`${breastSize && breastSize === item.id ? 'bg-blurTitle' : 'bg-zinc-900'} bottom-1 left-1/2 transform -translate-x-1/2 px-2 py-0.5 absolute text-[0.75rem] leading-[1rem] text-white bg-opacity-50 rounded-full backdrop-blur-sm`}>{item.title}</p>
                                </div>
                            })
                        }
                    </div>
                </div>

                <div className="w-full">
                    <p className="text-center text-zinc-500 text-[0.875rem] leading-[1.25rem] mb-2">Choose Butt Type</p>
                    <div className="grid grid-cols-3 gap-3 mb-3">
                        {
                            buttSizes.map((item) => {
                                return <div key={item.id}
                                            className={`${!buttSize ? 'opacity-100 border-transparent' : buttSize && buttSize !== item.id ? 'opacity-30 border-transparent' : 'opacity-100 is-selected'} rounded-2xl relative pill cursor-pointer h-full mx-auto`}
                                            onClick={() => setButtSize(item.id)}>
                                    <img src={item.src} alt={item.title}
                                         className="block rounded-2xl h-auto"/>
                                    <p className={`${buttSize && buttSize === item.id ? 'bg-blurTitle' : 'bg-zinc-900'} bottom-1 left-1/2 transform -translate-x-1/2 px-2 py-0.5 absolute text-[0.75rem] leading-[1rem] text-white bg-opacity-50 rounded-full backdrop-blur-sm`}>{item.title}</p>
                                </div>
                            })
                        }
                    </div>
                </div>

                <NextButton disabled={!(bodyType && breastSize && buttSize)} step={step} setStep={setStep}/>
            </div>
        </div>
    );
};

export default Step3;
