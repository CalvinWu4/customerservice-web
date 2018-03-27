/**
 *
 * Asynchronously loads the component for ClientLoginPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
