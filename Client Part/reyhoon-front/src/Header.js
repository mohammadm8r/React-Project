import React from 'react'

function Header() {
  return (
    <div className="headers">
        <ul className="pagination">
            <li className="page-item" id="signin"><a href="./signin">ورود</a></li>
            <li className="page-itme" id="signup"><a href="./signup">عضویت</a></li>
            <li className="page-item" id="help"><a href="#">راهنما</a></li>
            {/* <li className="page-item" id="logo"><img src={require('./mocks/reyhoon.jpg')} className="float-left" alt="reyhoonIcon" /></li> */}
        </ul>
        <div className="line"></div>
    </div>
  );
}

export default Header;
