import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';

const GoogleAuthProviderWrapper = ({ children }) => {
    return (
        <GoogleOAuthProvider clientId={process.env.GoogleClientId}>
            {children}
        </GoogleOAuthProvider>
    );
};

export default GoogleAuthProviderWrapper;