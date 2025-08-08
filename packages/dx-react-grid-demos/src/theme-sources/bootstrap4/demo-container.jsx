import * as React from 'react';
import PropTypes from 'prop-types';
import '@synconset/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';
import '@synconset/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';

const DemoContainer = ({ children }) => (
  <div>
    {children}
  </div>
);

DemoContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DemoContainer;
