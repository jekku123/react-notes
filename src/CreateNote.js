const CreateNote = ({ handleSubmit, formData, handleChange }) => {
  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='firstname'>Firstname</label>
          <input
            type='text'
            id='firstname'
            name='firstname'
            onChange={handleChange}
            value={formData.firstname}
          />
        </div>

        <div>
          <label htmlFor='lastname'>Lastname</label>
          <input
            type='text'
            id='lastname'
            name='lastname'
            onChange={handleChange}
            value={formData.lastname}
          />
        </div>

        <div>
          <label htmlFor='phone'>Phone</label>
          <input
            type='text'
            id='phone'
            name='phone'
            onChange={handleChange}
            value={formData.phone}
          />
        </div>

        <div>
          <label htmlFor='role'>Role</label>
          <select name='role' value={formData.role} onChange={handleChange}>
            <option value='' default>
              Choose a role
            </option>
            <option value='teacher'>Teacher</option>
            <option value='student'>Student</option>
            <option value='donkey'>Donkey</option>
          </select>
        </div>

        <div>
          <label htmlFor='message'>Message</label>
          <textarea
            id='message'
            name='message'
            onChange={handleChange}
            value={formData.message}
            rows='4'
          ></textarea>
        </div>
        <button type='submit'>SEND</button>
      </form>
    </div>
  );
};

export default CreateNote;
