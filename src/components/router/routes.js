import PageAbout from "../pages/PageAbout";
import PagePosts from "../pages/PagePosts";
import PageIdPost from "../pages/PageIdPost";
import PageLogin from "../pages/PageLogin";
import PageError from "../pages/PageError";

export const routes = [
    {path: '/about', element: <PageAbout/>, exact: true},
    {path: '/posts', element: <PagePosts/>, exact: true},
    {path: '/posts/:id', element: <PageIdPost/>, exact: true},
    {path: '/error', element: <PageError/>, exact: true},
    {path: '/login', element: <PageLogin/>, exact: true},
]

export const publicRoutes = [
    {path: '/login', element: <PageLogin/>, exact: true},
]
