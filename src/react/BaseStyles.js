import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import { compose, color, typography } from 'styled-system';
import propTypes from '@styled-system/prop-types';
import { themeGet } from '@styled-system/theme-get';
import { normalize } from 'polished';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  ${normalize()}
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    line-height: 1.25;
  }
  h1 {
    font-size: ${themeGet('fontSizes.6', '')}px;
  }
  h2 {
    font-size: ${themeGet('fontSizes.5', '')}px;
  }
  h3 {
    font-size: ${themeGet('fontSizes.4', '')}px;
  }
  h4 {
    font-size: ${themeGet('fontSizes.3', '')}px;
  }
  h5 {
    font-size: ${themeGet('fontSizes.2', '')}px;
  }
  h6 {
    font-size: ${themeGet('fontSizes.1', '')}px;
  }
`;

const Base = ({ children, ...rest }) => {
  return (
    <div {...rest}>
      <GlobalStyle />
      {children}
    </div>
  );
};

const styleProps = compose(
  color,
  typography
);

const BaseStyles = styled(Base)`
  ${styleProps}
`;

BaseStyles.defaultProps = {
  fontSize: '2',
  fontFamily: 'sansSerif',
  color: 'text',
  theme,
};

BaseStyles.propTypes = {
  ...propTypes.styleProps,
  theme: PropTypes.object,
};

export default BaseStyles;
