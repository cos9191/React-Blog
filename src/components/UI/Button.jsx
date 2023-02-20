import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 5px 15px;
  color: teal;
  font-size: 14px;
  background: transparent;
  border: 1px solid teal;
  cursor: pointer;
  border-radius: 10px;
`;

const Button = (props) => {
    return (
        <StyledButton {...props}>
        </StyledButton>
    )
};

export default Button;
