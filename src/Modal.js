import './Modal.css';

const Modal = ({ formData, handleModal, submitNote }) => {
  return (
    <div className='modal-layout'>
      <div className='modal'>
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
        <button onClick={submitNote}>YES, I AM SURE</button>
        <button onClick={handleModal}>NO, DON'T WANT TO POST IT</button>
      </div>
    </div>
  );
};

export default Modal;
