import React from 'react';

import { HeaderBox, TextBox } from '../assets/css/Header';

const Header = () => {
    return (
        <HeaderBox id="page-header">
            <TextBox>
                <h1>Read Our Blog</h1>
                <p>블로그입니다.</p>
            </TextBox>
        </HeaderBox>
    )
}

export default Header;
