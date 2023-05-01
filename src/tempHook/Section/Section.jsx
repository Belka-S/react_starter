import PropTypes from 'prop-types';
import css from './Section.module.scss';

export const Section = ({ mainTitle, title, children }) => (
  <div className={css.Container}>
    {mainTitle && <h1>{mainTitle}</h1>}
    {title && <h2>{title}</h2>}
    {children}
  </div>
);

Section.propTypes = {
  mainTitle: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
