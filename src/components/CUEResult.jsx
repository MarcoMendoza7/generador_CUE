import React from 'react';

const CUEResult = ({ result }) => {
  return (
    <div className="result-container">
      <h3>Código Único Estudiantil (CUE)</h3>
      <div className="cue-box">
        {result}
      </div>
    </div>
  );
};

export default CUEResult;