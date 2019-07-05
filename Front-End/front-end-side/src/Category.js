import React , { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'



function Category(props){
  return (
    <div className="row" id="menu">
      <h1 className="titles" id={props.name}>{props.name}</h1>
    </div>
  )
}

export default Category;
