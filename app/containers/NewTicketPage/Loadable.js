/**
 *
 * Asynchronously loads the component for NewTicketPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
