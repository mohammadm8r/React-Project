import React , { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'



function RightCate(props){
  return (
    <ul className="category_select">
      <li className="cat"><a className="cat_link" href={'#'+props.name}>{props.name}</a></li>
    </ul>
  )
}

export default RightCate;
