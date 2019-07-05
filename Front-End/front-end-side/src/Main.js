import React , { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Autosuggest from 'react-autosuggest';


function getSuggestionValue(suggestion) {
  return suggestion.area;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.area}</span>
  );
}

class Main extends Component {
  constructor(){
    super();

    this.state = {
      value: '',
      suggestions: [],
      areaCount: null
    };
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    console.log(value)
    fetch("http://localhost:8080/rest_area?area="+value)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({
            suggestions: result,
            areaCount: result.area__count
          });
        }
      )

  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render () {
    const { value, suggestions } = this.state;
    const inputProps = {
      style : {fontWeight:"bold", width:"100%"},
      placeholder: "مثلا نیاوران",
      value,
      onChange: this.onChange
    };
    return (
      <div className="main text-center">
        <div className="text-center up"><img id="reyhoon" src={require("./mocks/reyhoon.jpg")} alt="reyhoon" className="text-center"/></div>
        <h1 className="text-center up headerup">سفارش آنلاین غذا از بهترین رستوران‌ها و فست‌فود‌ها</h1>
        <p className="text-center up headerdown">برای دیدن لیست رستوران‌ها و فست‌فود‌هایی که به شما سرویس می‌دهند، منطقه خود را وارد کنید.</p>
        <div className="up up_searchBar">
          <div className="d-flex flex-row-reverse text-right m-auto">
            <div className="bg-white inputs rounded shadow">
              <div className="citySelection">
                <select className="border rounded shadow city_select" name="city">
                  <option value="tehran">تهران</option>
                  <option value="shiraz">شیراز</option>
                  <option value="isfahan">اصفهان</option>
                  <option value="yazd">یزد</option>
                </select>
              </div>

              <Link to={{
                  pathname: '/restaurants',
                  state: {
                    area: this.state.value,
                    areaCount: this.state.areaCount
                  }
              }}>
                <button className="search_butt">
                  <span className="search_ic">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><g fill="none" fill-rule="evenodd"><path d="M0 0h18v18H0z"></path><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" transform="translate(2 2)"><circle cx="6.125" cy="6.125" r="6.125"></circle><path d="M13.373 13.373l-2.767-2.767"></path></g><path d="M0 0h18v18H0z"></path></g></svg>
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="area_select">
            {/* <input className="myinput" placeholder="مثلا نیاوران" onChange={this.search_area} /> */}
            <Autosuggest
              inputProps={inputProps}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              suggestions={suggestions}
            />
          </div>
        </div>
      </div>
    )
  }
};

export default Main;
