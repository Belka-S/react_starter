import { Component } from 'react';

import { Section } from '../Section/Section';
import { FormikForm, Input, Radio, Checkbox } from '../Form/Form';
import { Modal } from '../Modal/Modal';
import { Button } from '../Button/Button';
import { IconBtn } from '../Button/IconBtn';
import { ReactComponent as CloseIcon } from 'img/svg/close.svg';
import { Collection } from '../Collection/Collection';
import data from '../Collection/data.json';
import { DataRequest } from '../Request/DataRequest';
import { SearchForm } from '../Request/SearchForm';

export class Temp extends Component {
  // ---------------State--------------- //
  state = {
    // Form
    formValue: [],
    filter: '',
    subject: '',
    agree: false,
    // Modal
    isModalOpen: false,
    // http-Request
    searchQuery: '',
  };

  // ---------LifeCycle Methods--------- //
  componentDidMount() {
    const subject = localStorage.getItem('subject');
    const agree = JSON.parse(localStorage.getItem('agree'));
    subject && this.setState({ subject });
    agree && this.setState({ agree });
  }

  componentDidUpdate(prevProps, prevState) {
    const { subject, agree } = this.state;
    prevState.subject !== subject && localStorage.setItem('subject', subject);
    prevState.agree !== agree && localStorage.setItem('agree', agree);
  }

  // -----------Custom Methods---------- //
  // FormikForm
  addFormValue = data =>
    this.setState(prevState => ({
      formValue: [...prevState.formValue, data],
    }));
  // Input (name="filter") // Radio
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  reset = () => this.setState({ filter: '' });
  // Checkbox
  handleCheckbox = e => {
    const { name, checked } = e.currentTarget;
    this.setState({ [name]: checked });
  };
  // Modal
  toggleModal = () => {
    console.log(`Toggle-try ${Date.now()}`);
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };
  // http-Request
  handleSearch = searchQuery => {
    this.setState({ searchQuery });
  };

  // ------------Render Method------------ //
  render() {
    const { isModalOpen } = this.state;

    return (
      <>
        <Section title="Form">
          <FormikForm handleSubmit={this.addFormValue} />
          <Input
            handleChange={this.handleChange}
            inputValue={this.state.filter}
            reset={this.reset}
          />
          <Radio
            handleChange={this.handleChange}
            subject={this.state.subject}
            allSabjects={['css', 'html', 'js']}
          />
          <Checkbox
            handleCheckbox={this.handleCheckbox}
            agree={this.state.agree}
          />
        </Section>

        <Section title="Modal">
          <Button onClick={this.toggleModal}>Open Modal</Button>
          {isModalOpen && (
            <Modal onClose={this.toggleModal}>
              <h2>Modal Window</h2>
              <IconBtn onClick={this.toggleModal} aria-label="close modal">
                <CloseIcon width="15" height="15" />
              </IconBtn>
            </Modal>
          )}
        </Section>

        <Section title="Collection">
          <Collection items={data} />
        </Section>

        <Section title="http-Request">
          <SearchForm onSearch={this.handleSearch} />
          <DataRequest searchQuery={this.state.searchQuery} />
        </Section>
      </>
    );
  }
}
