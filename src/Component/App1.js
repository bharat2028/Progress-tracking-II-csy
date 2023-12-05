import React from 'react';
import Timer from './Timer';

const App1 = () => {
  return (
    <div>
      <h1>Timer App</h1>
      <Timer initialSeconds={0} />
    </div>
  );
};

export default App1;