import React from "react";
import './Form.css';
import Link from 'next/link';

export const Register = () == {
    returns
}

var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <form name="fo" id="loginForm" method="post" action="/public/pages/dashboard.js">
            <h1>Welcome to JUBA</h1>
            <div className="input">
              <input type="text" id="login" name="login" placeholder="your email" required /><br /><br />
            </div>
            <div className="input">
              <input type="password" id="pass" name="password" placeholder="shhh" required />
              <img src="assets/assets/img/iconemdp.png" alt="yeux" id="eye" onClick="changer();" /> <br />
              <p> <Link href="#">Forgot password? </Link></p>
              <br />
            </div>
            <div className="input-submit">
              <input type="submit" id="play_button" defaultValue="Play" />
            </div>
          </form>
          <div className="new-user">
            <p> New user ? <br /> <Link href="register.html">Create an account </Link></p>
          </div>
        </div>
      );
    }
  });