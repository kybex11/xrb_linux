import { useRef, useState } from 'react';
import { SaveCredentials } from '../../../../wailsjs/go/main/App';

interface FormData {
  nickname: string;
  email: string;
  passwd: string;
}

interface ResponseData {
  success: boolean;
  message: string;
}

export default function Register() {
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const retryPasswordInputRef = useRef<HTMLInputElement>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [saveUsername, setSaveUsername] = useState('');
  const [savePassword, setSavePassword] = useState('');

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
  
    const username = usernameInputRef.current?.value;
    const email = emailInputRef.current?.value;
    const password = passwordInputRef.current?.value;
    const retryPassword = retryPasswordInputRef.current?.value;
  
    if (!username || !email || !password || !retryPassword) {
      alert('Please fill in all fields!');
      return;
    }
  
    if (password !== retryPassword) {
      alert('Passwords do not match!');
      return;
    }
  
    const formData: FormData = {
      nickname: username,
      email: email,
      passwd: password
    };
    fetch('http://localhost:3000/register', {
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

  const Redir = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    SaveCredentials(saveUsername, savePassword);
    console.log(`registered: ${saveUsername} ${savePassword}`);
    setTimeout(() => {
      window.location.reload();
    }, 500);
    
  }

  return (
    <>
    {isAuthenticated ? (
        <>
          <br />
          <h1>User registered.</h1>
          <button className='button' onClick={Redir}>Goto menu!</button>
        </>
      ) : (
      <div className="container-form">
        <br />
        <h1>Register</h1>
        <br />
        <input type="text" ref={usernameInputRef} name="username" placeholder="Username" />
        <br /><br />
        <input type="email" ref={emailInputRef} name="email" placeholder="Email" />
        <br /><br />
        <input type="password" ref={passwordInputRef} name="password" placeholder="Password" />
        <br /><br />
        <input type="password" ref={retryPasswordInputRef} name="retryPassword" placeholder="Retry Password" />
        <br /><br />
        <button className='button' onClick={handleSubmit}>Reg-In</button>
        <p id='status'></p>
        <br /><br />
        <button className='have_button'>You have account?</button>
        <br />
      </div>
      )}
    </>
  );
}