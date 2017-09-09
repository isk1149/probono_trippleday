import React, { Component, PropTypes } from 'react';
import { Tabs, Tab, TabContainer, TabContent, TabPane } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const propTypes = {
};
const defaultProps = {
};


class MyReservedTravel extends Component {
    constructor(props) {
        super(props);
    }
    render() {

      const myReservedTravel = (

          <div>
          <div className="col s3">
            <div className="card red lighten-3">
              <div className="card-image">
               <img src="http://13.124.115.238:8080/image/no_image.png"/>
              <span className="card-title black-text">내가 예약한 여행</span>
              </div>
              <div className="card-content">
                <p>안녕하세요 함께 놀러갑시다.</p>
              </div>
              <div className="card-action">
                <a href="#" className="white-text">상세보기</a>
                 <Button bsStyle="success">참여확정</Button>
              </div>
            </div>
           </div>
           </div>


      )

      const myReservedTravel_yet = (

          <div>
          <div className="col s3">
            <div className="card red lighten-3">
              <div className="card-image">
               <img src="http://13.124.115.238:8080/image/no_image.png"/>
              <span className="card-title black-text">내가 예약한 여행</span>
              </div>
              <div className="card-content">
                <p>안녕하세요 함께 놀러갑시다.</p>
              </div>
              <div className="card-action">
                <a href="#" className="white-text">상세보기</a>
                 <Button bsStyle="warning">확정대기</Button>
              </div>
            </div>
           </div>
           </div>


      )



        return(
          <div className="row cardContainer">
            {myReservedTravel}
            {myReservedTravel_yet}
            {myReservedTravel}

            </div>
        );
    }
}
MyReservedTravel.propTypes = propTypes;
MyReservedTravel.defaultProps = defaultProps;
export default MyReservedTravel;
