import React from 'react';
import styled from 'styled-components';
import NavLinks from "./NavLinks";

const StyledHeader = styled.footer`
  min-height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 15px;
  background-color: lightgray;
  position: sticky;
  bottom: 0;
`;

const Footer = (props) => {
    return (
        <StyledHeader {...props}>
            <NavLinks/>
        </StyledHeader>
    )
};

export default Footer;
