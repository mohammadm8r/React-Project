import React , { Component } from 'react'
import RestaurantPart from './RestaurantPart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import LocalSearch from './LocalSearch'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import CheckBox from './CheckBox'


class Restaurant extends Component {
  constructor(props) {
   super(props);

   this.state = {
     restaurants:[],
     all_restaurants:[],
     area: this.props.location.state.area,
     areaCount: this.props.location.state.areaCount,
     searchString: '',
     curTime: null,
     closed_rests: [],
     checked: false
   }

 }
 componentDidMount(){
   fetch("http://localhost:8080/restaurants?area="+this.state.area)
    .then(
      res => res.json()
    )
    .then(
      (result)=>{
        console.log(result)
        this.setState({
          all_restaurants : result
        })
      }
    )

    setInterval( () => {
      this.setState({
        curTime : new Date().toLocaleString()
      })
    },1000)
 }

 //  isClose = () => {
 //   close_rests = []
 //   if (this.state.restaurants.opening_time > this.state.curTime)
 //     close_rests.push(this.state.restaurants)
 //   this.setState({ closed_rests:close_rests})
 // }

  handleChange = (e) => {
     this.setState({ searchString:e.target.value });
   }

 handleCheckboxChange = (event) =>{
     this.setState({ checked: event.target.checked });
   }



  render () {
    var searchString = this.state.searchString.trim().toLowerCase();
    var closing = this.state.all_restaurants.filter(function(i){
      if((i.closing_time < new Date().getHours()) || (i.opening_time > new Date().getHours())){
        return true
      }
      return false
    });

    var opening = this.state.all_restaurants.filter(function(i){
      if((i.closing_time > new Date().getHours()) && (i.opening_time < new Date().getHours())){
        return true
      }
      return false
    });

    if (searchString.length > 0) {
      this.state.restaurants = opening.filter(function(i) {
        return i.name.toLowerCase().match( searchString );
      });
      this.state.closed_rests = closing.filter(function(i) {
        return i.name.toLowerCase().match( searchString );
      });
    }
    else {
      this.state.restaurants = opening
      this.state.closed_rests = closing
    }


    return (
      <div>
        <div>
          <img src={require('./mocks/restaurant-search-banner.jpg')} className="restaurant" alt="search-header"/>
        </div>
        <div className="number">
          <h1>
            <span id="_a123">{this.state.areaCount}</span>
            <span id="_a123">رستوران امکان سرویس دهی به</span>
            <span id="_b456">{' '}{this.state.area}{' '}</span>
            <span id="_c789">را دارند </span>
          </h1>
        </div>
        <div>

          <div className="bg-white text-center pb-5">
            <span><FontAwesomeIcon icon={faSearch}/></span>
            <span><input type="text" vlaue={this.state.searchString} onChange={this.handleChange} placeholder="جستجوی رستوران در این محدوده"/></span>
          </div>

        </div>
        {/* <div className="container_fluid">
        </div> */}
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

                <div className="row">
                  {/*<label>
                    <Checkbox
                      checked={this.state.checked}
                      onChange={this.handleCheckboxChange}
                    />
                    <span>Label Text</span>
                  </label>
                  */}
                </div>

              </div>
              <div className="col-md-1">
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row">
              {this.state.restaurants.map(item=>(
                <div className="col-md-4 p-2">
                  <Link to={{
                      pathname: '/restaurant',
                      state: {
                        info:item
                      }
                  }} activeClassName={{textDecoration: "none"}}>
                    <RestaurantPart
                      name={item.name}
                      logo={item.logo}
                      averageRate ={item.average_rate}
                      categories = {item.categories.map(category => (
                        category.name
                      )).join(' . ')}
                      address = {item.address.address_line}
                    />
                  </Link>
                </div>
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
              <div className="col-md-4">
                {this.state.closed_rests.map(item=>(
                  <RestaurantPart
                    name={item.name}
                    logo={item.logo}
                    averageRate ={item.average_rate}
                    categories = {item.categories.map(category => (
                      category.name
                    )).join(' . ')}
                    address = {item.address.address_line}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Restaurant
