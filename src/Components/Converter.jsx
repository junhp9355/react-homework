import React from 'react';

const Converter = ({ counter }) => {
    return (
        <div>
            <div>
                {counter % 2 === 0 ? "짝수" : "홀수"}
            </div>
        </div>
    );
};

export default Converter;