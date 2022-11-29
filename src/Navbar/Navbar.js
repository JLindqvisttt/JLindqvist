import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../App.css"

function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" style={{background: '#131316'}} variant="dark">

            <Container>
                <Navbar.Brand href="/"> <img src={require('../images/transparant.png')} alt='logo' width="50vh"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" defaultActiveKey="/home" as="ul">
                        <Nav.Link className="nav-links" href="#aboutme">About me</Nav.Link>
                        <Nav.Link className="nav-links" href="/Resume">Cv</Nav.Link>
                    </Nav>
                    <Nav defaultActiveKey="/home" as="ul">
                        <Nav.Link className="nav-links" href="#contactme"> Contact me </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;