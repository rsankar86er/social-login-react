import React, { useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { IResolveParams, LoginSocialLinkedin } from 'reactjs-social-login';
import { LinkedInLoginButton } from 'react-social-login-buttons';


function App() {
  const [provider, setProvider] = useState('');
  const [profile, setProfile] = useState<any>();

  const onLoginStart = useCallback(() => {
    alert('login start');
  }, []);
  
  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider('');
    alert('logout success');
  }, []);

  const onLogout = useCallback(() => {}, []);
  const REDIRECT_URI ='https://plenty-planets-beam-42-118-51-2.loca.lt/account/login';
  return (
    <div className='container'>
     <LoginSocialLinkedin
          client_id={process.env.REACT_APP_LINKEDIN_APP_ID || ''}
          client_secret={process.env.REACT_APP_LINKEDIN_APP_SECRET || ''}
          redirect_uri={REDIRECT_URI}
          onLoginStart={onLoginStart}
          onResolve={({ provider, data }: IResolveParams) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={(err: any) => {
            console.log(err);
          }}
        >
          <LinkedInLoginButton />
        </LoginSocialLinkedin>
    </div>
  );
}

export default App;
