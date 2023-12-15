import Head from "next/head";
import React, { Fragment } from "react";

const NoPage = () => {
  return (
    <Fragment>
      <Head>
        <title>404</title>
      </Head>
      <div>
        <div>
          <div>
            <h1>404</h1>
            <h4>Page Not Found</h4>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NoPage;
