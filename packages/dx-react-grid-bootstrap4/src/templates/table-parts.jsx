import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'clsx';

import { BodyColorContext } from './layout';

export const TableHead = (props) => {
  const { isFixed, className, style, ...restProps } = props;
  const backgroundColor = React.useContext(BodyColorContext);
  return (
    <thead
      className={classNames({
        'dx-g-bs4-fixed-header': isFixed,
        'dx-g-bs4-table-sticky': isFixed,
      }, className)}
      style={{
        ...(isFixed && { backgroundColor }),
        ...style,
      }}
      {...restProps}
    />
  );
};
TableHead.propTypes = {
  className: PropTypes.string,
  isFixed: PropTypes.bool,
  style: PropTypes.object,
};

TableHead.defaultProps = {
  isFixed: undefined,
  style: undefined,
  className: undefined,
};

export const TableBody = (props) => {
  const { isFixed = undefined, ...restProps } = props;
  return <tbody {...restProps} />;
};
TableBody.propTypes = {
  isFixed: PropTypes.bool,
};


export const TableFooter = (props) => {
  const { isFixed, ...restProps } = props;
  const backgroundColor = React.useContext(BodyColorContext);
  return (
    <tfoot
      className={classNames({
        'dx-g-bs4-fixed-footer': isFixed,
        'dx-g-bs4-table-sticky': isFixed,
      })}
      style={{
        ...(isFixed && { backgroundColor }),
      }}
      {...restProps}
    />
  );
};

TableFooter.propTypes = {
  isFixed: PropTypes.bool,
};

TableFooter.defaultProps = {
  isFixed: undefined,
};
