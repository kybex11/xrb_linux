// NoAccount.tsx
import React, { useState } from 'react';
import RenderAuthComponent from './redirectToAuth';

interface NoAccountProps {}

const NoAccount: React.FC<NoAccountProps> = () => {
  const [showForm, setShowForm] = useState<'authenticate' | 'login' | 'register'>('authenticate');

  const handleButtonClick = (formType: 'login' | 'register') => {
    setShowForm(formType);
  };

  return (
    <div className="container-form">
      {showForm === 'authenticate' && (
        <>
          <br />
          <h1>Authenticate</h1>
          <button className='button' onClick={() => handleButtonClick('register')}>Register</button>
          <h1>or</h1>
          <button className='button' onClick={() => handleButtonClick('login')}>Login</button>
        </>
      )}
      {showForm === 'login' && <RenderAuthComponent authType="log" />}
      {showForm === 'register' && <RenderAuthComponent authType="reg" />}
    </div>
  );
};

export default NoAccount;