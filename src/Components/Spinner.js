import React from 'react';
import spinner from './Spinner-1s-200px.gif';

const Spinner = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <img src={spinner} alt='Loading...' />
    </div>
  );
};

export default Spinner;

