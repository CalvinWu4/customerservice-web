/**
 *
 * Asynchronously loads the component for ClientTicketTable
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
