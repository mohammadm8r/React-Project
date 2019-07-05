import React , { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

let get_int = (rate) => {
  let rate_list  = []
  for(let i=0;i<parseInt(rate);i++){
    rate_list.push(0)
  }
  return rate_list
}



function RestaurantPart(props){
  return (

      <div className="shadow p-3 mb-5 rounded rest-hover">
        <div className="row">
          <div className="col-md-3">
            <img className="shadow mb-5 bg-white rounded" src={props.logo} />
          </div>
          <div className="col-md-9">
            <h1 className="name-font">{props.name}</h1>
            <div>
              <span>
                {
                  get_int(props.averageRate)
                    .map(item=>(
                      <FontAwesomeIcon className="color" icon={faStar}/>
                    )
                  )
                }
                </span>
                <span className="color p-1">
                  {props.averageRate}
                </span>
            </div>
            <div className="name-font1">{props.categories}</div>
            <div className="address">{props.address}</div>
          </div>
        </div>

        <div className="row p-2">
          <button className="button text-center">
            شروع سفارش
          </button>
        </div>
      </div>
  )
}



export default RestaurantPart;
