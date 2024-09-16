// RedirectToAuth.tsx
import React from 'react';
import Register from "./auth/register";
import Login from "./auth/login";

interface RenderAuthComponentProps {
  authType: 'reg' | 'log';
}

const RenderAuthComponent: React.FC<{ authType: 'reg' | 'log' }> = ({ authType }) => {
  if (authType === 'reg') {
    return <Register />;
  } else if (authType === 'log') {
    return <Login />;
  } else {
    console.error("Error: invalid authType");
    return <div>Error: invalid authType</div>;
  }
};

export default RenderAuthComponent;