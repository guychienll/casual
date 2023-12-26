import React from 'react';

const According = ({ title = '', bullets = [], isOpen = false }) => {
    return (
        <details open={isOpen}>
            <summary>{title}</summary>
            <ul>
                {bullets.map((bullet, index) => {
                    return (
                        <React.Fragment key={index}>{bullet}</React.Fragment>
                    );
                })}
            </ul>
        </details>
    );
};
export default According;
