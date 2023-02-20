import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`

`;

const Select = ({options, defaultValue, value, onChange, ...props}) => {
    return (
        <StyledSelect
            {...props}
            value={value}
            onChange={evt => onChange(evt.target.value)}
        >
            <option disabled value=''>{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </StyledSelect>
    )
};

export default Select;