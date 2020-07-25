import React from 'react'
import styled from 'styled-components';
import { MultiStepForm, Step } from 'react-multi-form'
import Shipping from './components/Shipping'
import Payment from './components/Payment'
import Confirmation from './components/Confirmation'
import Button from './components/button'

const Container = styled.div`
  max-width: 500px;
  margin: 40px auto;

  @media(max-width: 590px) {
    width: 300px;
  }
`

const App = () => {
  const [active, setActive] = React.useState(1)
  return (
    <Container>
      <MultiStepForm activeStep={active}>
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
    </Container>
  )
}

export default App
