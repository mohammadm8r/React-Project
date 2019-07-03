import React , { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <div>
        <ul className = "pagination">
            <li className="page-item element" id="signin"><a href="./signin.html">ورود</a></li>
            <li className="page-item element" id="signup"><a href="./signup.html">عضویت</a></li>
            <li className="page-item element" id="help"><a href="./help.html">راهنما</a></li>
        </ul>
        <div className="line"></div>
      </div>
    )
  }
};

export default Header
