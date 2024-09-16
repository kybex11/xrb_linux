import React from 'react';
import Cookies from 'js-cookie';
import NoAccount from './menu/noaccount';
import Menu from './menu/menu';

interface CheckAccountProps {}

const CheckAccount: React.FC<CheckAccountProps> = () => {
  const acc = Cookies.get("ltss1acc");
  if (typeof acc === 'string' && acc !== '') {
    console.log(true);
    return <Menu />;
  } else {
    console.log(false);
    return <NoAccount />;
  }
};

export default CheckAccount;