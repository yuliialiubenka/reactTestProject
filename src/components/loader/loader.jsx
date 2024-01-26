// Loader.jsx
import React from 'react';
import { Circles } from 'react-loader-spinner';

export const Loader = () => {
  return (
      <Circles
          height="80"
          width="80"
          color="#000000"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass="loader"
          visible={true}
      />
  );
};
