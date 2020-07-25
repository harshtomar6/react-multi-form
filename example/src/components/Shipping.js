import React from 'react';
import Input from './input';

export default function Shipping() {

  return (
    <div>
      <h3 style={{textAlign: 'center'}}>Shipping Information</h3>
      <Input type="text" placeholder="Enter your full name" label="Full Name" />
      
      <Input type="email" placeholder="Enter your e-mail" label="Email Address"/>

      <Input type="text" placeholder="Enter your address" label="Address"/>

      <div>
      <Input type="text" placeholder="Enter your city" label="City"/>
      <Input type="text" placeholder="Enter your country" label="Country"/>
      </div>
    </div>
  )
}