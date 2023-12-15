import Image from "next/image";
import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Container>
        <Navbar>
          <Link href="/">
            <Image
              src={require("@assets/images/logo.png")}
              alt="legend logo"
              width={170}
              height={70}
            />
          </Link>
          <Nav className="ms-auto">
            <Nav.Link className="sign-in">Sign In</Nav.Link>
            <Nav.Link className="sign-up">Sign Up</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
