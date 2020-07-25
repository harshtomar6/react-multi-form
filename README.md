# react-multi-form

> A React Component to quicky generate a multi-step form

[![NPM](https://img.shields.io/npm/v/react-multi-form.svg)](https://www.npmjs.com/package/react-multi-form) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components) 

## Demo
See Live Demo [here](https://harshtomar6.github.io/react-multi-form/)

![Demo Link](https://media.giphy.com/media/Q7v8WigTrzCmcUQvnA/giphy.gif)

### Add your Brand Colors
![Link](https://media.giphy.com/media/dAcoQshy4WBrlUz5CZ/giphy.gif)

## Install

```bash
npm install --save react-multi-form
```

## Usage

```jsx
import React, { Component } from 'react'

import { MultiStepForm, Step } from 'react-multi-form';

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

This package exports two components `<MultiStepForm />` and `<Step />`.

### `<MultiStepForm />`
### Props
|Prop Name|type| Description|default|required|
|---------|----|-------|-------|--------|
|activeStep|Int|determines the active step | - | YES|
|accentColor|String|accent color of the stepper|#24a19c|NO|

### `<Step />`
### Props
|Prop Name|type|Description|default|required|
|---------|----|------|-------|--------|
|label|String|label text to be rendered in the top stepper | - | NO|

See the example code [here](https://github.com/harshtomar6/react-multi-form/blob/master/example/src/App.js)

## License

MIT © [harshtomar6](https://github.com/harshtomar6)
