import React, { Component, PropTypes } from 'react';
import {GuideCardItem} from '../components/';

const propTypes = {
};
const defaultProps = {
};

class WishList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
          <div className="container auth">
          <div className="row">



              <h3>위시리스트</h3>

              <GuideCardItem />

              </div>
          </div>
        );
    }
}
WishList.propTypes = propTypes;
WishList.defaultProps = defaultProps;
export default WishList;
