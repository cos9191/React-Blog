import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const StyledNavLinks = styled.div`
  margin-right: auto;
  display: flex;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-weight: bold;
`;

const NavLinks = (props) => {
    return (
        <StyledNavLinks {...props}>
            <StyledLink to='/posts'>Публикации</StyledLink>
            <StyledLink to='/about'>О сайте</StyledLink>
        </StyledNavLinks>
    )
};

export default NavLinks;
