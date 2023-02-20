import React from 'react';
import styled from 'styled-components';
import Input from "./UI/Input";
import Select from "./UI/Select";

const StyledPostFilter = styled.div`

`;

const PostFilter = ({filter, setFilter, ...props}) => {
    return (
        <StyledPostFilter {...props}>
            <Input
                value={filter.search}
                onChange={evt => setFilter({...filter, search: evt.target.value})}
                placeholder={'Поиск'}
            />
            <Select
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue={'Сортировка'}
                options={[
                    {value: 'title', name: 'По заголовку'},
                    {value: 'body', name: 'По описанию'},
                ]}
            />
        </StyledPostFilter>
    )
};

export default PostFilter;