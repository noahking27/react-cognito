/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { I18n } from '@aws-amplify/core';
import Auth from '@aws-amplify/auth';
import { totpQrcode } from '@aws-amplify/ui';
import { Input, Button, Label } from 'reactstrap';
import QRCode from 'qrcode.react';

const TOTPSetup = ({ user, userEmail, onTOTPEvent }) => {
  const [code, setCode] = useState();
  const [setupMessage, setSetupMessage] = useState(null);
  const [userTotpCode, setUserTotpCode] = useState();

  const setup = async () => {
    const issuer = encodeURI(I18n.get('AWSCognito'));

    Auth.setupTOTP(user)
      .then(data => {
        const code = `otpauth://totp/${issuer}:${userEmail}?secret=${data}&issuer=${issuer}`;
        setCode(code);
      })
      .catch(err => console.log('totp setup failed', err));
  };

  useEffect(() => {
    setup();
  }, []);

  const handleInputChange = evt => {
    setUserTotpCode(evt.target.value);
  };

  const verifyTotpToken = async () => {
    if (!userTotpCode) {
      return;
    }

    Auth.verifyTotpToken(user, userTotpCode)
      .then(() => {
        Auth.setPreferredMFA(user, 'TOTP')
          .then(() => {
            setSetupMessage('Setup TOTP successfully!');
            onTOTPEvent();
          })
          .catch(err => {
            setSetupMessage('Setup TOTP failed!');
            console.log(err);
          });
      })
      .catch(err => {
        setSetupMessage('Setup TOTP failed!');
        console.log(err);
      });
  };

  const showSecretCode = code => {
    if (!code) {
      return null;
    }

    return (
      <div>
        <div className={totpQrcode} style={{ marginBottom: 30 }}>
          <QRCode value={code} />
        </div>
        <Label
          for="totpCode"
          style={{
            color: 'rgb(21, 41, 57)',
            fontSize: '14px',
            marginBottom: '8px',
          }}
        >
          {I18n.get('Enter Security Code:')}
        </Label>
        <Input
          style={{
            display: 'block',
            width: '100%',
            padding: '16px',
            fontSize: '14px',
            color: 'rgb(21, 41, 57)',
            backgroundColor: 'rgb(255, 255, 255)',
            backgroundImage: 'none',
            border: '1px solid rgb(196, 196, 196)',
            borderRadius: '3px',
            boxSizing: 'border-box',
            marginBottom: '10px',
            outline: 'none',
          }}
          bsSize="lg"
          key="totpCode"
          name="totpCode"
          onChange={handleInputChange}
        />
      </div>
    );
  };

  return (
    <div
      style={{
        textAlign: 'center',
        margin: '0px auto 50px',
      }}
    >
      <div
        style={{
          display: 'inline-block',
          padding: '35px 40px',
          marginTop: '5%',
          backgroundImage: 'url(/static/media/auth-logo-h-light.5d204f8e.png)',
          backgroundColor: 'rgb(250, 250, 250)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left 33px top 15px',
          backgroundSize: '265px 70px',
          color: 'rgb(21, 41, 57)',
          position: 'relative',
          marginBottom: '20px',
          textAlign: 'left',
          minWidth: '480px',
          borderRadius: '6px',
          boxShadow: 'rgba(0, 0, 0, 0.5) 1px 1px 4px 0px',
        }}
      >
        <div>
          <div
            style={{
              marginTop: '60px',
              color: 'rgb(21, 41, 57)',
              marginBottom: '30px',
              fontSize: '18px',
              fontWeight: 500,
            }}
          >
            {setupMessage === 'Setup TOTP failed!' && <h3 className="text-danger">{I18n.get(setupMessage)}</h3>}
            {I18n.get('Scan then enter verification code')}
          </div>
          <div>{showSecretCode(code)}</div>

          <div>
            <Button
              color="danger"
              onClick={verifyTotpToken}
              size="lg"
              style={{
                width: '100%',
                minWidth: '153px',
                display: 'inline-block',
                marginBottom: '0px',
                fontSize: '12px',
                fontWeight: '400',
                lineHeight: '1.42857',
                textAlign: 'center',
                whiteSpace: 'nowrap',
                verticalAlign: 'middle',
                touchAction: 'manipulation',
                cursor: 'pointer',
                userSelect: 'none',
                backgroundImage: 'none',
                color: 'rgb(255, 255, 255)',
                backgroundColor: 'rgb(139, 16, 33)',
                border: 'none',
                textTransform: 'uppercase',
                padding: '14px 0px',
                letterSpacing: '1.1px',
                borderRadius: '4px',
              }}
            >
              {I18n.get('Verify Security Token')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TOTPSetup;
