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

import HomePage from 'containers/HomePage/Loadable';
import AgentLoginPage from 'containers/AgentLoginPage';
import TicketListPage from 'containers/TicketListPage';
import TicketPage from 'containers/TicketPage';
import ClientRegistrationPage from 'containers/ClientRegistrationPage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import NewTicketPage from 'containers/NewTicketPage/Loadable';
import EditTicketPage from 'containers/EditTicketPage/Loadable';
import Application from 'containers/Application';

export default function App() {
  return (
    <div>
      <Switch>
        <Application>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/:userType/login" component={AgentLoginPage} />
          <Route exact path="/clients/register" component={ClientRegistrationPage} />
          <Route exact path="/tickets/:ticketId" component={TicketPage} />
          <Route exact path="/tickets" component={TicketListPage} />
          <Route exact path="/ticket/create" component={NewTicketPage} />
          <Route exact path="/tickets/edit/:ticketId" component={EditTicketPage} />
          <Route component={NotFoundPage} />
        </Application>
      </Switch>

    </div>
  );
}
