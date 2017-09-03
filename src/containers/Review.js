import React, { Component, PropTypes } from 'react';
import {SideNav} from '../components/';
import { Tabs, Tab, TabContainer, TabContent, TabPane } from 'react-bootstrap';

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


                <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                    <Tab eventKey={1} title="내가 작성한 후기">
                      <h3> 후기</h3>
                    </Tab>
                    <Tab eventKey={2} title="나에 대한 후기">
                      <h3> 후기</h3>
                    </Tab>
                    <Tab eventKey={3} title="미작성 여행">
                      <h3> 후기</h3>
                    </Tab>
                </Tabs>


            </div>
          </div>
        );
    }
}
Review.propTypes = propTypes;
Review.defaultProps = defaultProps;
export default Review;
