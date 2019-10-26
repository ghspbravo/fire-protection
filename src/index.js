import { fixPageLinks } from "./js/devscripts/fixLink"
import './css/custom.css';

const isDevelop = (process.env || {}).NODE_ENV === 'development';

document.addEventListener("DOMContentLoaded", function () {

  if (isDevelop) {
    console.log('%c%s', 'color: lightblue; font-size: 1.2rem', 'Dev scripts loaded');

    fixPageLinks();
  }
})