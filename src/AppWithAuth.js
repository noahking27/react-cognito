import React, { useState, useEffect } from 'react';
import { Auth, I18n } from 'aws-amplify';
import {
  Authenticator,
  SignIn as SignInAWS,
  ConfirmSignIn,
  ConfirmSignUp,
  RequireNewPassword,
  ForgotPassword,
  TOTPSetup as TOTPSetupAWS,
} from 'aws-amplify-react';

import App from './App';
import { SignIn } from './pages/auth/SignIn';
import TOTPSetup from './pages/auth/TOTPSetup';
import '@aws-amplify/ui/dist/style.css';
import AWSTheme from './constants/aws-theme';

const dict = {
  en: {
    Username: 'Email',
    'Enter your username': 'Enter your email',
    AWSCognito: 'Company Name Here',
  },
};
I18n.setLanguage('en');
I18n.putVocabularies(dict);

const AppWithAuth = () => {
  const [authState, setAuthState] = useState(null);
  const [user, setUser] = useState();
  const [userEmail, setUserEmail] = useState();
  const [showAccountSetup, setShowAccountSetup] = useState(false);

  useEffect(() => {
    if (authState === 'verifyContact') {
      setAuthState('signedIn');
      return;
    }

    if (authState === 'signedIn') {
      Auth.currentAuthenticatedUser().then(currentAuthenticated => {
        Auth.currentSession().then(currentSession => {
          const { sub, identities } = currentAuthenticated.attributes;
          const { jwtToken } = currentSession.idToken;
        });
      });
    }
  }, [authState]);

  const errorMessagesMap = message => {
    if (/incorrect.*username.*password/i.test(message)) {
      return 'Incorrect username or password';
    }

    if (/user.*does.*not.*exist/i.test(message)) {
      return 'Unable to authenticate';
    }

    if (/preauthentication.*failed/i.test(message)) {
      return 'Unable to authenticate';
    }

    return message;
  };

  return (
    <Authenticator
      className="authenticator"
      errorMessage={errorMessagesMap}
      hide={[SignInAWS, TOTPSetupAWS]}
      theme={AWSTheme}
      onStateChange={authState => setAuthState(authState)}
      hideDefault
    >
      <SignIn setUser={setUser} setUserEmail={setUserEmail} showAccountSetup={showAccountSetup} />
      <ConfirmSignIn />
      <RequireNewPassword />
      <ConfirmSignUp />
      <ForgotPassword />
      {authState === 'TOTPSetup' ? (
        <TOTPSetup
          setAuthState={setAuthState}
          user={user}
          userEmail={userEmail}
          onTOTPEvent={() => {
            Auth.signOut();
            setShowAccountSetup(true);
          }}
        />
      ) : (
        <></>
      )}
      {authState === 'signedIn' ? <App /> : <></>}
    </Authenticator>
  );
};

export default AppWithAuth;
