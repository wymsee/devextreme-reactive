import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'clsx';
import {
  TableHead, TableBody, TableFooter, styled,
} from '@mui/material';
import { getStickyStyles } from './utils';

const PREFIX = 'TableParts';
export const classes = {
  fixedHeader: `${PREFIX}-fixedHeader`,
  fixedFooter: `${PREFIX}-fixedFooter`,
};

const StyledHead = styled(TableHead)(({ theme }) => ({
  [`&.${classes.fixedHeader}`]: {
    ...getStickyStyles(theme, 500),
    top: 0,
  },
}));

const StyledFooter = styled(TableFooter)(({ theme }) => ({
  [`&.${classes.fixedFooter}`]: {
    ...getStickyStyles(theme),
    bottom: 0,
  },
}));

export const Head = (props) => {
  const { isFixed, className, ...restProps } = props;
  return (
    <StyledHead
      className={classNames({ [classes.fixedHeader]: isFixed }, className)}
      {...restProps}
    />
  );
};

Head.propTypes = {
  className: PropTypes.string,
  isFixed: PropTypes.bool,
};

Head.defaultProps = {
  isFixed: undefined,
  className: undefined,
};

export const Body = (props) => {
  const { isFixed, ...restProps } = props;
  return <TableBody {...restProps} />;
};
Body.propTypes = {
  isFixed: PropTypes.bool,
};

Body.defaultProps = {
  isFixed: undefined,
};

export const Footer = (props) => {
  const { isFixed, ...restProps } = props;
  return (
    <StyledFooter className={classNames({ [classes.fixedFooter]: isFixed })} {...restProps} />
  );
};

Footer.propTypes = {
  isFixed: PropTypes.bool,
};

Footer.defaultProps = {
  isFixed: undefined,
};
