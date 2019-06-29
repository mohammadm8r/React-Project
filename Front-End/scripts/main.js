import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import '../bootstrap.min.css';
import '../bootstrap-rtl.css';
import '../app.css';
import '../fonts/Shabnam.ttf';

class Header extends Component {
  render () {
    return (
      <div>
        <ul>
            <li className="element" id="signin"><a href="./signin.html">ورود</a></li>
            <li className="element" id="signup"><a href="./signup.html">عضویت</a></li>
            <li className="element" id="help"><a href="#">راهنما</a></li>
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
        <div><img className="pizza" src="pizza.jpg" alt="pizza"/></div>
        <div><img id="reyhoon" src="reyhoon.jpg" alt="reyhoon"/></div>
        <div><p className="text">سفارش آنلاین غذا از بهترین رستوران‌ها و فست‌فود‌ها</p></div>
        <div><p className="under-text">برای دیدن لیست رستوران‌ها و فست‌فود‌هایی که به شما سرویس می‌دهند، منطقه خود را وارد
            کنید.</p></div>
        <div className="dropdown">
            <div>
                <span id="mantaghe">منطقه خود را وارد کنید</span>
            </div>
            <div className="city-dropdown">
                <span><img src="dropdown.png" alt="dropdown-icon" id="dropdown"/></span>
                <span id="city-text">تهران</span>
            </div>
            <div className="location-dropdown">
                <span><img src="location.png" alt="location-icon" id="location"/></span>
                <span id="location-text">مثلا نیاوران</span>
                <span><a href="#"><img src="search.JPG" alt="search-icon" id="search-icon"/></a></span>
            </div>
        </div>
        <div className="last-search-box">
            <div><img src="lastSearch.png" alt="lastSearch" id="last-search-icon"/></div>
            <div id="last-search">آخرین جستجو: تهران ، شیخ هادی ، چهارراه ولیعصر</div>
            <div><img src="line.JPG" alt="line" id="line-icon"/></div>
        </div>
      </div>
    )
  }
};

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
};

ReactDOM.render(<Header /> , document.getElementById('app'));
