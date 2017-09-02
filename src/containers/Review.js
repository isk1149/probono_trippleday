import React, { Component, PropTypes } from 'react';
import {SideNav} from '../components/';
const propTypes = {
};
const defaultProps = {
};
class Review extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
          <div className='row'>
            <SideNav />
            <div className="col s9">
              <h3> 후기페이지</h3>
            </div>
          </div>
        );
    }
}
Review.propTypes = propTypes;
Review.defaultProps = defaultProps;
export default Review;
