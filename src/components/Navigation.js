import { Link } from "react-router-dom";
import { Navbar, Button, Nav } from "react-bootstrap";
import { useState } from "react";
import AddBookModal from "./AddBookModal";

/**
 * Holds the name of the app, the button for the main action (adding a new Book) which launches the AddBookModal
 * @param {Object} props
 * @returns {Navbar}
 */
function Navigation(props) {
  const [addModalShow, setAddModalShow] = useState();

  return (
    <Navbar
      variant="light"
      sticky="top"
      style={{ backgroundColor: "#e8f5e9" }}
    >
      <Navbar.Brand as={Link} to="/">
        Bookshelf
      </Navbar.Brand>
      <Nav.Item className="ml-auto">
        <Button variant="dark" onClick={() => setAddModalShow(true)}>
          + New Book
        </Button>
      </Nav.Item>

      <AddBookModal
        show={addModalShow}
        onHide={() => setAddModalShow(false)}
        onBookAdded={props.onBookAdded}
      />
    </Navbar>
  );
}

export default Navigation;
