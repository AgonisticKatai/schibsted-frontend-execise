# Schibsted Frontend Exercise ![CI status](https://img.shields.io/badge/build-passing-brightgreen.svg)

Technical exercise of the company Schibsted Spain, which proposes the creation of an accordion using Vanilla Javascript, Sass, ES6 and as an extra bonus, calls to an external API to generate the different sections of the accordion.

It is not allowed to use any Javascript framework.

Analyzing the proposal, I opted for the use of Custom Elements for the creation of the different elements of the DOM, since they offered me the possibility of composing the application in an efficient and reusable way.


## Installation

### See project in local environment
* Clone this repo
* Install the dependencies

`npm install`
or
`yarn install`

## Launch
```
[ npm start ] or [ yarn start ]
```
[View this project online!](https://AgonisticKatai.github.io/schibsted-frontend-execise/dist/)
##### Local server is launched at [http://localhost:8080](http://localhost:8080)

### Run tests
* `npm run test`
or
* `yarn test`


## Description
With the next markup, you must create an accordion (JS / CSS) show only the contents of a section at a time. Sure to follow the SUIT convention when working with CSS.
```
<dl>
  <dt>Section 1</dt>
  <dd>
    <p>Section 1 Content...</p>
  </dd>
  <dt>Section 2</dt>
  <dd>
    <p>Section 2 Content...</p>
  </dd>
  <dt>Section 3</dt>
  <dd>
    <p>Section 3 Content...</p>
  </dd>
</dl>
```

## Conditions
* Use Sass for generate CSS
* Use ES6
* Use only Vanilla JS, without any JS framework
* Generate gh-page for publish

## Bonus
* Add new section with Ajax content

## Author
[Nacho Torrella Fernández](https://www.linkedin.com/in/nacho-torrella)