/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Application from 'containers/Application';
import HomePage from 'containers/HomePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import SignupPage from 'containers/SignupPage/Loadable';
import TicketListPage from 'containers/TicketListPage/Loadable';
import TicketPage from 'containers/TicketPage/Loadable';
import MyReviewsPage from 'containers/MyReviewsPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default function App() {
  return (
    <Application>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/signup' component={SignupPage} />
        <Route exact path='/tickets' component={TicketListPage} />
        <Route exact path='/tickets/:ticketId' component={TicketPage} />
        <Route exact path='/reviews' component={MyReviewsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Application>
  );
}
