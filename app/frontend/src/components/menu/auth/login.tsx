import '../../../assets/overflow.scss';
import React from 'react';

interface FormData {
  nickname: string;
  passwd: string;
}

interface ResponseData {
  success: boolean;
  message: string;
}

export default function Login() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault(); // prevent default form submission

    const usernameInput = document.querySelector('input[type="username"]') as HTMLInputElement;
    const passwordInput = document.querySelector('input[type="password"]') as HTMLInputElement;

    const username = usernameInput.value;
    const password = passwordInput.value;

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
        } else {
          console.error(data.message);
        }
      })
      .catch((error: any) => console.error(error));
  };

  return (
    <>
      {isAuthenticated ? (
        <div className="menu">
          <h1>Menu</h1>
          {/* Add menu items here */}
        </div>
      ) : (
        <div className="container-form">
          <br />
          <h1>Login</h1>
          <br />
          <input type="username" placeholder='Username'/>
          <br /><br />
          <input type="password" placeholder='Password'/>
          <br /><br />
          <button className='button' onClick={handleSubmit}>Log-In</button>
          <br /><br />
          <button className='have_button'>You don't have account?</button>
        </div>
      )}
    </>
  );
}