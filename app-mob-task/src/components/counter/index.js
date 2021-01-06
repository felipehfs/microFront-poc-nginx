import { observer } from 'mobx-react';
import React from 'react'

const Counter = observer(({ store }) => {
    return (
        <div>
            <h1>{store.value}</h1>
            <button onClick={() => store.increment()}>+</button>
            <button onClick={() => store.reset()}>Reset</button>
            <button onClick={() => store.decrement()}>-</button>
        </div>
    )
});



export default Counter;