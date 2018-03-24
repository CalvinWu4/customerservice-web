/**
 *
 * Asynchronously loads the component for ClientRegistrationPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
