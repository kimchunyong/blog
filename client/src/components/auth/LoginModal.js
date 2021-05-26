import React, { useEffect, useState } from 'react';
import {NavLink, Modal,ModalHeader, ModalBody, Button, Alert, FormGroup, Form, Label, Input} from 'reactstrap';
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_ERROR_REQUEST, LOGIN_REQUEST } from "../../redux/types";

const LoginModal = () => {
    const [modal,setModal] = useState(false);
    const [localMsg,setLocalMsg] = useState('');
    const [form, setValuses] = useState({
        email:"",
        password:"",
    })

    const dispatch = useDispatch();
    const { errorMsg } = useSelector((state => state.auth));

    useEffect(()=>{
        try{
            setLocalMsg(errorMsg);
        }catch (e){
            console.log(e);
        }
    },[errorMsg]);

    const handleToggle = () => {
        dispatch({
            type: CLEAR_ERROR_REQUEST
        })

        setModal(!modal)
    };

    const onChange = (e) => {
        setValuses({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const { email, password } = form;
        const user = { email, password };
        dispatch({
            type: LOGIN_REQUEST,
            payload: user
        });
    }

    return (
        <div>
            <NavLink onClick={handleToggle} href="#">
                Login
            </NavLink>
            <Modal isOpen={modal} toggle={handleToggle}>
                <ModalHeader toggle={handleToggle}>
                    Login
                </ModalHeader>
                <ModalBody>
                    {localMsg && <Alert color='danger'>{localMsg}</Alert>}
                    <Form onSubmit={onSubmit}>
                        <FormGroup>
                            <Label fro="email">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                placeholder='Email'
                                onChange={onChange}
                            />
                            <Label fro="email">password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                placeholder='Password'
                                onChange={onChange}
                            />
                            <Button
                                color="dark"
                                style={{ width:'100%', marginTop: "2rem"
                            }}>
                                로그인
                            </Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default LoginModal;
