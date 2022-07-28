import React from 'react';

const Counter = ({ counter, setCounter }) => {
    const addCounter = () => {
        setCounter(counter + 1);
    };

    return (
        <div>
            <div>{counter}번 클릭하였습니다.</div>
            <button onClick={addCounter}>클릭</button>
        </div>
    );
};

export default Counter;