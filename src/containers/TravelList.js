import React, { Component, PropTypes } from 'react';
import {GuideCardItem} from '../components/';
const propTypes = {
};
const defaultProps = {
};
class TravelList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
          <div >
            <div>여행리스트</div>

            <GuideCardItem />
          </div>
        );
    }
}
TravelList.propTypes = propTypes;
TravelList.defaultProps = defaultProps;
export default TravelList;
