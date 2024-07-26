/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GoogleClientId: process.env.Google_ClientI_Id,
        BaseApiUrl: process.env.Base_Api_Url,
    },
};

export default nextConfig;
