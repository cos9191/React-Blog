import React from 'react';
import styled from 'styled-components';
import Title from "../Title";

const StyledPageAbout = styled.div`

`;

const PageAbout = (props) => {
    return (
        <StyledPageAbout {...props}>
            <Title style={{ padding: 20 }} >
                Учебное приложение с использованием кастомных хуков, роутинга, styled-components, асинхронных функций, пагинации, анимаций
            </Title>
        </StyledPageAbout>
    )
};

export default PageAbout;
