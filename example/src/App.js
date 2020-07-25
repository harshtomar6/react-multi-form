import React from 'react'
import { MultiStepForm, Step } from 'react-multistep-form'
import Shipping from './components/Shipping'
import Payment from './components/Payment'
import Confirmation from './components/Confirmation'
import Button from './components/button'

const App = () => {
  const [active, setActive] = React.useState(1)
  return (
    <div style={{ maxWidth: 500, margin: '40px auto' }}>
      <MultiStepForm activeStep={active} accentColor='#30475e'>
        <Step label='shipping'>
          <Shipping />
        </Step>
        <Step label='payment'>
          <Payment />
        </Step>
        <Step label='confirmation'>
          <Confirmation />
        </Step>
      </MultiStepForm>

      {active !== 1 && (
        <Button onClick={() => setActive(active - 1)}>Previous</Button>
      )}
      {active !== 3 && (
        <Button
          onClick={() => setActive(active + 1)}
          style={{ float: 'right' }}
        >
          Next
        </Button>
      )}
    </div>
  )
}

export default App
