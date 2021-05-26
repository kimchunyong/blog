import React, {useCallback, useEffect, useState} from 'react';

import { Link } from 'react-router-dom'
import { NavItem, Navbar, Container, NavbarToggler, Collapse, Nav, Form, Button } from "reactstrap";
import LoginModal from "./auth/LoginModal";
import {useDispatch, useSelector} from "react-redux";
import {LOGOUT_REQUEST} from "../redux/types";
import RegisterModal from "./auth/RegisterModal";

const AppNavbar = () => {
    const [isOpen, setOpen] = useState(false);
    const { isAuthenticated, user, userRole } = useSelector((state) => state.auth);
    console.log(userRole, "userRole");

    const dispatch = useDispatch();

    const onLogout = useCallback(()=>{
        dispatch({
            type:LOGOUT_REQUEST,
        })
    },[dispatch])

    useEffect(()=>{
        setOpen(false);
    },[user]);

    const handleToggle = () => {
        setOpen(!isOpen);
    }

    const addPostClick = () => {

    }

    const authLink = (
        <>
            <NavItem>
                {userRole === 'MainJuin' && (
                    <Form className="col mt-2">기
                        <Link to="post" className="btn btn-success block text-white px-3" onClick={addPostClick}>
                            글쓰
                        </Link>
                    </Form>
                )}
            </NavItem>
            <NavItem className="d-flex justify-content-center">
                <Form className="col mt-2">
                    {user?.name ? (
                        <Link to="#">
                            <Button outline color="light" className="px-3" block>
                                <strong>{user && `Welcom${user?.name}`}</strong>
                            </Button>
                        </Link>
                    ) : (
                        <Button outline color="light" className="px-3" block>
                            <strong>No User</strong>
                        </Button>
                    )}
                </Form>
            </NavItem>
            <NavItem>
                <Form className="col">
                    <Link onClick={onLogout} to="#">
                        <Button outline color="light" className="mt-2" block>
                            Logout
                        </Button>
                    </Link>
                </Form>
            </NavItem>
        </>
    )

    const guestLink = (
        <>
            <NavItem>
                <RegisterModal/>
            </NavItem>
            <NavItem>
                <LoginModal/>
            </NavItem>
        </>
    )

    return (
        <>
            <Navbar color="dark" expand="lg" className="sticky-top">
                <Container>
                    <Link to="/" className="text-white text-decoration-none">
                        Side Project's Blog
                    </Link>
                    <NavbarToggler onClick={handleToggle}/>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto d-flex justify-content-around" navbar>
                            {isAuthenticated ? authLink : guestLink}
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default AppNavbar
