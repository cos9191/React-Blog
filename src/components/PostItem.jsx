import React from 'react';
import styled from 'styled-components';
import PostContent from "./PostContent";
import Button from "./UI/Button";
import {useNavigate} from "react-router-dom";

const StyledPost = styled.div`
  display: flex;
  padding: 15px;
  border: 2px solid teal;
  border-radius: 15px;
  margin-top: 10px;
  justify-content: space-between;
  align-items: center;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const PostItem = (props) => {

    const navigate = useNavigate()

    return (
        <StyledPost >
            <PostContent {...props}/>
            <ButtonsWrapper>
                <Button onClick={() => navigate(`/posts/${props.post.id}`) }>
                    Открыть
                </Button>
                <Button onClick={() => props.remove(props.post)}>
                    Удалить
                </Button>
            </ButtonsWrapper>
        </StyledPost>
    )
};

export default PostItem;
