import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import addacc from "./js/action/index";
var passwordHash = require("password-hash");
function mapDispatchToProps(dispatch) {
  return {
    addacc: value => dispatch(addacc(value))
  };
}
const mapStateToProps = state => {
    return { pass: state.pass };
  };

class loginPass extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit() {
    event.preventDefault();
    const { value } = this.state;
    var hashed = passwordHash.generate(value);
    this.props.addacc(hashed);
    this.setState({ value: "" });
    console.log(this.props.pass)
  }
  render() {
    const { value } = this.state;
   
    return (
      <div>
        <input
          type="text"
          className="textInput"
          id="value"
          value={value}
          onChange={this.handleChange}
        />
        <div className="btn" onClick={this.handleSubmit}>
          +
        </div>
      </div>
    );
  }
}

const login = connect(
  mapStateToProps,
  mapDispatchToProps
)(loginPass);

export default login;

// import React, { Component } from 'react';
// import {connect} from 'react-redux';

// class App extends Component {

//     render() {
//         return ( <div>
//             <input type='text' className='textInput' id='value' onChange={this.handleChange}/>
//         </div> );
//     }
// }

// export default App;
