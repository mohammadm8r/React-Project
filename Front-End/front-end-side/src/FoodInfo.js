import React , { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'



function FoodInfo(props){
  return (
        <div className="col-md-6 infos mb-3">
          <div className="bg-white rounded shadow p-3 shadowni">
            <span className="food_name">
              {props.name}
            </span>
            <span className="float-left food_cost">
              {props.cost}
            </span>
            <div className="desc">
              {props.description}
            </div>
            <div>
              <button className="button text-right mr-n2 mt-3">
                + افزودن به سبد خرید
              </button>
            </div>
          </div>
        </div>
  )
}



export default FoodInfo;
