import React from 'react';
import { render } from 'enzyme';

import EthAddress from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';

const testAddress = '0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2';

describe('EthAddress component sanity', () => {
  it('has name', () => {
    expect(EthAddress.displayName).toBe('EthAddress');
  });

  it('matches default snapshot', () => {
    const component = render(<EthAddress address={testAddress} />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <EthAddress address={testAddress} />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });

  it('matches default snapshot textLabels', () => {
    const component = render(<EthAddress textLabels address={testAddress} />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot textLabels', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <EthAddress textLabels address={testAddress} />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});

describe('EthAddress component rendering', () => {
  const component = mount(
    <EthAddress address={'0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2'} />
  );
  it('renders input element', () => {
    expect(component.find('input').exists()).toBe(true);
  });
  it('renders two buttons', () => {
    expect(component.find('button')).toHaveLength(2);
  });
  it('renders address prop', () => {
    expect(component.find('input').prop('value')).toBe(
      '0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2'
    );
  });
});

describe('EthAddress component with text buttons', () => {
  const component = mount(
    <EthAddress
      address={'0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2'}
      textLabels
    />
  );

  it('has button with text Copy', () => {
    expect(
      component
        .find('button')
        .at(0)
        .text()
    ).toBe('Copy');
  });
  it('has button with text for QR', () => {
    expect(
      component
        .find('button')
        .at(1)
        .text()
    ).toBe('Show QR Code');
  });
});
