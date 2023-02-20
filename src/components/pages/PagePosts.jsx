import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import PostList from "../PostList";
import PostForm from "../PostForm";
import PostFilter from "../PostFilter";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import {usePosts} from "../hooks/usePosts";
import {GetData} from "../API";
import Loader from "../UI/loader/Loader";
import {useApi} from "../hooks/useApi";
import {getPagesCount} from '../utils/getPagesCount';
import Pagination from "../UI/Pagination";
import {useObserver} from "../hooks/UseObserver";
import Select from "../UI/Select";

const StyledPagePosts = styled.div`
  width: 800px;
`;

const PagePosts = (props) => {

    // Посты блога
    const [posts, setPosts] = useState([])

    // Фильтр постов
    const [filter, setFilter] = useState({sort: '', search: ''})

    // Видимость модального окна
    const [isVisible, setIsVisible] = useState(false);

    // Всего страниц пагинации
    const [totalPages, setTotalPages] = useState(0)

    // Число постов на страницу
    const [postsLimit, setPostsLimit] = useState(10)

    // Текущая страница
    const [currentPage, setCurrentPage] = useState(1)

    // Список отсортированных постов, удовлетворяющих поиску
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.search)

    const lastElement = useRef()

    // Загружаемые посты, загружены ли посты?, ошибка загрузки
    const [getPosts, isPostsLoading, postError] = useApi( async () => {
        const response = await GetData(postsLimit, currentPage)
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPagesCount(totalCount, postsLimit))
    })

    useObserver(lastElement, currentPage < totalPages, isPostsLoading, () => {
        setCurrentPage(currentPage + 1)
    })

    // Загружаем посты при загрузке страницы
    useEffect(() => {
        getPosts()
    }, [currentPage, postsLimit])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setIsVisible(false)
    }

    const removePost = (removedPost) => {
        setPosts(posts.filter(post => post.id !== removedPost.id))
    }

    const changePage = (currentPage) => {
        setCurrentPage(currentPage)
    }

    return (
        <StyledPagePosts {...props}>
            <Button onClick={() => setIsVisible(true)} >
                Написать публикицию
            </Button>
            <Modal
                style={{ display:isVisible ? 'flex' : 'none' }}
                isVisible={isVisible}
                setIsVisible={setIsVisible}
            >
                <PostForm create={createPost}/>
            </Modal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <Select
                value={postsLimit}
                onChange={value => setPostsLimit(value)}
                defaultValue='Количество публикаций на странице'
                options={[
                    {value: 10, name: '10'},
                    {value: 25, name: '25'},
                    {value: -1, name: 'Все'},
                ]}
            />
            {postError &&
                <h1 style={{ textAlign: 'center' }}  >Что-то пошло не так, попробуйте позже<br/> ${postError}</h1>
            }
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список публикаций Javascript'}/>
            <div ref={lastElement} style={{height: 20, background: 'transparent'}}/>
            {!postError.length && (
                isPostsLoading &&
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
            )}
            {/*<Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />*/}
        </StyledPagePosts>
    )
};

export default PagePosts;
