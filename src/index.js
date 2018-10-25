import './scss/main.scss';
import './components/Header/Header';
import './components/Accordion/Accordion';
import './components/Section/Section';

import { Header } from './components/Header/Header';
import { Accordion } from './components/Accordion/Accordion';
import { Section } from './components/Section/Section';

window.customElements.define('custom-header', Header);
window.customElements.define('custom-accordion', Accordion);
window.customElements.define('custom-section', Section);