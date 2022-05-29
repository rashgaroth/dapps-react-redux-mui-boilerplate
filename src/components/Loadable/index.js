/* eslint-disable func-names */
/* eslint-disable react/jsx-props-no-spreading */
import { Suspense } from 'react';

// project imports
import Loader from '../Loader';

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable = Component =>
  function (props) {
    return (
      <Suspense fallback={<Loader />}>
        <Component {...props} />
      </Suspense>
    );
  };

export default Loadable;
