import React, { Children, Fragment, cloneElement } from 'react'
import Pill from './Pill'
import Line from './Line';

function renderHiddenElement(Component) {
  return <Component {...Component.props} style={{ ...Component.props.style, display: 'none'}}/>
}

export default function MultiStepForm(props) {
  return (
    <div style={styles.container}>
      <div style={styles.stepperContainer}>

      {React.Children.map(props.children, (child, i) => {
        if (i === Children.count(props.children) - 1)
        return (
          <Fragment>
              <Pill active={props.activeStep === (i+1)} label={child.props.label}
                complete={props.activeStep > i+1}
                accentColor={props.accentColor}/>
            </Fragment>
          )
          
          return (
            <Fragment>
            <Pill active={props.activeStep === (i+1)} complete={(props.activeStep > 1) && ((i+1) < props.activeStep)}
              label={child.props.label} accentColor={props.accentColor}/>
            <Line complete={(props.activeStep > 1) && ((i+1) < props.activeStep)}
              accentColor={props.accentColor}/>
          
          </Fragment>
        )
      })}
      </div>
      {
        React.Children.map(props.children, (child, i) => {
          if((i+1) === props.activeStep)
            return child
          return cloneElement(child, { hidden: true })
        })
      }
    </div>
  )
}

const styles = {
  stepperContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 40
  }
}
