import React from 'react';

import { Row, Col } from 'reactstrap';
import { FooterBox, FooterText } from '../assets/css/Footer'

const Footer = () => {
    const thisYear = () => {
        const year = new Date().getFullYear();

        return year;
    }

    return (
        <FooterBox id="main-footer">
            <Row>
                <Col>
                    <FooterText>Copyright &copy;<span>{thisYear()}</span></FooterText>
                </Col>
            </Row>
        </FooterBox>
    )
}

export default Footer;
