/**
 *
 * Asynchronously loads the component for MyReviewsPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
