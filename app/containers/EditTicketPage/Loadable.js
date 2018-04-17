/**
 *
 * Asynchronously loads the component for EditTicketPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
