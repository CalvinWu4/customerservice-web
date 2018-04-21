/**
 *
 * Asynchronously loads the component for TicketListPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
