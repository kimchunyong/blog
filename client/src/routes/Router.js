import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import AppNavbar from '../components/AppNav';

const MyRouter = () => {
    return (
        <>
            <AppNavbar/>
            <Header/>
            <h1>Hello Body</h1>
            <Footer/>
        </>
    )
}

export default MyRouter;
