import axios from 'axios';
import https from 'https';

export default async function handler(req, res) {
    const { method, query } = req;
    const { endpoint } = query;

    try {
        const response = await axios({
            url: `${process.env.BaseApiUrl}/${endpoint}`,
            method,
            headers: {
                ...req.headers,
                'Host': 'staging-kup-test-12304421-75948bd29ae6.herokuapp.com',
            },
            data: req.body,
            httpsAgent: new https.Agent({
                rejectUnauthorized: false,
            }),
        });

        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
    }
}