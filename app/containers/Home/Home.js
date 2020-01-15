import React from 'react';
import {
  Row
} from 'reactstrap';
import Sidebar from '../Sidebar';
import Content from '../Content/Content';
import './scss/style.scss';

const Home = () => (
  <Row id="main">
    <Sidebar />
    <Content />
  </Row>
);

export default Home;
