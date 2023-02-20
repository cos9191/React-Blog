import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import './App.css'
import {BrowserRouter, Navigate} from "react-router-dom";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
import AppRouter from "../AppRouter";
import {AuthContext} from "../context/context";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
`;

const PageWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const App = () => {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        setIsLoading(false)
    }, [] )

    return (
        <AppWrapper>
            <AuthContext.Provider value={{
                isAuth,
                setIsAuth,
                isLoading,
            }}>
                <BrowserRouter>
                    <Header/>
                    <PageWrapper>
                        <AppRouter/>
                    </PageWrapper>
                    <Footer/>
                </BrowserRouter>
            </AuthContext.Provider>
        </AppWrapper>
    )
}


export default App;
