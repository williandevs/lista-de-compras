import React from 'react';

const Input = (props) => {
  const { type, placeholder, value, onChange, rows, maxLength } = props;

  if (type === 'textarea') {
    return (
      <textarea
        
        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"

        {...props}
      
      />
    );
  }

  return (
    <input
     
      className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        {...props}
    />
  );
};

export default Input;
