import React from 'react';
import styled from 'styled-components';
import Title from "./Title";
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const StyledPostList = styled.div`

`;

const PostList = ({posts, title, remove}) => {
    if (posts===undefined) {
        return
    }

    if(!posts.length) {
        return (
            <Title style={{textAlign: 'center'}}>
                Публикации не найдены
            </Title>
        )
    }

    return (
        <StyledPostList>
            <Title marginBottom={10} style={{textAlign: 'center'}}>
                {title}
            </Title>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={300}
                        classNames={'post'}
                    >
                        <PostItem remove={remove} number={index + 1} post={post} key={post.id}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </StyledPostList>
    )
};

export default PostList;
