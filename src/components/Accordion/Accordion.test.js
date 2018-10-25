import { Accordion } from './Accordion';

const customAccordion = document.getElementsByTagName('custom-accordion');

test('Accordion exists', () => {
  expect(Accordion).toBeDefined();
})

test('Accordion is an HTMLCollection', () => {
  expect(customAccordion).toBeInstanceOf(HTMLCollection);
})

test('Accordion returns proper HTML', () => {
  expect(typeof Accordion).toBe('function');
});

test('connectedCallback method is defined', () => {
  expect(Accordion.prototype.connectedCallback).toBeDefined();
});