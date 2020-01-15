import React from 'react';
import { Row, Col } from 'reactstrap';
import Sidebar from '../Sidebar';

const NoDictionaries = () => (
  <Row id="main">
    <Sidebar />
    <Col>
      No dictionaries found!
    </Col>
  </Row>
);

export default NoDictionaries;
