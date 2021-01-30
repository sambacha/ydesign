/* eslint-env browser */
import { fontUrl } from '../components/shared/global'; // Load the font and avoid re-loading it when components change

var fontLinkId = 'storybook-font-link-tag';
export var loadFontsForStorybook = function loadFontsForStorybook() {
  if (!document.getElementById(fontLinkId)) {
    var fontLink = document.createElement('link');
    fontLink.id = fontLinkId;
    fontLink.href = fontUrl;
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);
  }
};