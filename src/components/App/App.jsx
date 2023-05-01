import { Component } from 'react';

import { Section } from 'components/Section/Section';

export const App = () => {
  return <Section title=""></Section>;
};

export class AppClass extends Component {
  // ---------------State--------------- //
  state = {};

  // ---------LifeCycle Methods--------- //
  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  // -----------Custom Methods---------- //

  // -----------Render Method----------- //
  render() {
    return <Section title=""></Section>;
  }
}
