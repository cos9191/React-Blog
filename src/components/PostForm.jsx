import React, {useState} from 'react';
import styled from 'styled-components';
import Input from "./UI/Input";
import Button from "./UI/Button";

const StyledPostForm = styled.form`
`;

const PostForm = (props) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (evt) => {
        evt.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        props.create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <StyledPostForm {...props}>
                <Input
                    value={post.title}
                    onChange={evt => setPost({...post, title: evt.target.value})}
                    type={'text'}
                    placeholder={'Название публикации'}
                />
                <Input
                    value={post.body}
                    onChange={evt => setPost({...post, body: evt.target.value})}
                    type={'text'}
                    placeholder={'Описание публикации'}
                />
                <Button onClick={addNewPost}>Опубликовать</Button>
        </StyledPostForm>
    )
};

export default PostForm;