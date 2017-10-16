import React from 'react';
import { Field, reduxForm} from 'redux-form';
import './index.css';

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'EMAIL IS REQUIRED';
  } else if (!/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(values.email)) {
    errors.email = 'INVALID EMAIL ADDRESS';
  }
  if(!values.password){
    errors.password = "PASSWORD IS REQUIRED";
  }else if (values.password.length < 6) {
    errors.password = "MUST HAVE AT LEAST 6 CHARACTERS";
  }
  if(values.password !== values.confirmPassword){
    errors.confirmPassword = "MUST BE SAME AS THE PASSWORD";
  }
  return errors
}


const renderField = ({
  input,
  label,
  type,
  placeholder,
  className,
  fields,
  meta: { touched, error, warning }
}) => (
    <div>
    {(touched) &&
      ((error && <span className="validation-error">{error}</span>))}
      <input {...input} placeholder={placeholder} type={type} className={className}/>
    </div>
)
let LoginCredentialsForm = props => {
  const { handleSubmit} = props;
  return (
    <form onSubmit={handleSubmit}>
        <div className="field-group">
          <Field
            name="email"
            type="email"
            placeholder="EMAIL"
            component={renderField}
          />
        </div>
        <div className="field-group">
          <Field
            name="password"
            type="password"
            placeholder="PASSWORD"
            component={renderField}
          />
        </div>
        <div className="field-group">
          <Field
            name="confirmPassword"
            type="password"
            placeholder="CONFIRM PASSWORD"
            component={renderField}
          />
        </div>
        <div className="footer">
          <button type="submit" className="button-forward text-primary">Next <i className="fa fa-arrow-right"></i></button>
        </div>
    </form>
  )
}

LoginCredentialsForm = reduxForm({
  form: 'signup',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(LoginCredentialsForm);


export default LoginCredentialsForm;
