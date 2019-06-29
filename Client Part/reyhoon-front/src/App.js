//import React , { Component } from 'react'
//import ReactDOM from 'react-dom';
import logo from './logo.svg'
import Header from './Header.js'
import Footer from './Footer.js'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './bootstrap-rtl.css'

var React = require('react');
var ReactDOM = require('react-dom');

var App = React.creatClass({
  render : function render() {
    return (
      <h1>Hello world</h1>
    );
  }
}
)

// ReactDOM.render(<App />, document.getElementById(App))

// function App() {
//     return (
//       <React.Fragment>
//       <div className="App">
//         <Header/>
//       </div>
//       <div className="main">
//         {/* <div><img class="pizza" src={require('./mocks/pizza.jpg')} alt="pizza"/></div> */}
//         <div><img className="img-fluid mx-auto d-block" id="reyhoon" src={require('./mocks/reyhoon.jpg')} alt="reyhoon"/></div>
//         <div><p className="text text-center">سفارش آنلاین غذا از بهترین رستوران‌ها و فست‌فود‌ها</p></div>
//         <div><p className="under-text text-center">برای دیدن لیست رستوران‌ها و فست‌فود‌هایی که به شما سرویس می‌دهند، منطقه خود را وارد
//             کنید.</p></div>
//
//         <div class="btn-group">
//           <div className = "dropdown text-center">
//             <button className="btn dropdown-toggle dropdown-box" type="button" data-toggle="dropdown">
//               تهران
//             </button>
//             <div className="dropdown-menu">
//               <a className="dropdown-item" href="#">Action</a>
//               <a className="dropdown-item" href="#">Another action</a>
//               <a className="dropdown-item" href="#">Something else here</a>
//             </div>
//           </div>
//
//           <div class="input">
//             <input type="text" className="form-control text-center" />
//           </div>
//         </div>
//         <div className="last-search-box">
//             {/* <div><img src={require("./mocks/lastSearch.png")} alt="lastSearch" id="last-search-icon"/></div> */}
//             <div className="text-center" id="last-search">آخرین جستجو: تهران ، شیخ هادی ، چهارراه ولیعصر</div>
//             {/* <div><img src={require("./mocks/line.JPG")} alt="line" id="line-icon"/></div> */}
//         </div>
//       </div>
//       <Footer/>
//     </React.Fragment>
//     );
// }



export default App;
