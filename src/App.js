import './App.css';
import { Component } from 'react';
import CreateNote from './CreateNote';
import Modal from './Modal';
import Preview from './Preview';
import Notes from './Notes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      isOpen: false,
      formData: {
        firstname: '',
        lastname: '',
        phone: '',
        role: '',
        message: '',
      },
    };
    this.handleModal = this.handleModal.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.submitNote = this.submitNote.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleModal() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  }

  deleteNote(id) {
    const newNotes = this.state.notes.filter((note) => note.id !== id);
    this.setState({
      notes: newNotes,
    });
  }

  submitNote() {
    this.setState((prevState) => ({
      notes: [
        ...prevState.notes,
        {
          id: crypto.randomUUID(),
          firstname: this.state.formData.firstname,
          lastname: this.state.formData.lastname,
          phone: this.state.formData.phone,
          role: this.state.formData.role,
          message: this.state.formData.message,
        },
      ],
    }));
    this.handleModal();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.handleModal();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState((prevState) => ({
      formData: { ...prevState.formData, [name]: value },
    }));
  }

  render() {
    return (
      <main>
        <CreateNote
          handleSubmit={this.handleSubmit}
          formData={this.state.formData}
          handleChange={this.handleChange}
        />
        <Preview formData={this.state.formData} />
        <Notes notes={this.state.notes} deleteNote={this.deleteNote} />
        {this.state.isOpen && (
          <Modal
            formData={this.state.formData}
            handleModal={this.handleModal}
            submitNote={this.submitNote}
          />
        )}
      </main>
    );
  }
}

export default App;
