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

import TicketPage from 'containers/TicketPage/Loadable';
import LoginPage from 'containers/LoginPage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import CustomerValidationPage from '../CustomerValidationPage/Loadable';
import AgentDashboard from '../AgentDashboard/Loadable';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={CustomerValidationPage} />
        <Route exact path="/agentLogin" component={LoginPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/ticket" component={TicketPage} />
        <Route exact path="/tickets" component={AgentDashboard} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
