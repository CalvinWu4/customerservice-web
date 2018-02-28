/**
 *
 * Asynchronously loads the component for CustomerValidationPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
