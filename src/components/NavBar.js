import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';



function NavBar(){
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                    src="../logo.png"
                    width="140"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;