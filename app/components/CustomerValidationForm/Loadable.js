/**
 *
 * Asynchronously loads the component for CustomerValidationForm
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
