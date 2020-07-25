import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  padding: 10px 20px;
  border: 1px solid #ddd;
  border-radius: 8px; 
  font-size: 0.95rem;
  outline: none;
  margin-top: 0.2rem;
  margin-bottom: 1rem;
  box-sizing: border-box;

  &:focus {
    border: 1.5px solid #24a19c;
  }
`

const StyledLabel = styled.label`
  font-size: 0.9rem;
`

export default function Input(props) {

  return (
    <div>
      <StyledLabel>{props.label}</StyledLabel>
      <StyledInput {...props}/>
    </div>
  )
}