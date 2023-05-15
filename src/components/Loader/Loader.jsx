import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
function Loader() {
  return (
    <ThreeDots
      height="80"
      width="100"
      radius="9"
      color="#ed4624"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
}

export default Loader;
