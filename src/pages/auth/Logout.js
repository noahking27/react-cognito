import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Auth } from 'aws-amplify';

const Logout = () => {
  const history = useHistory();

  useEffect(() => {
    Auth.signOut({ global: true })
      .then(data => {
        history.push('/');
        return data;
      })
      .catch(err => err);
  }, []);

  return <></>;
};

export default Logout;
