import React from 'react';
import { Button } from './Button';
export default {
  title: 'Button',
  component: Button
};
export var Primary = function Primary(args) {
  return /*#__PURE__*/React.createElement(Button, args);
};
Primary.args = {
  children: 'Label'
};