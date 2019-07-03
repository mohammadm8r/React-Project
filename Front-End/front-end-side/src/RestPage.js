import React , { Component } from 'react';
import RestaurantInfo from './RestaurantInfo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import FoodInfo from './FoodInfo'

let get_int = (rate) => {
  let rate_list  = []
  for(let i=0;i<parseInt(rate);i++){
    rate_list.push(0)
  }
  return rate_list
}

function RestPart(props) {
  return (
    <div>
      <div>
        <img src={require('./mocks/food_back.jpeg')} alt='foodPage' className="food_back" />
      </div>

      <div className="rest_info bg-white">
        <div className="info">
            {/* <ol className="ols">
              <li className="item_list">
                <a href="/" className="rest_link">
                  <span>ریحون</span>
                </a>
              </li>
              <li className="item_list">
                <span></span>
              </li>
              <li className="item_list">
                <span></span>
              </li>
            </ol> */
          }

          <div className='row text-center bg-white rest_page'>
            {[1].map(item=>(
              <RestaurantInfo
                name="دان تان"
                logo="https://dist.reyhoon-static.com/uploads/images/restaurants/logos/downtown_6473_1549979103.jpeg@!branch_logo_web_default"
                averageRate ={4.5}
                categories = "فست فود . برگر . قهوه . شیک"
                address = "تهران، جردن"
              />
            ))}
          </div>
        </div>

        <div className="row men_com align-items-center text-center sticky-top">
          <div className="col-md-4">
            <a href="#menu"> منوی رستوران </a>
          </div>
          <div className="col-md-4">
            <a href="#info"> اطلاعات رستوران </a>
          </div>
          <div className="col-md-4">
             <a href="#comments"> نظرات کاربران </a>
          </div>
        </div>
      </div>

      <div className="bg-white text-center">
        <span><FontAwesomeIcon icon={faSearch}/></span>
        <span><input type="text" placeholder="جسجتو در منوی این رستوران"/></span>
      </div>
      <div className="row text-right bg-white">
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-4">
            </div>
            <div className="col-md-6 bg-ligth rounded shadow filters text-center">
              <div className="row filter">
                <p className="pr-2 pt-2 pb-0">فیلتر بر اساس نوع غذا</p>
              </div>
              <div className="row text-center">
                <input className = "foodSearch rounded m-2" type="text" placeholder="جستجوی دسته‌بندی غذاها"/>
              </div>
            </div>
            <div className="col-md-2">
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="row" id="menu">
            <h1 className="titles">پیتزا</h1>
          </div>
          <div className="row">
            {[1,2,3].map(item=>(
              <FoodInfo
                name="پیتزا رومینو"
                cost="39000 تومان"
                description = 'سس مازرینارا، پپرونی، بیکن، قارچ'
              />
            ))}
          </div>
        </div>

        <div className="col-md-4">
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
        </div>
        <div className="col-md-5">
          <div className="row ete text-right" id="info">
            <h1 className="titles pt-5"> اطلاعات رستوران </h1>
          </div>
          <div className="row">
            <div className="col-md-7">
              <h1 className="titles text-right">دینارو</h1>
              <FontAwesomeIcon icon="faCheckSquare" /><p className="address text-right">گاندی جنوبی، نبش چهارم، مرکز خرید گاندی، طبقه دوم</p>
              <h1 className="titles2 text-right">ساعت سفارش گیری</h1>
              <div className="row text-right sefaresh">
                <span className="col-md-6">همه روزه</span>
                <span className="col-md-6">از ۱۲:۴۵ ظهر تا ۱۰:۴۵ شب</span>
              </div>
            </div>
            <div className="col-md-5">
              <img src={require('./mocks/map.jpg')} className="map" />
            </div>
          </div>

          <div className="row" id="comments">
            <div className="row titles comments-top">
              <span>نظرات کاربران در مورد </span>
              <span>دینارو</span>
            </div>
            <div className="row p-2 text-right">
              <p className="nazar">شما هم می‌توانید بعد از سفارش از این رستوران، نظر خود را درباره‌ی این رستوران ثبت کنید.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
            </div>
            <div className="col-md-6">
              <div className="text-center">
                <span>
                  {
                    get_int(5)
                      .map(item=>(
                        <FontAwesomeIcon className="color" icon={faStar}/>
                      )
                    )
                  }
                </span>
              </div>
              <div className="color text-center">
                4.5
              </div>
            </div>
            <div className="col-md-3">
            </div>
          </div>
          <div className="row">
            <div className="col-md-1">
            </div>

            <div className="col-md-10 text-center mt-4">
              <div className="row progresss">
                <span className="col-md-8">
                  <div className="progress prog">
                    <div className="progress-bar bg-warning progressbar" role="progressbar" aria-valuenow="75" style={{width: 70 + '%'}} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </span>
                <span className="col-md-4 titles3">
                  کیفیت غذا
                </span>
              </div>


              <div className="row progresss">
                <span className="col-md-8">
                  <div className="progress prog">
                    <div className="progress-bar bg-warning progressbar" role="progressbar" style={{width: 30 + '%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </span>
                <span className="col-md-4 titles3">
                   کیفیت بسته‌بندی
                </span>
              </div>


              <div className="row progresss">
                <span className="col-md-8">
                  <div className="progress prog">
                    <div className="progress-bar bg-warning progressbar" style={{width: 90 + '%'}} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </span>
                <span className="col-md-4 titles3">
                  سرعت ارسال پیک
                </span>
              </div>


              <div className="row progresss">
                <span className="col-md-8">
                  <div className="progress prog">
                    <div className="progress-bar bg-warning progressbar" style={{width: 50 + '%'}} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </span>
                <span className="col-md-4 titles3">
                  برخورد پیک
                </span>
              </div>

            </div>

            <div className="col-md-1">
            </div>

            <div className="row">
              <div className="row">
                <span className="col-md-6 text-right">
                  joife
                </span>
                <span className="col-md-6 text-left">
                  jioe
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
        </div>
      </div>

    </div>

  )

}

export default RestPart;
