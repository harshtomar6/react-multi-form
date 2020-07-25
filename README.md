# react-multistep-form

> A React Component to quicky generate a multi-step form

[![NPM](https://img.shields.io/npm/v/react-multistep-form.svg)](https://www.npmjs.com/package/react-multistep-form) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components) 

## Demo
![Demo Link](https://media.giphy.com/media/Q7v8WigTrzCmcUQvnA/giphy.gif)

## Install

```bash
npm install --save react-multistep-form
```

## Usage

```jsx
import React, { Component } from 'react'

import { MultiStepForm, Step } from 'react-multistep-form';

class Example extends Component {
  render() {
    return (
      <MutliStep activeStep={1}>
        <Step label="one">
          <p>One</p>
        </Step>
        <Step label="Two">
          <p>Two</p>
        </Step>
        <Step label="Three">
          <p>Three</p>
        </Step>
      </MultiStep>
    )
  }
}
```

## Documentation

## License

MIT © [harshtomar6](https://github.com/harshtomar6)
