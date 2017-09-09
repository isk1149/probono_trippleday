import React, { Component, PropTypes } from 'react';
import { Tabs, Tab, TabContainer, TabContent, TabPane } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const propTypes = {
};
const defaultProps = {
};


class MyGuide extends Component {
    constructor(props) {
        super(props);
    }
    render() {

      const myGuide = (

          <div className="row cardContainer ">
            <div className="col s3">
              <div className="card red lighten-3">
                <div className="card-image">
                 <img src="http://13.124.115.238:8080/image/no_image.png"/>
                <span className="card-title black-text">내가 만든 여행</span>
                </div>
                <div className="card-content">
                  <p>안녕하세요 함께 놀러갑시다.</p>
                </div>
                <div className="card-action">
                  <a href="#" className="white-text">상세보기</a>
              
                </div>
              </div>
             </div>

             <div className="col s6">

               <table className="striped">

                 <thead>
                           <tr>
                               <th>일시</th>
                               <th>예약확정</th>
                               <th>예약대기</th>
                           </tr>
                         </thead>
                  <tbody>
                    <tr>
                      <td><p> <span>2017</span>년  <span>x</span>월 <span>x</span>일 </p>
                                    <p> <span>오전 xx:xx</span> ~ <span>오후 xx:xx</span> </p></td>
                      <td> <Button bsStyle="success"><span>x</span>명</Button></td>
                      <td><Button bsStyle="warning"><span>x</span>명</Button></td>
                    </tr>
                    <tr>
                      <td><p> <span>2017</span>년  <span>x</span>월 <span>x</span>일 </p>
                                    <p> <span>오전 xx:xx</span> ~ <span>오후 xx:xx</span> </p></td>
                      <td> <Button bsStyle="success"><span>x</span>명</Button></td>
                      <td><Button bsStyle="warning"><span>x</span>명</Button></td>
                    </tr>
                    <tr>
                      <td><p> <span>2017</span>년  <span>x</span>월 <span>x</span>일 </p>
                                    <p> <span>오전 xx:xx</span> ~ <span>오후 xx:xx</span> </p></td>
                      <td> <Button bsStyle="success"><span>x</span>명</Button></td>
                      <td><Button bsStyle="warning"><span>x</span>명</Button></td>
                    </tr>
                  </tbody>
                </table>


                <div className= 'col s1 offset-s6'>
                  <NavLink to='/'><button className="btn right marginT waves-effect waves-light ">일정추가</button></NavLink>

                </div>
             </div>
           </div>


      )

        return(
          <div >
            {myGuide}
            {myGuide}
            {myGuide}

            </div>
        );
    }
}
MyGuide.propTypes = propTypes;
MyGuide.defaultProps = defaultProps;
export default MyGuide;
