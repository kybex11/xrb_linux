import '../../../assets/overflow.scss';
import React, { useState, useRef } from 'react';
import Cookies from 'js-cookie';
import Menu from '../views/menu';
import { SaveCredentials } from '../../../../wailsjs/go/main/App';

interface FormData {
  nickname: string;
  passwd: string;
}

interface ResponseData {
  success: boolean;
  message: string;
}

export default function Login() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const usernameInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  const [displayUsername, setDisplayUsername] = useState('');
  const [saveUsername, setSaveUsername] = useState('');
  const [savePassword, setSavePassword] = useState('');

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    const username = usernameInput.current?.value;
    const password = passwordInput.current?.value;

    if (!username || !password) return;

    const formData: FormData = {
      nickname: username,
      passwd: password
    };

    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response: Response) => response.json())
      .then((data: ResponseData) => {
        if (data.success) {
          setIsAuthenticated(true);
          setDisplayUsername(formData.nickname);
          setSavePassword(formData.passwd);
          setSaveUsername(formData.nickname);
        } else {
          console.error(data.message);
          const status = document.getElementById('status');
          if (status){
            status.innerHTML = data.message;
          }
        }
      })
      .catch((error: any) => console.error(error));
  };

  const ItsMe = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    SaveCredentials(saveUsername, savePassword);
    console.log(`saved: ${saveUsername} ${savePassword}`);
    setTimeout(() => {
      window.location.reload();
    }, 500);
    
  }

  return (
    <>
      {isAuthenticated ? (
        <>
          <br />
          <h1>{displayUsername}</h1>
          <button className='button' onClick={ItsMe}>Its you?</button>
        </>
      ) : (
          <>
          <br />
          <h1>Login</h1>
          <br />
          <input ref={usernameInput} type="text" placeholder='Username'/>
          <br /><br />
          <input ref={passwordInput} type="password" placeholder='Password'/>
          <br /><br />
          <button className='button' onClick={handleSubmit}>Log-In</button>
          <p id='status'></p>
          <br /><br />
          <button className='have_button'>You don't have account?</button>
          </>
      )}
    </>
  );
}