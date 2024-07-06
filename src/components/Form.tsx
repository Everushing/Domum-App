// src/components/Form.tsx

import React from 'react';

const Form: React.FC = () => {
  return (
    <form className="my-3">
      <input type="text" placeholder="Enter your name" className="form-control mb-3" />
      <textarea placeholder="Enter your message" rows={5} className="form-control mb-3"></textarea>
      <button type="submit" className="button">Submit</button>
    </form>
  );
};

export default Form;
