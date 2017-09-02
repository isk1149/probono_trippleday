import React, { Component, PropTypes } from 'react';
import {SideNav} from '../components/';
const propTypes = {
};
const defaultProps = {
};
class MyTrip extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
          <div className='row'>
            <SideNav />
            <div className="col s9">
              <h3> 나의 여행 페이지</h3>
            </div>

          </div>
        );
    }
}
MyTrip.propTypes = propTypes;
MyTrip.defaultProps = defaultProps;
export default MyTrip;
