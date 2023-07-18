import React from 'react';
import * as Svg from './svg';

type IconPropType = {
  name: 'Search';
  opts?: null | any;
};

const Icon = ({ name, opts = null }: IconPropType) => {
  return React.createElement(Svg[name], opts);
};

export default Icon;
