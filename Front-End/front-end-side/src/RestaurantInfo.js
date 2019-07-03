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



function RestaurantInfo(props){
  return (
    <div className="shadow rounded rest-hover">
        <legend>
          <img className="shadow bg-white rounded mt-n5" src={props.logo} />
        </legend>
        <div className="col p-2">
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
  )
}



export default RestaurantInfo;
