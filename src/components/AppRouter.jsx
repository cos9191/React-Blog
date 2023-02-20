import React, {useContext} from 'react';
import styled from 'styled-components';
import {Navigate, Route, Routes} from "react-router-dom";
import {routes, publicRoutes} from "./router/routes";
import PageError from "./pages/PageError";
import {AuthContext} from "./context/context";
import Loader from "./UI/loader/Loader";

const StyledAppRouter = styled.div`

`;

const AppRouter = (props) => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if (isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ?
            <Routes>
                {routes.map(route =>
                    <Route
                        key={route.path}
                        element={route.element}
                        path={route.path}
                        exact={route.exact}
                    />
                )}

                <Route path='/' element={<Navigate to='/posts' />} />
                <Route path='*' element={<Navigate to='/error' />} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        key={route.path}
                        element={route.element}
                        path={route.path}
                        exact={route.exact}
                    />
                )}
                <Route path='*' element={<Navigate to='/login' />} />
            </Routes>
    )
};

export default AppRouter;
