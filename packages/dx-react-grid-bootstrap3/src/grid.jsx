import * as React from 'react';
import PropTypes from 'prop-types';
import { Grid as GridBase } from '@synconset/dx-react-grid';
import { Root } from './templates/layout';

export const Grid = ({ children, ...props }) => (
  <GridBase
    rootComponent={Root}
    {...props}
  >
    {children}
  </GridBase>
);

Grid.Root = Root;

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};
