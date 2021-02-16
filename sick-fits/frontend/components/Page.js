import PropTypes from 'prop-types';

export default function Page({ children, anotherProps }) {
  return (
    <div>
      <h2>I am here in Page</h2>
      {children}
      <h3>{anotherProps}</h3>
    </div>
  );
}

// Declare type for props
Page.propTypes = {
  children: PropTypes.string,
  anotherProps: PropTypes.any,
};
