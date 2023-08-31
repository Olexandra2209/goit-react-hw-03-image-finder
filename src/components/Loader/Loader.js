import React from 'react';
import { Bars } from 'react-loader-spinner';

const CustomLoader = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <Bars type="TailSpin" color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default CustomLoader;
