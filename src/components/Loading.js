import React from 'react';
import {Rings} from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className="flex justify-center item-center">
        <Rings type="Puff" color="#00bfff" height={550} width={80} />
    </div>
  )
}

export default Loading