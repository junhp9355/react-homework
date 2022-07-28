import React from 'react';

const Mybtn = ({ text, borderRadius, fontSize, isChecked }) => {
    return (
        <div style={{ display: "inline-block" }}>
            <button style={{
                backgroundColor: "red",
                border: 0,
                borderRadius: `${borderRadius}`,
                color: "white",
                fontSize: `${fontSize}`,
                margin: "10px",
                padding: "10px 20px",
                fontWeight: "bold",
                textDecoration: isChecked ? "line-through" : "none",
            }}
                onClick={() => {
                    alert(`${text}을 클릭하였습니다.`)
                }}
            >
                {text}
            </button>
        </div >
    );
};

export default Mybtn;