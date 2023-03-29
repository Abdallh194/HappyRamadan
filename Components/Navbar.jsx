import Link from "next/link";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link href="/" className="logo">
          رمضان كريم
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 links"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link href="/">الرئيسية</Link>
            <a href="#About">عنا</a>
            <a href="#Times">مواعيد الصلاة</a>
            <a href="#Read"> قرائه القرآن</a>
            <a href="#Quesion">أسئله واختبارات</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
