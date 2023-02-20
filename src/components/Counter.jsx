import React, {useState} from 'react';
import styled from 'styled-components';
import Title from "./Title";

const StyledCounter = styled.div`

`;

const Counter = (props) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <StyledCounter {...props}>
            <Title>{count}</Title>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </StyledCounter>
    )
};

export default Counter;