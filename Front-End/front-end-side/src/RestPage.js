import React , { Component } from 'react';
import RestaurantInfo from './RestaurantInfo'
import AddressInfo from './AddressInfo'
import CommentPart from './CommentPart'
import Commenter from './Commenter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import FoodInfo from './FoodInfo'
import { Affix } from 'antd'
import Category from './Category'
import RightCate from './RightCate'


let get_int = (rate) => {
  let rate_list  = []
  for(let i=0;i<parseInt(rate);i++){
    rate_list.push(0)
  }
  return rate_list
}

class RestPart extends Component {
  constructor(props){
    super(props);

    this.state = {
      restaurant: this.props.location.state.info,
      foods: this.props.location.state.info.foods,
      categories: this.props.location.state.info.categories,
      infos: [],
      searchString: '',
    }
  }

  componentDidMount(){
    fetch("http://localhost:8080/restaurant/"+this.state.restaurant.name)
     .then(
       res => res.json()
     )
     .then(
       (result)=>
        this.setState({
          infos : result
        })
     )
  }

  handleChange = (e) => {
     this.setState({ searchString:e.target.value });
   }
   // shouldComponentUpdate(nextProps, nextState) {
   //   return this.state.foods == nextState.foods;
   // }

  render(){
    console.log(this.state.categories)
    console.log(this.state.restaurant)
    var searchString = this.state.searchString.trim().toLowerCase();
    if (searchString.length > 0) {
      this.state.foods = this.state.foods.filter(function(i) {
        return i.name.toLowerCase().match( searchString );
      });
    }
    else {
      this.state.foods = this.state.restaurant.foods
    }


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
              <RestaurantInfo
                name= {this.state.restaurant.name}
                logo={this.state.restaurant.logo}
                averageRate = {this.state.restaurant.average_rate}
                categories = {this.state.restaurant.categories.map(category => (
                  category.name
                )).join(' . ')}
                address = {this.state.restaurant.address.address_line}
              />
            </div>
          </div>

          <Affix>
            <div className="row men_com align-items-center text-center">
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
          </Affix>

          </div>

        <div className="bg-white text-center">
          <span><FontAwesomeIcon icon={faSearch}/></span>
          <span><input type="text" placeholder="جسجتو در منوی این رستوران" vlaue={this.state.searchString} onChange={this.handleChange}/></span>
        </div>
        <div className="row text-right bg-white">
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-4">
              </div>
              <div className="col-md-6 text-center">
                {this.state.categories.map(item=>(
                  <RightCate
                    name={item.name}
                  />
                ))}
              </div>

              <div className="col-md-2">
              </div>
            </div>
          </div>
          <div className="col-md-4 container">
            {this.state.categories.map(item =>
            {
               return (this.state.foods.filter(i=>{
                  return i.food_set === item.name
                }).length > 0 ? (
                <div className="container">
                  <Category
                    name={item.name}
                  />
                  <div className="row">
                    {this.state.foods.map(i=>{
                      if (i.food_set === item.name)
                        return <FoodInfo
                          name={i.name}
                          cost={i.price}
                          description = {i.description}
                        />
                    })}
                  </div>
                </div>
              ):(''))})
            }
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
              <AddressInfo
                name={this.state.restaurant.name}
                address={this.state.restaurant.address.address_line}
                opening_time={this.state.restaurant.opening_time}
                closing_time={this.state.restaurant.closing_time}
              />
              <div className="col-md-5">
                <img src={require('./mocks/map.jpg')} className="map" />
              </div>
            </div>

            <div className="row" id="comments">
              <div className="row titles comments-top">
                <span>نظرات کاربران در مورد </span>
                <span>{" "}{this.state.restaurant.name}</span>
              </div>
              <div className="row p-2 text-right">
                <p className="nazar">شما هم می‌توانید بعد از سفارش از این رستوران، نظر خود را درباره‌ی این رستوران ثبت کنید.</p>
              </div>
            </div>

            <CommentPart
              averageRate = {this.state.restaurant.average_rate}
            />
            {this.state.restaurant.comments.map(item=>(
              <Commenter
                name={item.author}
                averageRate={item.quality}
                text ={item.text}
              />
            ))}
          </div>

          <div className="col-md-3">
          </div>
        </div>

      </div>

    )
  }


}

export default RestPart;
