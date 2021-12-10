import dotenv from 'dotenv';

dotenv.config({ path: '../../.env.local' });

const envVars = {
  clientId: import.meta.env.VITE_PUBLIC_CLIENT_ID,
  redirectUrl: import.meta.env.VITE_PUBLIC_REDIRECT_URL
};

export default envVars;
