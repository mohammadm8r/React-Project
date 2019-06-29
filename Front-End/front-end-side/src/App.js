import React , { Component } from 'react';
// import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import './bootstrap-rtl.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

class Main extends Component {
  render () {
    return (
      <div className="main">
        {/* <div><img className="pizza" src="./mocks/pizza.jpg" alt="pizza"/></div>
        <div><img id="reyhoon" src="reyhoon.jpg" alt="reyhoon"/></div> */}
        <div><p className="text text-center">سفارش آنلاین غذا از بهترین رستوران‌ها و فست‌فود‌ها</p></div>
        <div><p className="under-text text-center">برای دیدن لیست رستوران‌ها و فست‌فود‌هایی که به شما سرویس می‌دهند، منطقه خود را وارد
            کنید.</p></div>
        <div className="dropdown text-center">
            <legend>
              منطقه خود را وارد کنید
            {/* <span id="mantaghe">منطقه خود را وارد کنید</span> */}
            </legend>
            <div className="city-dropdown">
                {/* <span><img src="dropdown.png" alt="dropdown-icon" id="dropdown"/></span> */}
                <span id="city-text">تهران</span>
            </div>
            <div className="location-dropdown">
                {/* <span><img src="location.png" alt="location-icon" id="location"/></span> */}
                <span id="location-text">مثلا نیاوران</span>
                {/* <span><a href="#"><img src="search.JPG" alt="search-icon" id="search-icon"/></a></span> */}
            </div>
        </div>
        <div className="last-search-box text-center">
            {/* <div><img src="lastSearch.png" alt="lastSearch" id="last-search-icon"/></div> */}
            <div id="last-search">آخرین جستجو: تهران ، شیخ هادی ، چهارراه ولیعصر</div>
            {/* <div><img src="line.JPG" alt="line" id="line-icon"/></div> */}
        </div>
      </div>
    )
  }
};

class App extends Component {
  render() {
    return (
      <div id="base">
        <Header />
        <Main />
      </div>
    )
  }
};


export default App;
