import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Header from '../Shared/Header';
import HomePage from '../Home/HomePage';
import ProfilePage from '../Profile/ProfilePage';

const Template = () => {
  return(
    <Router>
    <div className="wrapper">
      <Header username = 'Sanjay this is Header' />
      <Route exact path="/" component={HomePage} />
      <Route path="/account/profile/:id" component={ProfilePage} />      
    </div>
    </Router>

  )};

export default Template;
