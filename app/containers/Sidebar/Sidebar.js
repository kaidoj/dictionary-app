import React from 'react';
import {
  Col
} from 'reactstrap';
import Dictionaries from '../../components/Dictionaries';
import './scss/style.scss';

const Sidebar = () => (
  <Col lg="3" sm="5" className="slidenav d-none d-sm-block">
    <Dictionaries />
  </Col>
);

export default Sidebar;
