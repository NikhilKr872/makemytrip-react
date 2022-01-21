import "../App.css";
import React from "react";
import validator from "validator";
import PasswordValidator from "password-validator";
import gicon from "./images/gicon.png";
import ticon from "./images/ticon.png";
import ficon from "./images/ficon.png";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entered: null,
      name: null,
      age: null,
      email: null,
      password: "",
      confpassword: null,
      agree: false,
      checkname: false,
      checkage: false,
      checkemail: false,
      checkpass: false,
      checkagree: false,
      passErrorMsg: "",
    };
    this.onClickFunc = this.onClickFunc.bind(this);
    this.onChangeFunc = this.onChangeFunc.bind(this);
    this.name = React.createRef();
    this.age = React.createRef();
    this.email = React.createRef();
    this.pass = React.createRef();
    this.conpass = React.createRef();
    this.check = React.createRef();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.state.entered !== nextState.entered ||
      this.state.checkname !== nextState.checkname ||
      this.state.checkemail !== nextState.checkemail ||
      this.state.checkage !== nextState.checkage ||
      this.state.checkpass !== nextState.checkpass ||
      this.state.checkagree !== nextState.checkagree
    ) {
      return true;
    }

    return false;
  }

  onClickFunc = (e) => {
    e.preventDefault();

    const passerror = this.isInvalidPass(
      this.state.password,
      this.state.confpassword
    );
    const boolname =
      !this.state.name ||
      !validator.isAlpha(this.state.name, "en-US", { ignore: " -" });
    const boolemail = !this.state.email || !validator.isEmail(this.state.email);
    const boolage =
      !this.state.age || this.state.age <= 0 || this.state.age >= 150;
    const boolpass = passerror[0];
    const boolagree = !this.state.agree;
    this.setState({
      checkname: boolname,
      checkage: boolage,
      checkemail: boolemail,
      checkpass: boolpass,
      checkagree: boolagree,
      passErrorMsg: passerror[1],
      entered: false,
    });

    if (boolpass || boolname || boolemail || boolpass || boolagree) {
      return;
    } else {
      const flag = this.clear();
      if (flag) {
        this.props.saveData({
          email: this.state.email,
          pass: this.state.password,
        });
        this.props.toggleModal();
        return;
      }
    }
  };

  isInvalidPass(pass1, pass2) {
    const schema = new PasswordValidator();
    schema.is().min(6);
    schema.has().uppercase(1);
    schema.has().lowercase(1);
    schema.has().digits(1);

    if (!schema.validate(pass1)) {
      return [
        true,
        "Password length should be at least 6 and should contain at least one Uppercase, one lowerCase and a number",
      ];
    }

    if (pass1 !== pass2) {
      return [true, "Passwords do not match"];
    }

    return [false, ""];
  }

  onChangeFunc = (e) => {
    const id = e.target.id;
    this.setState((state) => ({
      checkname: false,
      checkage: false,
      checkemail: false,
      checkpass: false,
      checkagree: false,
      entered: false,
    }));
    let val;
    if (e.target.type === "checkbox") {
      val = e.target.checked;
    } else {
      val = e.target.value;
    }
    if (e.target.id === "name" || e.target.id === "email") {
      val.trim();
    }
    this.setState({ [id]: val });
  };

  clear() {
    this.setState({
      name: "",
      age: "",
      email: "",
      password: "",
      confpassword: "",
      agree: false,
      entered: true,
    });
    this.name.current.value = null;
    this.email.current.value = null;
    this.age.current.value = null;
    this.pass.current.value = null;
    this.conpass.current.value = null;
    this.check.current.checked = false;

    return true;
  }

  render() {
    return (
      <>
        <div className="Div">
          {
            <form className="formApp form">
              {this.state.entered && (
                <code className="text-center" style={{ color: "green" }}>
                  Form submitted successfully
                </code>
              )}
              <h3 className="formheading">Create your account</h3>
              <div className="group">
                <label htmlFor="name" className="formlabel">
                  Name:
                </label>
                <input
                  className="formInput form-control"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  onChange={this.onChangeFunc}
                  ref={this.name}
                />
                {this.state.checkname && (
                  <div
                    className="text-center"
                    style={{ color: "red", fontSize: "12px" }}
                  >
                    Please Enter a valid name
                  </div>
                )}
              </div>

              <div className="group">
                <label htmlFor="email" className="formlabel">
                  Email:
                </label>
                <input
                  className="formInput form-control"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  onChange={this.onChangeFunc}
                  ref={this.email}
                />
                {this.state.checkemail && (
                  <div
                    className="text-center"
                    style={{ color: "red", fontSize: "12px" }}
                  >
                    Please Enter a valid email
                  </div>
                )}
              </div>

              <div className="group">
                <label htmlFor="age" className="formlabel">
                  Age:
                </label>
                <input
                  className="formInput form-control"
                  id="age"
                  type="number"
                  placeholder="Enter your age"
                  onChange={this.onChangeFunc}
                  ref={this.age}
                />
                {this.state.checkage && (
                  <div
                    className="text-center"
                    style={{ color: "red", fontSize: "12px" }}
                  >
                    Please enter a valid age
                  </div>
                )}
              </div>

              <div className="group">
                <label htmlFor="password" className="formlabel">
                  Password:
                </label>
                <input
                  className="formInput form-control"
                  id="password"
                  type="password"
                  placeholder="Enter a password"
                  onChange={this.onChangeFunc}
                  ref={this.pass}
                />
                {this.state.checkpass && (
                  <div
                    className="text-center"
                    style={{ color: "red", fontSize: "12px" }}
                  >
                    {this.state.passErrorMsg}
                  </div>
                )}
              </div>

              <div className="group">
                <label htmlFor="confpassword" className="formlabel">
                  Confirm Password:
                </label>
                <input
                  className="formInput form-control"
                  id="confpassword"
                  type="password"
                  placeholder="Re-enter Password"
                  onChange={this.onChangeFunc}
                  ref={this.conpass}
                />
              </div>

              <div className="checkboxgroup">
                <input
                  id="agree"
                  type="checkbox"
                  onChange={this.onChangeFunc}
                  ref={this.check}
                />
                <label htmlFor="agree" className="formlabel">
                  I accept Terms of use
                </label>
              </div>
              {this.state.checkagree && (
                <div
                  className="text-center"
                  style={{ color: "red", fontSize: "12px" }}
                >
                  Please agree to our terms
                </div>
              )}
              <button className="submitbtn" onClick={this.onClickFunc}>
                Sign Up
              </button>

              <p className="joinus"> Or join us with </p>
              <div className="iconparent">
                <a href="https://accounts.google.com/signin">
                  <img
                    src={gicon}
                    alt="Google"
                    title="Google"
                    className="signinicon"
                  />
                </a>
                <a href="https://www.facebook.com">
                  <img
                    src={ficon}
                    alt="Facebook"
                    title="Facebook"
                    className="signinicon"
                  />
                </a>
                <a href="https://www.twitter.com">
                  <img
                    src={ticon}
                    alt="Twitter"
                    title="Twitter"
                    className="signinicon"
                  />
                </a>
              </div>
              <div className="AlreadyAccount">
                <p>
                  Already have an account?{" "}
                  <span
                    className="pointer"
                    style={{ color: "blue", textDecoration: "none" }}
                  >
                    Sign in
                  </span>
                </p>
              </div>
            </form>
          }
        </div>
      </>
    );
  }
}
