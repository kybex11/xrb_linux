import React, { useState } from 'react';
import RenderAuthComponent from './redirectToAuth';

interface NoAccountProps {}

const NoAccount: React.FC<NoAccountProps> = () => {
  const [showForm, setShowForm] = useState<'authenticate' | 'login' | 'register'>('authenticate');

  const handleButtonClick = (formType: 'login' | 'register') => {
    setShowForm(formType);
  };

  const renderForm = () => {
    switch (showForm) {
      case 'authenticate':
        return (
          <>
            <br />
            <h1>Authenticate</h1>
            <button className='button' onClick={() => handleButtonClick('register')}>Register</button>
            <h1>or</h1>
            <button className='button' onClick={() => handleButtonClick('login')}>Login</button>
          </>
        );
      case 'login':
        return <RenderAuthComponent authType="log" />;
      case 'register':
        return <RenderAuthComponent authType="reg" />;
      default:
        return null;
    }
  };

  return (
    <div className="container-form">
      {renderForm()}
    </div>
  );
};

export default NoAccount;