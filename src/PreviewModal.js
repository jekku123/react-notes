const PreviewModal = ({ formData, createNote, closeModal }) => {
  return (
    <div className='modal-preview'>
      <h2>This is your note:</h2>
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
      <button onClick={createNote}>YES, I AM SURE</button>
      <button onClick={closeModal}>NO, DON'T WANT TO POST IT</button>
    </div>
  );
};

export default PreviewModal;
