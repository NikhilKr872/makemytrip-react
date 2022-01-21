import React, { Component } from "react";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state={
        error:false,
        errorData:''
    }
    this.email = React.createRef();
    this.pass = React.createRef();
  }

  checkSuccessfulLogin=()=>{
   const boolCheck= this.props.onLoginBtnClick({
        email: this.email.current.value,
        pass: this.pass.current.value,
      });
      if(boolCheck[0]){
          
          this.props.hideLogin()
      }
      else{
        this.setState({error:true,errorData:boolCheck[1]})
      }
  }

  onChangeFunc=()=>{
      this.setState({error:false})
  }

  render() {
    return (
      <div className="formApp">
        <h3 className="text-center">Sign In</h3>
        {this.state.error && <div className="text-center" style={{color:"red"}}>{this.state.errorData}</div>}
        <div>
          <label htmlFor="useremail">Email</label>
          <input
            type="email"
            name="useremail"
            className="form-control"
            ref={this.email}
          />
        </div>
        <div>
          <label htmlFor="userpass">Password</label>
          <input
            type="password"
            name="userpass"
            className="form-control"
            ref={this.pass}
          />
        </div>
        <div className="text-center">
          <span>
            Don't have an account?{" "}
            <span
              className="pointer"
              style={{ color: "blue", textDecoration: "none" }}
              onClick={this.props.onClick}
            >
              Sign Up
            </span>
          </span>
        </div>
        <div className="text-center">
          <button
            className="btn btn-primary"
            onClick={this.checkSuccessfulLogin}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}
