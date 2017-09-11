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
          <div className="container ">
          <div className="row">
            <h3>여행리스트!12asdf</h3>

            <GuideCardItem />
            <GuideCardItem />

          </div>
        </div>
        );
    }
}
TravelList.propTypes = propTypes;
TravelList.defaultProps = defaultProps;
export default TravelList;
