import React from 'react';
import { SignIn as SignInAWS } from 'aws-amplify-react';
import { FormGroup, Button, Input, Form } from 'reactstrap';
import classnames from 'classnames';
import { Auth } from 'aws-amplify';

import config from '../../constants/config';
import * as pkg from '../../../package.json';

export class SignIn extends SignInAWS {
  constructor(props) {
    super(props);
    this._validAuthStates = ['signIn', 'signedOut', 'signedUp'];
    this.state = {
      showPwd: false,
      email: '',
      pwd: '',
    };
  }

  handleValidSubmit = async e => {
    e.preventDefault();
    const user = await Auth.signIn(this.state.email, this.state.pwd);

    if (user.challengeName === 'SMS_MFA' || user.challengeName === 'SOFTWARE_TOKEN_MFA') {
      super.changeState('confirmSignIn', user);
    } else if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
      super.changeState('requireNewPassword', user);
    } else if (user.challengeName === 'MFA_SETUP') {
      super.changeState('TOTPSetup', user);
    }
  };

  showComponent(theme) {
    const { showPwd } = this.state;
    const { showAccountSetup } = this.props;

    return (
      <div className="authentication">
        <div className="left">
          <div className="align-items-center h-100">
            <div className="auth-brand text-center text-lg-left">
              <div className="auth-logo"></div>
            </div>

            <div className="login-form card-body">
              {showAccountSetup && (
                <h3 className="text-success text-center font-weight-bold">
                  Account successfully setup. You can now login.
                </h3>
              )}
              <h4 className="mt-0">
                Sign In <span className="text-md-right text-muted pull-right">v{pkg?.version}</span>
              </h4>

              <Form onSubmit={this.handleValidSubmit}>
                <FormGroup>
                  <Input
                    className="form-control mt-3 mb-3"
                    id="username"
                    key="username"
                    name="username"
                    label="Username"
                    placeholder="Email"
                    onChange={e => this.setState({ email: e.target.value })}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <div className="input-group input-group-merge">
                    <Input
                      key="password"
                      type={showPwd ? 'textbox' : 'password'}
                      name="password"
                      id="password"
                      placeholder="Password"
                      required
                      onChange={e => this.setState({ pwd: e.target.value })}
                    />
                    <div className={`input-group-append ${classnames({ 'show-password': showPwd })}`}>
                      <div className="input-group-text" onClick={() => this.setState({ showPwd: !showPwd })}>
                        <span className="password-eye" />
                      </div>
                    </div>
                  </div>
                </FormGroup>

                <FormGroup>
                  <Button color="link" className="pl-1 mb-1" onClick={() => super.changeState('forgotPassword')}>
                    Forgot your password?
                  </Button>
                </FormGroup>

                <FormGroup className="mt-1 text-center">
                  <Button color="danger" className="btn-block" type="submit">
                    Sign In
                  </Button>
                </FormGroup>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
