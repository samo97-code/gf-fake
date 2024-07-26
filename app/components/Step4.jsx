import React from 'react';
import ProgressImage from "@/app/components/ProgressImage";
import NextButton from "@/app/components/ui/NextButton";
import {skills} from "@/app/utils";

const Step4 = ({step, setStep}) => {
    const [age, setAge] = React.useState(24);
    const [skillsData, setSkills] = React.useState({
        sucking: 0,
        spanking: 0,
        anal: 0,
        feet: 0,
    });

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleChangeSkills = (event) => {
        setSkills(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    }

    return (
        <div
            className={`${step === 4 ? 'active' : ''} section step1 h-screen flex-col items-center md:h-auto flex mx-auto w-full`}>
            <div>
                <img src="/small-logo.png" alt="Candy Logo" className="mx-auto mt-4 mb-2 w-1/3"/>
                <ProgressImage step={step}/>
            </div>

            <div
                className="flex justify-center items-center flex-col text-center px-5 md:px-0 w-full sm:w-[500px] mt-5">
                <div className="flex flex-col items-center md:mb-10 mb-10 w-full lg:mb-8 2xl:mb-10">
                    <p className="text-center text-zinc-500 text-[20px] mb-5">Choose Age</p>
                    <div
                        className="w-[58px] inline-block text-white bg-zinc-800 px-5 py-1.5 rounded-full mb-5">{Math.round(age)}</div>

                    <div className="flex items-center justify-between w-full sm:px-0">
                        <span
                            className="hidden md:block text-zinc-500 tracking-tight whitespace-nowrap">Teen(18+)</span>
                        <input type="range"
                               className="w-full h-3.5 md:mx-4 rounded-full appearance-none bg-transparent slider-input-age-create-ai-landing"
                               min="18" max="30" id="slider-input-age-create-ai-landing" step="0.01" value={age}
                               onChange={(e) => handleChange(e)}
                               style={{background: `linear-gradient(to right, rgb(230, 80, 115) 0%, rgb(252, 118, 138) ${((age - 18) / (30 - 18)) * 100}%, rgb(57, 55, 66) ${((age - 18) / (30 - 18)) * 100}%, rgb(57, 55, 66) 100%)`}}/>
                        <span
                            className="hidden md:block text-zinc-500 tracking-tight whitespace-nowrap">Milf (30+)</span>
                    </div>
                </div>

                <div className="w-full">
                    <p className="text-center text-zinc-500 text-[20px] mb-8 lg:mb-6 2xl:mb-8">Choose Skills</p>
                    {
                        skills.map((skill) => {
                            return <div key={skill.id} className="flex flex-col items-center mb-10 lg:mb-8 2xl:mb-10">
                                <div className="flex items-center justify-between gap-5 w-full">
                                    <div className="flex-none w-[89px] text-left">
                                    <span
                                        className="text-white text-[1.25rem] leading-[1.75rem] font-medium w-full whitespace-nowrap">{skill.title}</span>
                                    </div>
                                    <div className="flex grow justify-between items-center gap-5">
                                        <input type="range"
                                               className="w-full md:w-[331px] h-3.5 rounded-full appearance-none bg-transparent slider-input-age-create-ai-landing"
                                               min="0" max="100" id={`slider-input-${skill.title}`} step="1"
                                               value={skillsData[skill.name]}
                                               name={skill.name}
                                               onChange={(e) => handleChangeSkills(e)}
                                               style={{background: `linear-gradient(to right, rgb(230, 80, 115) 0%, rgb(252, 118, 138) ${skillsData[skill.name]}%, rgb(57, 55, 66) ${skillsData[skill.name]}%, rgb(57, 55, 66) 100%)`}}/>
                                        <span
                                            className="flex-none text-white font-medium tracking-tight">{skillsData[skill.name]}%</span>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>

                <NextButton step={step} setStep={setStep}/>
            </div>
        </div>
    );
};

export default Step4;
