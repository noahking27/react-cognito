import React from 'react';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { Auth } from 'aws-amplify';

const App = () => {
  const history = useHistory();

  const logout = () => {
    Auth.signOut({ global: true })
      .then(data => {
        history.push('/');
        return data;
      })
      .catch(err => err);
  };

  return (
    <>
      <h1>Welcome</h1>
      <Button onClick={logout}>Logout</Button>
    </>
  );
};

export default App;
