import MetaMaskButton from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';
describe('MetaMaskButton component sanity', function () {
  it('has name', function () {
    expect(MetaMaskButton.displayName).toBe('MetaMaskButton');
  });
  it('matches default snapshot', function () {
    var component = shallow( /*#__PURE__*/React.createElement(MetaMaskButton, null));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = shallow( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(MetaMaskButton, null)));
    expect(component).toMatchSnapshot();
  });
});