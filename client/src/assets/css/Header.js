import styled from 'styled-components';

import { textColor } from './color'
import headerBg from '../img/header-bg.jpg'

export const HeaderBox = styled.header`
    display:flex;
    height: 220px;
    background: url('${headerBg}') 50% 170% no-repeat;
    background-size: cover;
    background-attachment: fixed;
`;

export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1 0 50%;
    margin: 0 auto;
    color: ${textColor.white};
`;
