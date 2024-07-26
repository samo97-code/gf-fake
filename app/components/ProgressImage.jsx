import React from 'react';

const ProgressImage = ({step}) => {
    return (
        <div className="flex justify-center w-full px-10">
            <img src={`/step_${step}_progressbar.svg`} alt="progress-bar" />
        </div>
    );
};

export default ProgressImage;
