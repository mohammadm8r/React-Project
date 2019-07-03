import React , { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

class Main extends Component {
  render () {
    return (
      <div className="main text-center">
        <div className="text-center up"><img id="reyhoon" src={require("./mocks/reyhoon.jpg")} alt="reyhoon" className="text-center"/></div>
        <h1 className="text-center up headerup">سفارش آنلاین غذا از بهترین رستوران‌ها و فست‌فود‌ها</h1>
        <p className="text-center up headerdown">برای دیدن لیست رستوران‌ها و فست‌فود‌هایی که به شما سرویس می‌دهند، منطقه خود را وارد کنید.</p>
        <div className="up up_searchBar">
          <div className="d-flex flex-row-reverse text-right m-auto">
            <div className="bg-white inputs rounded shadow">
              <span className="citySelection flex">
                <select className="border rounded shadow city_select" name="city">
                  <option value="tehran">تهران</option>
                  <option value="shiraz">شیراز</option>
                  <option value="isfahan">اصفهان</option>
                  <option value="yazd">یزد</option>
                </select>
              </span>
              <span className="area_select flex rounded shadow">
                <input className="myinput" placeholder="مثلا نیاوران" />
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Main;
