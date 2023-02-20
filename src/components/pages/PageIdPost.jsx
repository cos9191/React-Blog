import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useParams} from "react-router-dom";
import {useApi} from "../hooks/useApi";
import {GetById, GetCommentsByPostId} from "../API";
import Title from "../Title";
import Loader from "../UI/loader/Loader";

const StyledPageIdPost = styled.div`

`;

const PageIdPost = (props) => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [getPostById, isPostsLoading, Error] = useApi( async () => {
        const response = await GetById(params.id)
        setPost(response.data)
    })
    const [getComments, isCommentsLoading, commentsError] = useApi( async () => {
        const response = await GetCommentsByPostId(params.id)
        setComments(response.data)
    })

    useEffect(() => {
        getPostById(params.id)
        getComments(params.id)
    }, [])

    return (
        <StyledPageIdPost {...props}>
            <Title>Вы открыли пост №{params.id} </Title>
            {Error &&
                <h1 style={{ textAlign: 'center' }}  >Что-то пошло не так, попробуйте позже<br/> ${Error}</h1>
            }
            {!Error.length && (
                isPostsLoading
                    ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
                    : <div>{post.id}. {post.title}</div>
            )}
            <Title style={{ marginTop: 15 }} >Комментарии</Title>
            {!commentsError.length && (
                isCommentsLoading
                    ?
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
                    :
                    <div>
                        {comments.map(comment =>
                            <div key={comment.id} style={{ marginTop: 10 }} >
                                <span>{comment.email}</span>
                                <div>{comment.body}</div>
                            </div>
                        )}
                    </div>
            )}
        </StyledPageIdPost>
    )
};

export default PageIdPost;
