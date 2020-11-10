import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

const IncreaseButton = () => {

    useEffect(()=> {
        console.log("INC button reload")
    })

    let state_counter = useSelector(state => state.counter);

    return (
      <div >
          {state_counter.data}
      </div>
    );
}

export default IncreaseButton;