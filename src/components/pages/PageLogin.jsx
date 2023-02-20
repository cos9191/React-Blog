import React, {useContext} from 'react';
import styled from 'styled-components';
import Title from "../Title";
import Input from "../UI/Input";
import Button from "../UI/Button";
import {AuthContext} from "../context/context";
import {useNavigate} from "react-router-dom";

const StyledPageLogin = styled.div`

`;

const PageLogin = (props) => {

    const {isAuth, setIsAuth} = useContext(AuthContext)

    const navigate = useNavigate()

    const login = evt => {
        evt.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
        navigate('/posts')
    }

    return (
        <StyledPageLogin {...props}>
            <Title>Страница авторизации</Title>
            <form onSubmit={login} >
                <Input type='text' placeholder='Введите логин' />
                <Input type='password' placeholder='Введите пароль' />
                <Button>Войти</Button>
            </form>
        </StyledPageLogin>
    )
};

export default PageLogin;
