import { Component } from 'react';
import { Section } from '../Section/Section';
import { FormikForm, Input, Radio, Checkbox } from '../Form/Form';

export class AppForm extends Component {
  state = { formValue: [], filter: '', subject: '', agree: false };

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

  render() {
    return (
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
    );
  }
}
