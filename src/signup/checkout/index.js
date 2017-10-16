import React from 'react';
import {reduxForm} from 'redux-form';
import './index.css';

let CheckOutForm = props => {
  const { handleSubmit} = props;
  return (
    <form onSubmit={handleSubmit} className="checkout">
        <h1>
          <i className="text-success fa fa-check-circle fa-4x"></i>
        </h1>
        <button className="border-primary form-field text-primary" type="submit">
          Go to Dashboard <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </button>
    </form>
  )
}

CheckOutForm = reduxForm({
  form: 'signup',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(CheckOutForm);


export default CheckOutForm;
