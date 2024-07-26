import React from 'react';
import {useGoogleLogin} from '@react-oauth/google';

const GoogleLoginButton = ({onLoginSuccess}) => {
    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            // console.log(tokenResponse, 'tokenResponse')
            onLoginSuccess();
        },
        onError: (error) => {
            console.error('Login failed:', error);
        },
    });

    return (
        <button onClick={() => login()}
                type="button"
                className="inline-flex items-center justify-center w-full rounded-[10px] px-4 py-2.5 mb-2.5 bg-white">
            <img src="/google-auth.png" alt="google" className="h-6 w-6 mr-3"/>
            <span className="text-[#344054]">Google</span>
        </button>
    )
};

export default GoogleLoginButton;