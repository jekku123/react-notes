import './App.css';
import { Component } from 'react';

import Form from './Form';
import Modal from './Modal';
import Preview from './Preview';
import Notes from './Notes';
import PreviewModal from './PreviewModal';

class App extends Component {
  state = {
    updates: 0,
    isOpen: {
      previewModal: false,
      updateModal: false,
    },
    formData: {
      firstname: '',
      lastname: '',
      phone: '',
      role: '',
      message: '',
    },
    data: [],
  };

  componentDidMount() {
    this.fetchGetRequest();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.updates !== prevState.updates) {
      this.fetchGetRequest();
    }
  }

  fetchGetRequest = async () => {
    try {
      const res = await fetch('http://localhost:4001/notes');
      if (res.ok) {
        const data = await res.json();
        this.setState({ data });
      }
    } catch (error) {
      console.log('ERROR: ' + error);
    }
  };

  fetchPostRequest = async (note) => {
    try {
      await fetch('http://localhost:4001/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
      });
    } catch (error) {
      console.log('Failed to post a note \n' + error);
    }
  };

  handleModal = (modal) => {
    this.setState((prevState) => ({
      isOpen: {
        ...prevState.isOpen,
        [modal]: !prevState.isOpen[modal],
      },
    }));
  };

  deleteNote = (id) => {
    // this.setState({
    //   notes: this.state.notes.filter((note) => note.id !== id),
    // });
  };

  createNote = () => {
    this.fetchPostRequest({ id: crypto.randomUUID(), ...this.state.formData });
    this.setState({
      formData: {
        firstname: '',
        lastname: '',
        phone: '',
        role: '',
        message: '',
      },
      updates: this.state.updates + 1,
    });
    this.handleModal('previewModal');
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleModal('previewModal');
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState((prevState) => ({
      formData: { ...prevState.formData, [name]: value },
    }));
  };

  render() {
    return (
      <main>
        <section>
          <Form
            formData={this.state.formData}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
          <Preview formData={this.state.formData} />
        </section>
        <Notes notes={this.state.data} deleteNote={this.deleteNote} />
        {this.state.isOpen.previewModal && (
          <Modal>
            <PreviewModal
              formData={this.state.formData}
              closeModal={() => this.handleModal('previewModal')}
              createNote={this.createNote}
            />
          </Modal>
        )}
      </main>
    );
  }
}

export default App;
