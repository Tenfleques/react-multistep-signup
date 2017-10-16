import React from 'react';
import PropTypes from 'prop-types';
import CheckOutForm from "./checkout/";
import AboutUserForm from "./aboutUser/";
import LoginCredentialsForm from "./loginCredentials/";
import './main.css';

class Progress extends React.Component{
  render(){
    const className = "progress bg-primary progress-"+this.props.phase
    return (
      <div>
        <div className="header text-primary">{this.props.header}</div>
        <div className="progress-container">
          <div className={className}>
          </div>
        </div>
      </div>
    );
  }
}

class SignupPage extends React.Component {
  constructor(props){
    super(props);
    this.nextPhase = this.nextPhase.bind(this);
    this.previousPhase = this.previousPhase.bind(this);
    this.state = {
      phase: 0
    };
  }
  nextPhase(){
    this.setState({phase: this.state.phase + 1});
  }
  previousPhase(){
    this.setState({phase: this.state.phase - 1});
  }
  render() {
    const {onSubmit} = this.props;
    const {phase} = this.state;
    return (
      <div className="signup-form-card">
        <Progress phase={phase} header={phase===2?"Thank you!":"Signup"}/>
      {phase===0 &&
        (<LoginCredentialsForm onSubmit={this.nextPhase}/>)}
      {phase===1 &&
        (<AboutUserForm previousPhase={this.previousPhase} onSubmit={this.nextPhase}/>)}
      {phase===2 &&
        (<CheckOutForm onSubmit={onSubmit}/>)}
      </div>
    )
  }
}

SignupPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
export default SignupPage;
