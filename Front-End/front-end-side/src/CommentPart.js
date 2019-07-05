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



function CommentPart(props){
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
        </div>
        <div className="col-md-6">
          <div className="text-center">
            <span>
              {
                get_int(props.averageRate)
                  .map(item=>(
                    <FontAwesomeIcon className="color" icon={faStar}/>
                  )
                )
              }
            </span>
          </div>
          <div className="color text-center">
            {props.averageRate}
          </div>
        </div>
        <div className="col-md-3">
        </div>
      </div>
      <div className="row">
        <div className="col-md-1">
        </div>

        <div className="col-md-10 text-center mt-4">
          <div className="row progresss">
            <span className="col-md-8">
              <div className="progress prog">
                <div className="progress-bar bg-warning progressbar" role="progressbar" aria-valuenow="75" style={{width: (100*props.averageRate)/5 + '%'}} aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </span>
            <span className="col-md-4 titles3">
              کیفیت غذا
            </span>
          </div>


          <div className="row progresss">
            <span className="col-md-8">
              <div className="progress prog">
                <div className="progress-bar bg-warning progressbar" role="progressbar" style={{width: 80 + '%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </span>
            <span className="col-md-4 titles3">
               کیفیت بسته‌بندی
            </span>
          </div>


          <div className="row progresss">
            <span className="col-md-8">
              <div className="progress prog">
                <div className="progress-bar bg-warning progressbar" style={{width: 70 + '%'}} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </span>
            <span className="col-md-4 titles3">
              سرعت ارسال پیک
            </span>
          </div>


          <div className="row progresss">
            <span className="col-md-8">
              <div className="progress prog">
                <div className="progress-bar bg-warning progressbar" style={{width: 50 + '%'}} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </span>
            <span className="col-md-4 titles3">
              برخورد پیک
            </span>
          </div>

        </div>

        <div className="col-md-1">
        </div>
      </div>
    </div>
  )
}



export default CommentPart;
