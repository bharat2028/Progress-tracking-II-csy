import React from 'react';
function Child({ onMessageSend }) {
 return (
 <div>
 <h2>Child Component</h2>
 <button onClick={() => onMessageSend('Hello from Child!')}>
 Send Message to Parent
 </button>
 </div>
 );
}
export default Child;