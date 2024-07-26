"use client";
import {useState, useEffect} from "react";
import Intro from "@/app/components/Intro";
import Step1 from "@/app/components/Step1";
import Step2 from "@/app/components/Step2";
import Step3 from "@/app/components/Step3";
import Step4 from "@/app/components/Step4";
import StepLoading from "@/app/components/StepLoading";
import StepLogin from "@/app/components/StepLogin";

export default function Home() {
    const [step, setStep] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const scrollToSection = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setIsTransitioning(false);
        }, 600);
    };


    useEffect(() => {
        if (step && step <= 4) return scrollToSection(step)

        if (step === 5) {
            setTimeout(() => {
                setStep(6)
            }, 5000)
        }
    }, [step])

    return (
        <main>
            <div className="content bg-mainBg">
                {
                    step <= 4 || step === 6 ? <div className="w-full flex flex-col md:flex-row h-screen form-partial">

                        <div
                            className={`${step === 0 ? 'absolute h-screen md:relative' : 'overflow-hidden hidden md:block'} flex-1 justify-center items-center mx-auto my-auto`}>
                            <img src="/banner-image.png" alt="banner"
                                 className="w-full h-full md:h-auto max-h-screen object-cover"/>
                        </div>
                        <div
                            className="md:flex-1 w-full justify-center items-center mx-auto my-auto bg-[#19181c] overflow-hidden container max-h-screen">
                            <Intro isTransitioning={isTransitioning} step={step} setStep={setStep}/>
                            <Step1 isTransitioning={isTransitioning} step={step} setStep={setStep}/>
                            <Step2 isTransitioning={isTransitioning} step={step} setStep={setStep}/>
                            <Step3 isTransitioning={isTransitioning} step={step} setStep={setStep}/>
                            <Step4 step={step} setStep={setStep}/>
                            <StepLogin step={step}/>
                        </div>
                    </div> : ''
                }

                {step === 5 && <StepLoading/>}
            </div>
        </main>
    );
}
