import React , { Component } from 'react'
import RestaurantPart from './RestaurantPart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCheckSquare } from '@fortawesome/free-solid-svg-icons'


class Restaurant extends Component {
  constructor(props) {
   super(props);

   this.state = {
     data: null,
   };
 }
  render () {
    return (
      <div>
        <div>
          <img src={require('./mocks/restaurant-search-banner.jpg')} className="restaurant" alt="search-header"/>
        </div>
        <div className="number">
          <h1>
            <span id="_a123">۱۱۴  رستوران امکان سرویس دهی به</span>
            <span id="_b456"> تهران حافظ رشت </span>
            <span id="_c789">را دارند </span>
          </h1>
        </div>
        <div>
          <div className="bg-white text-center pb-5">
            <span><FontAwesomeIcon icon={faSearch}/></span>
            <span><input type="text" placeholder="جستجوی رستوران در این محدوده"/></span>
          </div>
        </div>
        <div className="row text-right restaurant-parts">
          <div className="col-md-3 mt-1">
            <div className="row">
              <div className="col-md-5">
              </div>
              <div className="col-md-6 bg-ligth rounded shadow filters text-center">
                <div className="row filter">
                  <p className="pr-2 pt-2 pb-0">فیلتر بر اساس نوع غذا</p>
                </div>
                <div className="row text-center">
                  <input className = "foodSearch rounded m-2" type="text" placeholder="جستجوی دسته‌بندی غذاها"/>
                </div>
              </div>
              <div className="col-md-1">
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row">
              {[1,2,3].map(item=>(
                <RestaurantPart
                  name="دان تان"
                  logo="https://dist.reyhoon-static.com/uploads/images/restaurants/logos/downtown_6473_1549979103.jpeg@!branch_logo_web_default"
                  averageRate ={4.5}
                  categories = "فست فود . برگر . قهوه . شیک"
                  address = "تهران، جردن"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="row text-right restaurant-parts">
          <div className="col-md-3">

          </div>
          <div className="col-md-9 closed">
            <h1 className="name-font">رستوران‌های بسته</h1>
            <div className="row">
              {[1,2,3].map(item=>(
                <RestaurantPart
                  name="دان تان"
                  logo="https://dist.reyhoon-static.com/uploads/images/restaurants/logos/downtown_6473_1549979103.jpeg@!branch_logo_web_default"
                  averageRate ={4.5}
                  categories = "فست فود . برگر . قهوه . شیک"
                  address = "تهران، جردن"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Restaurant
