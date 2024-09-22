import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import NoAccount from './menu/noaccount';
import Menu from './menu/views/menu';
import { LoadUsername, LoadPasswd } from '../../wailsjs/go/main/App';

interface CheckAccountProps {}

interface FormData {
  nickname: string;
  passwd: string;
}

interface ResponseData {
  success: boolean;
  message: string;
}

const CheckAccount: React.FC<CheckAccountProps> = () => {
  const [formData, setFormData] = useState<FormData>({ nickname: '', passwd: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const username = await LoadUsername();
      const passwd = await LoadPasswd();
      setFormData({ nickname: username, passwd: passwd });
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (formData.nickname && formData.passwd) {
        try {
          const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
          const data: ResponseData = await response.json();
          if (data.success) {
            setIsLoggedIn(true);
          } else {
            setIsLoggedIn(false);
          }
        } catch (error) {
          console.error(error);
          setIsLoggedIn(false);
        }
      }
    };
    fetchData();
  }, [formData]);

  return isLoggedIn ? <Menu /> : <NoAccount />;
};

export default CheckAccount;