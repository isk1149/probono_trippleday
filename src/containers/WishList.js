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
          <div >
            <div>위시리스트</div>

            <GuideCardItem />
          </div>
        );
    }
}
WishList.propTypes = propTypes;
WishList.defaultProps = defaultProps;
export default WishList;
