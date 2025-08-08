import * as React from 'react';
import { Plugin, Getter, Getters } from '@synconset/dx-react-core';
import { ARGUMENT_DOMAIN, getValueDomainName, addDomain } from '@synconset/dx-chart-core';
import { withPatchedProps } from '../utils';
import { ScaleProps, ArgumentScaleProps, ValueScaleProps } from '../types';

/** @internal */
export class Scale extends React.PureComponent<ScaleProps> {
  render() {
    const { name, factory, modifyDomain } = this.props;
    const args = { factory, modifyDomain };
    const getDomains = ({ domains }: Getters) => addDomain(domains, name!, args);
    return (
      <Plugin name="Scale">
        <Getter name="domains" computed={getDomains} />
      </Plugin>
    );
  }
}

export const ArgumentScale: React.ComponentType<ArgumentScaleProps> = withPatchedProps(props => ({
  ...props,
  name: ARGUMENT_DOMAIN,
}))(Scale);

export const ValueScale: React.ComponentType<ValueScaleProps> = withPatchedProps(props => ({
  ...props,
  name: getValueDomainName((props as ScaleProps).name),
}))(Scale);
