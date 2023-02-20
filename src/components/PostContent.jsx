import React from 'react';
import styled from 'styled-components';
import Title from "./Title";

const StyledPostContent = styled.div`

`;

const PostContent = (props) => {
    return (
        <StyledPostContent {...props}>
            <Title>{props.post.id}. {props.post.title}</Title>
            <div>{props.post.body}</div>
        </StyledPostContent>
)
};

export default PostContent;
