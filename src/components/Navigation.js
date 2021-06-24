import { Link } from "react-router-dom";
import { Navbar, Button, Nav, Form, FormControl } from "react-bootstrap";
import { useState } from "react";
import AddBookModal from "./AddBookModal";

/**
 * Holds the name of the app, the filter bar and the button for the main action (adding a new Book) which launches the AddBookModal
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
      expand="lg"
    >
      <Navbar.Brand as={Link} to="/">
        Bookshelf
      </Navbar.Brand>
      <Form className="ml-auto" style={{ width: "30%" }}>
        <FormControl
          type="text"
          placeholder="Filter by title or author"
          className="mr-sm-2"
          onChange={(event) => props.onFilter(event.target.value)}
        />
      </Form>
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
