import { Section } from './Section';

const customSection = document.getElementsByTagName('custom-section');

test('Section exists', () => {
  expect(Section).toBeDefined();
})

test('Section is an HTMLCollection', () => {
  expect(customSection).toBeInstanceOf(HTMLCollection);
})

test('Section is a function', () => {
  expect(typeof Section).toBe('function');
});

test('AttributeChangedCallback method is defined', () => {
  expect(Section.prototype.attributeChangedCallback).toBeDefined();
});

test('ConnectedCallback method is defined', () => {
  expect(Section.prototype.connectedCallback).toBeDefined();
});