import { useRef } from 'react';

interface FormData {
  nickname: string;
  email: string;
  passwd: string;
}

export default function Register() {
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const retryPasswordInputRef = useRef<HTMLInputElement>(null);

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
      .then((data: any) => console.log(data))
      .catch((error: any) => console.error(error));
  };

  return (
    <>
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
        <br /><br />
        <button className='have_button'>You have account?</button>
        <br />
      </div>
    </>
  );
}