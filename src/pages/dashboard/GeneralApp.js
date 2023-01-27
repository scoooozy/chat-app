import React, { Suspense, lazy} from "react";

//Dynamic loading 
const Cat = lazy(() => import('../../components/Cat'))

const GeneralApp = () => {

  return (
    <>
      <Suspense fallback="loading...">
        <Cat/>
      </Suspense>
    </>
  );
};

export default GeneralApp;
