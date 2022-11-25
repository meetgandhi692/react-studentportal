import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header({butt,onLogOut}) {
    console.log(butt)
  return (
    <Navbar className="header" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>Walchand College of Engineering</Navbar.Brand>
        <Button className={butt ? '' : 'logoutbutt'} variant="outline-danger" onClick={onLogOut}>Logout</Button>
      </Container>
    </Navbar>
  );
}

export default Header;
