// import loginBg from '../../assets/images/auth-aws-bg.png';
// import logo from '../../assets/images/auth-logo-h-light.png';

export const Container = {
  // backgroundImage: `url(${loginBg})`,
  backgroundColor: '#eceff3',
  // fontFamily: `"Amazon Ember", "Helvetica Neue", sans-serif`,
  fontWeight: '400',
  height: '100vh',
  overflow: 'auto',
};

export const FormContainer = {
  textAlign: 'center',
  marginTop: '20px',
  margin: '0 auto 50px',
};

export const FormSection = {
  marginTop: '5%',
  // backgroundImage: `url(${logo})`,
  backgroundColor: '#fafafa',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left 33px top 15px ',
  backgroundSize: '265px 70px',
  color: '#152939',
  position: 'relative',
  marginBottom: '20px',
  padding: '35px 40px',
  textAlign: 'left',
  display: 'inline-block',
  minWidth: '480px',
  borderRadius: '6px',
  boxShadow: '1px 1px 4px 0 rgba(0,0,0,0.5)',
};

export const FormField = {
  marginBottom: '22px',
};

export const SectionHeader = {
  marginTop: '60px',
  color: '#152939',
  marginBottom: '30px',
  fontSize: '18px',
  fontWeight: '500',
};

export const SectionBody = {
  marginBottom: '30px',
};

export const SectionFooter = {
  fontSize: '14px',
  color: '#152939',
  display: 'flex',
  flexDirection: 'row-reverse',
  alignItems: 'flex-start',
};

export const SectionFooterPrimaryContent = {
  marginLeft: 'auto',
};

export const SectionFooterSecondaryContent = {
  marginRight: 'auto',
  alignSelf: 'center',
  color: '#152939',
};

export const Input = {
  display: 'block',
  width: '100%',
  padding: '16px',
  fontSize: '14px',
  // fontFamily: `"Amazon Ember", Arial`,
  color: '#152939',
  backgroundColor: '#fff',
  backgroundImage: 'none',
  border: '1px solid #C4C4C4',
  borderRadius: '3px',
  boxSizing: 'border-box',
  marginBottom: '10px',
  outline: 'none',
  radio: {
    verticalAlign: 'middle',
  },
};

export const Button = {
  minWidth: '153px',
  display: 'inline-block',
  marginBottom: '0',
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: '1.42857143',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  touchAction: 'manipulation',
  cursor: 'pointer',
  userSelect: 'none',
  backgroundImage: 'none',
  color: '#fff',
  backgroundColor: '#8b1021',
  borderColor: '#fff',
  textTransform: 'uppercase',
  padding: '14px 0',
  letterSpacing: '1.1px',
  border: 'none',
  borderRadius: '4px',
};

export const SignInButton = {
  position: 'relative',
  width: '100%',
  borderRadius: '4px',
  marginBottom: '10px',
  cursor: 'pointer',
  padding: 0,
  // fontFamily: 'Amazon Ember',
  color: '#fff',
  fontSize: '14px',
  '#google_signin_btn': {
    backgroundColor: '#4285F4',
    fontFamily: 'Roboto',
    border: '1px solid #4285F4',
  },
  '#facebook_signin_btn': {
    backgroundColor: '#4267B2',
    borderColor: '#4267B2',
  },
  '#amazon_signin_btn': {
    backgroundColor: '#FF9900',
    border: 'none',
  },
};

export const SignInButtonIcon = {
  position: 'absolute',
  left: 0,
  '#google_signin_btn_icon': {
    backgroundColor: '#fff',
    borderRadius: '4px 0 0 4px',
    height: '30px',
    width: '30px',
    padding: '11px',
  },
  '#facebook_signin_btn_icon': {
    height: '33px',
    width: '18px',
    padding: '10px 14px',
  },
  '#amazon_signin_btn_icon': {
    padding: '10px',
    height: '32px',
    width: '32px',
  },
};

export const SignInButtonContent = {
  display: 'block',
  padding: '18px 0',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  textAlign: 'center',
};

export const Strike = {
  width: '100%',
  textAlign: 'center',
  borderBottom: '1px solid #bbb',
  lineHeight: '0.1em',
  margin: '32px 0',
  color: '#152939',
};

export const StrikeContent = {
  background: '#fff',
  padding: '0 25px',
  fontSize: '14px',
  fontWeight: '500',
};

export const ActionRow = {
  marginBottom: '15px',
};

export const FormRow = {
  marginBottom: '12px',
};

export const A = {
  color: '#8b1021',
  cursor: 'pointer',
};

export const Hint = {
  color: '#ececec',
  fontSize: '12px',
};

export const Radio = {
  marginRight: '18px',
  verticalAlign: 'middle',
};

export const InputLabel = {
  color: '#152939',
  fontSize: '14px',
  marginBottom: '8px',
};

export const Toast = {
  color: '#fff',
  backgroundColor: '#8b1021',
};

const AWSTheme = {
  container: Container,
  formContainer: FormContainer,
  formSection: FormSection,
  formField: FormField,

  sectionHeader: SectionHeader,
  sectionBody: SectionBody,
  sectionFooter: SectionFooter,
  sectionFooterPrimaryContent: SectionFooterPrimaryContent,
  sectionFooterSecondaryContent: SectionFooterSecondaryContent,

  input: Input,
  button: Button,
  signInButton: SignInButton,
  signInButtonIcon: SignInButtonIcon,
  signInButtonContent: SignInButtonContent,
  formRow: FormRow,
  strike: Strike,
  strikeContent: StrikeContent,
  actionRow: ActionRow,
  a: A,

  hint: Hint,
  radio: Radio,
  inputLabel: InputLabel,

  toast: Toast,
};

export default AWSTheme;
