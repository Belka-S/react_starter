import React from 'react';

import { PureComponent } from 'react';
import classNames from 'classnames';

import css from './Collection.module.scss';

const LS_KEY = 'collection_active_item_id';

export class Collection extends PureComponent {
  // ---------------State--------------- //
  state = { activeItemId: null };

  // ---------LifeCycle Methods--------- //
  componentDidMount() {
    const activeItemId = localStorage.getItem(LS_KEY);
    activeItemId && this.setState({ activeItemId });
  }

  componentDidUpdate(prevProps, prevState) {
    const { activeItemId } = this.state;
    if (prevState.activeItemId !== activeItemId) {
      localStorage.setItem(LS_KEY, activeItemId);
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.activeItemId !== this.state.activeItemId;
  // }

  // -----------Custom Methods---------- //
  handleClick = id => {
    this.setState({ activeItemId: id });
  };

  addClass = id => {
    return classNames(css.Btn, {
      [css.Btn__active]: id === this.state.activeItemId,
    });
    // const currentClass = [css.Btn];
    // if (id === this.state.activeItemId) {
    //   currentClass.push(css.Btn__active);
    // }
    // return currentClass.join(' ');
  };

  // ------------Render Method------------ //
  render() {
    const { items } = this.props;
    const { activeItemId } = this.state;
    const activeItem = items.find(el => el.id === activeItemId);

    return (
      <div className={css.Collection}>
        <div>
          {items.map(item => (
            <button
              className={this.addClass(item.id)}
              key={item.id}
              onClick={e => this.handleClick(item.id)}
            >
              {item.name}
            </button>
          ))}
        </div>
        {activeItem && (
          <img src={activeItem.avatar} alt="icon" width="100" height="100" />
        )}
      </div>
    );
  }
}
