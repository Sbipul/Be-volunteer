import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../utilities/Group 1329.jpg'
const Header = () => {
    const {user,logOut} = useAuth()
    const mail = 'kumarroy.kb.kb@gmail.com'
    return (
        <div>
            <Navbar className="shadow-lg mb-5" expand="lg">
                <Container>
                    <Navbar.Brand href="#">
                    <img
                    src={logo}
                    width="150"
                    height="50"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} className="mx-4 text-dark" to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} className="mx-4 text-dark" to="/myEvnt">My Event</Nav.Link>
                        <Nav.Link as={Link} className="mx-4 text-dark" to="/addEvnt">Create new Event</Nav.Link>
                        {
                            user?.email ? <Button onClick={logOut}>Log Out</Button> : <Link to="/sign"><Button>Login</Button></Link>
                        }
                        {
                            (mail === user?.email ? <Nav.Link as={Link} className="mx-4 text-dark" to="/admin">Admin</Nav.Link> : <Nav.Link className="mx-4 text-dark" >{user.displayName || 'User'}</Nav.Link>)
                        }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;