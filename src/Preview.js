import React from 'react';

const Preview = ({ formData }) => {
  return (
    <div className='preview'>
      <p>
        Firstname: <span>{formData.firstname}</span>
      </p>
      <p>
        Lastname: <span>{formData.lastname}</span>
      </p>
      <p>
        Phone: <span>{formData.phone}</span>
      </p>
      <p>
        Role: <span>{formData.role}</span>
      </p>
      <p>
        Message: <span>{formData.message}</span>
      </p>
    </div>
  );
};

export default Preview;
