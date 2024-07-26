import React, {useState} from 'react';
import {validateEmail, validatePassword} from "@/app/utils/func";

const StepLogin = ({step}) => {
    const [passwordType,setPasswordType] = React.useState('password');
    const [isValidEmail,setIsValidEmail] = React.useState(true);
    const [isValidPassword,setIsValidPassword] = React.useState(true);
    const [form,setForm] = useState({
        email: '',
        password: ''
    })

    const changeHandler = (e)=>{
        setForm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        const isEmailValid = !!validateEmail(form.email)
        setIsValidEmail(isEmailValid)

        const isPasswordValid = validatePassword(form.password)
        setIsValidPassword(isPasswordValid)

        if (isEmailValid && isPasswordValid){
            console.log('SUBMIT')
        }
    }

    return (
        <div
            className={`${step === 6 ? 'active' : ''} section step1 h-screen flex-col items-center md:h-auto flex mx-auto w-full`}>
            <div className="flex-col flex items-center justify-center h-screen md:h-auto mx-auto w-full">
                <div className="flex flex-col justify-center items-center lg:px-5 px-0">
                    <div className="flex relative rounded-[10px] mx-5 lg:mx-0">
                        <div
                            className="flex flex-col relative rounded-tr-[10px] rounded-br-[10px] rounded-tl-[10px] rounded-bl-[10px] lg:rounded-tl-0 lg:rounded-bl-0 w-[335px] lg:w-[407px]">
                            <div className="flex-1 mx-6 lg:mx-10 mt-6 lg:mt-10">
                                <div className="relative text-center">
                                    <div
                                        className="mt-[0.5rem] mb-[1rem] rounded-full flex items-center gap-3 py-1 px-2.5 bg-[#393742]">
                                        <div className="relative flex justify-center items-center">
                                            <div className="loader"></div>
                                            <img src="/blurry_loader.png" alt="loader-image"
                                                 className="w-[100px] border-2 border-gray-500 rounded-full z-10"/>
                                        </div>

                                        <div
                                            className="p-2.5 text-white md:text-[1.125rem] md:leading-[1.75rem] text-[0.875rem] leading-[1.25rem] font-semibold">
                                            The creation of your Ai Girlfriend is complete.
                                        </div>
                                    </div>

                                    <h2 className="text-2xl text-white leading-7 lg:leading-8 font-bold mb-4 lg:mb-6 text-center">Sign
                                        up to see it</h2>

                                    <button
                                        className="inline-flex items-center justify-center w-full rounded-[10px] px-4 py-2.5 mb-2.5 bg-white">
                                        <img src="/google-auth.png" alt="google" className="h-6 w-6 mr-3"/>
                                        <span className="text-[#344054]">Google</span>
                                    </button>

                                    <div className="flex flex-row items-center justify-between pb-5">
                                        <div className="flex-1 h-[1px]"
                                             style={{background: 'linear-gradient(270deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)'}}></div>
                                        <div className="flex-0 text-white text-sm font-medium mx-4">OR</div>
                                        <div className="flex-1 h-[1px]"
                                             style={{background: 'linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%)'}}></div>
                                    </div>

                                    <div className="form-container">
                                        <form onSubmit={(e)=>handleSubmit(e)}>
                                            <div
                                                className="form-group w-full flex-col justify-start items-start gap-1.5 inline-flex mb-6">
                                                <div
                                                    className="self-stretch flex-col justify-start items-start gap-1.5 flex relative">
                                                    <div className="w-5 h-5 absolute top-[13px] left-[10px]">
                                                        <img src="/filled-email.svg" alt="email"/>
                                                    </div>
                                                    <div className="input email required user_email w-full">
                                                        <input type="email"
                                                               placeholder="E-mail"
                                                               value={form.email}
                                                               name="email"
                                                               onChange={(e)=>changeHandler(e)}
                                                               className="string email required w-full pl-10 pr-6 py-3 rounded-[10px] border border-[#393742] bg-[#24232B] text-sm font-medium text-white placeholder-[#676767] focus:outline-none active:outline-none focus:border-[#1c64f2] active:border-[#1c64f2]"/>
                                                        {!isValidEmail &&
                                                            <span className="text-grey flex text-[13px] mt-1">Your email or password is invalid.</span>}
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="form-group w-full flex-col justify-start items-start gap-1.5 inline-flex">
                                                <div
                                                    className="self-stretch flex-col justify-start items-start gap-1.5 flex relative">
                                                    <div className="w-5 h-5 absolute top-[13px] left-[10px]">
                                                        <img src="/password.svg" alt="password"/>
                                                    </div>
                                                    <div className="w-5 h-5 absolute top-[13px] right-[10px]">
                                                        <img src="/eye.svg" alt="eye" className="cursor-pointer"
                                                             onClick={() => passwordType === 'password' ? setPasswordType('text') : setPasswordType('password')}/>
                                                    </div>

                                                    <div className="input email required user_email w-full">
                                                        <input type={passwordType}
                                                               placeholder="Password"
                                                               value={form.password}
                                                               name="password"
                                                               onChange={(e)=>changeHandler(e)}
                                                               className="string required w-full pl-10 pr-9 py-3 rounded-[10px] border border-[#393742] bg-[#24232B] text-sm font-medium text-white placeholder-[#676767] focus:outline-none active:outline-none focus:border-[#1c64f2] active:border-[#1c64f2]"/>
                                                        {
                                                            !isValidPassword &&
                                                            <span className="text-grey flex text-[13px] mt-1">Your password is too short (min 6 chars) or too weak</span>
                                                        }
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="w-full mt-[1.357rem]">
                                                <button type="submit"
                                                        className="btn w-full py-2.5 bg-[#E75275] rounded-xl justify-center items-center border-none text-xl text-white font-black cursor-pointer">
                                                    Sign up
                                                </button>
                                            </div>

                                            <div
                                                className="text-center text-[#807E8B] text-xs font-sans mt-5 lg:mt-5 mb-8 lg:mb-5">
                                                By signing up, you agree to
                                                <a href="https://candy.ai/legal-information"
                                                   className="underline ml-[3px]"
                                                   target="_blank">Terms of Service</a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepLogin;
