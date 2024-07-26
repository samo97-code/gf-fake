import React from 'react';

const ProgressImage = ({step}) => {
    if (step === 6) return

    return (
        <div className="flex justify-center w-full px-10">
            <img src={`/step_${step}_progressbar.svg`} alt="progress-bar" />
        </div>
    );
};

export default ProgressImage;
