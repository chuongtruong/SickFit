import PropTypes from 'prop-types';
import Header from './Header';

export default function Page({ children, anotherProps }) {
  return (
    <div>
      <Header />
      <h2>I am here in Page Component</h2>
      {children}
      <h3>{anotherProps}</h3>
    </div>
  );
}

// Declare type for props
Page.propTypes = {
  children: PropTypes.any,
  anotherProps: PropTypes.any,
};
