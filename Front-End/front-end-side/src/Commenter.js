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



function Commenter(props){
  return (
    <div>
      <div className="row comment_main pt-4 text-right">
        <div className="col-md-6 titles3">
          {props.name}
        </div>
        <div className="col-md-6 text-left">
          <span>
            <span className="color">{props.averageRate}</span>
            <span>
              {
                get_int(props.averageRate)
                  .map(item=>(
                    <FontAwesomeIcon className="color" icon={faStar}/>
                  )
                )
              }
            </span>
          </span>
        </div>
        <div className="row mr-3 mt-2">
          <p className="comment-text">{props.text}</p>
        </div>
      </div>
    </div>
  )
}



export default Commenter;
