import { Component } from 'react';
import { createPortal } from 'react-dom';

import css from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e =>
    e.target === e.currentTarget && this.props.onClose();

  render() {
    const { children } = this.props;

    return createPortal(
      <div className={css.Backdrop} onClick={this.handleBackdropClick}>
        <div>{children}</div>
      </div>,
      modalRoot
    );
  }
}
