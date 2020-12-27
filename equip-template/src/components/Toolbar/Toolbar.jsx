import React from 'react'
import { Navbar, Form, Nav, Button, InputGroup, FormControl } from 'react-bootstrap'
import { FaUserAlt, FaUsers } from 'react-icons/fa'
import { HiClipboard } from 'react-icons/hi'
import { GiProgression, GiBookPile } from 'react-icons/gi'
import { AiOutlineSearch, AiFillSetting, AiOutlineFile, AiOutlineUser } from 'react-icons/ai'
import { IoIosArrowDown, IoIosNotificationsOutline } from 'react-icons/io';
import '../Toolbar/Toolbar.css'

const Toolbar = () => {
    return (
        <>
            <Navbar expand="lg">
                <Navbar.Brand>
                    <InputGroup className="mb-3" className="textBorder">
                        <InputGroup.Prepend className="textBorder">
                            <InputGroup.Text id="basic-addon1" className="textBorder">
                                <AiOutlineSearch />
                                <IoIosArrowDown />
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl className="textBorder1"
                            placeholder="Firstname / Lastname"
                            aria-label="Firstname / Lastname"
                            aria-describedby="basic-addon1"
                        /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button variant="btn btn-primary" className="mr-sm-2" style={{ background: '#6c9fd5' }}>
                            <span className="imgIcon"><FaUserAlt /></span>Patient
                        </Button>
                    </InputGroup>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Form inline>
                        <Button className="mr-sm-2" id="circle-users">
                            <FaUsers /></Button> <p className="hdpText">HDP GROUP</p>
                        <Button className="mr-sm-2" id="circle-icon">
                            <IoIosNotificationsOutline /></Button>
                        <Button className="mr-sm-2" id="circle-icon">
                            <AiFillSetting /></Button>
                        <Button className="mr-sm-2" id="circle-icon">
                            <AiOutlineFile /></Button> </Form>
                    <Button className="mr-sm-2" id="circle-icon">
                        <AiOutlineUser />
                        <IoIosArrowDown />
                    </Button>
                </Navbar.Collapse>
            </Navbar>
            <hr />
            <Navbar expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Form inline>
                        <Button variant="btn btn-primary" className="mr-sm-2" style={{ background: '#6c9fd5' }}><HiClipboard />Summary</Button>
                        <Button variant="btn btn-primary" className="mr-sm-2" style={{ background: '#6c9fd5' }}><GiProgression />Program</Button>
                        <Button variant="btn btn-primary" className="mr-sm-2" style={{ background: '#6c9fd5' }}><GiProgression />Risk</Button>
                        <Button variant="btn btn-primary" className="mr-sm-2" style={{ background: '#6c9fd5' }}><GiBookPile />KPI</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Toolbar