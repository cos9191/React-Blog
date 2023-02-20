import React, {useContext} from 'react';
import styled from 'styled-components';
import NavLinks from "./NavLinks";
import Button from "./Button";
import {AuthContext} from "../context/context";

const StyledHeader = styled.header`
  min-height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 15px;
  background-color: lightgray;
  position: sticky;
  top: 0;
`;

const Header = (props) => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logOut = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <StyledHeader {...props}>
            <NavLinks/>
            <Button onClick={logOut}>
                Выйти
            </Button>
        </StyledHeader>
    )
};

export default Header;
