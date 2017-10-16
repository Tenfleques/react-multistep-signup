import React from 'react';
import { Field, reduxForm} from 'redux-form';
import './index.css';

const calculateAge = (dateOfBirth) => {
    const date = new Date();
    const calculateYear = date.getFullYear();
    const calculateMonth = date.getMonth();
    const calculateDay = date.getDate();

    const birthYear = dateOfBirth.getFullYear();
    const birthMonth = dateOfBirth.getMonth();
    const birthDay = dateOfBirth.getDate();

    let age = calculateYear - birthYear;
    const ageMonth = calculateMonth - birthMonth;
    const ageDay = calculateDay - birthDay;

    if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)){
        age -= 1;
    }
    return age;
}
const isValidDate = dateString=>{
    const day = dateString.dd
    const month = dateString.mnth;
    const year = dateString.yyyy
    const minYear = new Date().getFullYear() - 120;

    let monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
    if(year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0))
        monthLength[1] = 29;

    if(day<=0 || month <= 0 || year <=0)
      return "AMBIGOUS VALUES, PLEASE CORRECT";
    if(day > monthLength[month - 1])
      return "CORRECT AMBIGOUS DAY OF MONTH";

    if(month === 0 || month > 12)
      return "CORRECT AMBIGOUS MONTH";

    if(year < minYear)
      return "YOU ARE THE OLDEST PERSON LIVING, CONTACT THE RECORDS IMMEDIATELY!";

    const birthdate = new Date(year,month-1,day);
    if(calculateAge(birthdate) < 18)
      return "YOU ARE TOO YOUNG, ONLY 18+ ALLOWED";
    return;
}
const validate = values => {
  const errors = {}
  if (!values.gender) {
    errors.gender = 'REQUIRED TO CHOOSE GENDER FROM THE GIVEN CATEGORIES';
  }
  if(!values.dd || !values.mnth || !values.yyyy)
    errors.date_of_birth ="DATE OF BIRTH REQUIRED";
  else
    errors.date_of_birth = isValidDate({"dd": values.dd, "mnth": values.mnth, "yyyy": values.yyyy});

  return errors
}
//the list of "where did you hear about us"
const userReferences = [
  {value:"internet", caption:"Internet"},
  {value:"friend", caption:"Friend"}
];

//radio group for choosing gender
class GenderRadioGroup extends React.Component {
    render() {
        const {input, meta, options } = this.props
        const hasError = meta.touched && meta.error;
        return (
              <div>
              {hasError && <span className="validation-error">{meta.error}</span>}
              <div className="gender-radio-grp">
              {options.map(o =>
                <div key={o.value} className="gender-radio">
                  <input id={o.id} type="radio" {...input} value={o.value} checked={o.value === input.value} />
                  <label htmlFor={o.id}>{o.title}</label>
                </div>
            )}
              </div>
            </div>
        );
    }
}
const renderDOB = ({
  input,
  type,
  meta: { touched, error, warning }
}) => (
    <div>
    {(touched) &&
      ((error && <span className="validation-error">{error}</span>))}
      <div className="dob">
        <Field name="dd" placeholder="DD" min="1" max="31" component="input" type="number" />
        <Field name="mnth" placeholder="MM" min="1" max="12" component="input" type="number" />
        <Field name="yyyy" placeholder="YYYY" min={new Date().getFullYear()-100} component="input" type="number" />
      </div>
    </div>
)

let AboutUser = props => {
  const { handleSubmit,previousPage} = props;
  return (
    <form onSubmit={handleSubmit}>
        <div className="field-group">
          <label>DATE OF BIRTH</label>
          <Field component={renderDOB} name="date_of_birth"/>
        </div>
        <div className="field-group">
          <label>GENDER</label>
            <Field component={GenderRadioGroup} name="gender" required={true} options={[
              { title: 'MALE', value: 'male', id: 'radio-male'},
              { title: 'FEMALE', value: 'female', id: 'radio-female' },
              { title: 'UNSPECIFIED', value: 'unspecified', id: 'radio-unspecified' }
            ]} />
        </div>
        <div className="field-group">
          <label>WHERE DID YOU HEAR ABOUT US?</label>
            <div className="select-container">
              <Field name="how_hear_about_us" component="select">
                <option value={null}></option>
                {userReferences.map((val)=>
                  <option key={val.value} value={val.value}>{val.caption}</option>
                )}
              </Field>
            </div>
        </div>
        <div className="footer">
            <button type="button" className="button-back" onClick={previousPage}>back</button>
            <button type="submit" className="button-forward text-primary">Next <i className="fa fa-arrow-right"></i></button>
        </div>
    </form>
  )
}

AboutUser = reduxForm({
  form: 'signup',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(AboutUser);
export default AboutUser;
