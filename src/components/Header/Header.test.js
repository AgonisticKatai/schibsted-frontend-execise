import { Header } from './Header';

const customHeader = document.getElementsByTagName('custom-header');

test('Header exists', () => {
  expect(Header).toBeDefined();
})

test('Header is an HTMLCollection', () => {
  expect(customHeader).toBeInstanceOf(HTMLCollection);
})

test('Header returns proper HTML', () => {
  expect(typeof Header).toBe('function');
});

test('connectedCallback method is defined', () => {
  expect(Header.prototype.connectedCallback).toBeDefined();
});

test('connectedCallback method is defined', () => {
  expect(Header.prototype.connectedCallback).toBeDefined();
});