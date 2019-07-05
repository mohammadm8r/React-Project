import React , { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCheckSquare } from '@fortawesome/free-solid-svg-icons'

function AddressInfo(props){
  return (
    <div className="col-md-7">
      <h1 className="titles text-right">{props.name}</h1>
      <FontAwesomeIcon icon="faCheckSquare" /><p className="address text-right">{props.address}</p>
      <h1 className="titles2 text-right">ساعت سفارش گیری</h1>
      <div className="row text-right sefaresh">
        <span className="col-md-6">همه روزه</span>
        <span className="col-md-6">
          <span>از</span>
          <span>{" "}{props.opening_time}{" "}</span>
          <span>تا</span>
          <span>{" "}{props.closing_time}{" "}</span>
        </span>
      </div>
    </div>
  )
}


export default AddressInfo;
