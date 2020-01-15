import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import Home from '../Home';
import './style.scss';
import NoDictionaries from '../NoDictionaries/NoDictionaries';

const App = () => (
  <div className="container">
    <Helmet
      titleTemplate="%s - Dictionary App"
      defaultTitle="Dictionary App"
    >
      <meta name="description" content="Dictionary Application" />
    </Helmet>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dictionary/:id" component={Home} />
      <Route exact path="/no-dictionaries" component={NoDictionaries} />
    </Switch>
  </div>
);

export default App;
