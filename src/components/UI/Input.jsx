import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  padding: 5px 15px;
  margin: 5px 0;
  border: 1px solid teal;
  border-radius: 10px;
`;

const Input = (props) => {
    return (
        <StyledInput {...props}>
        </StyledInput>
    )
};

export default Input;
