import React from 'react';
import {Switch, Route} from 'react-router-dom';
import SubbappyHome from './components/SubbappyHome';
import SubbappyLogin from './components/SubbappyLogin';
import SubbappyProfile from './components/SubbappyProfile';
import SubbappyAuction from './components/SubbappyAuction';


export const Routes = () => {
  return(
      <Switch>
          <Route exact path="/" component={SubbappyHome} /> 
          <Route  path="/login" component={SubbappyLogin} />
          <Route  path="/profile/:id" component={SubbappyProfile} />
          <Route  path="/detail/:id" component={SubbappyAuction} />

      </Switch>
  );
}