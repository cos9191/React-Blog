import React from 'react';
import styled from 'styled-components';
import Title from "../Title";

const StyledPageError = styled.div`

`;

const PageError = (props) => {
    return (
        <StyledPageError {...props}>
            <Title>
                Такой страницы не существует
            </Title>
        </StyledPageError>
    )
};
export default PageError;
