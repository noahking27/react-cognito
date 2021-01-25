import Amplify, { Auth } from 'aws-amplify';

import config from './config';

Amplify.configure({
  Auth: {
    // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
    identityPoolId: config.AWS_IDENTITY_POOL_ID,
    // REQUIRED - Amazon Cognito Region
    region: config.AWS_REGION,
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: config.AWS_USER_POOL_ID,
    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: config.AWS_USER_POOL_WEB_CLIENT_ID,
    // OPTIONAL - Hosted UI configuration
    oauth: {
      domain: config.AWS_OAUTH_DOMAIN,
      scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
      redirectSignIn: config.APP_URL,
      redirectSignOut: config.APP_URL,
      responseType: 'code', // or 'token', note that REFRESH token will only be generated when the responseType is code
    },
  },
});
export const awsConfig = Auth.configure();
