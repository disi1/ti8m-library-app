import { Link } from "react-router-dom";
import { Navbar, Button } from "react-bootstrap";
import { useState } from "react";
import AddBookModal from "./AddBookModal";

function Navigation(props) {
  const [addModalShow, setAddModalShow] = useState();

  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand as={Link} to="/">
        Bookshelf
      </Navbar.Brand>
      <Button variant="primary" onClick={() => setAddModalShow(true)}>
        + New Book
      </Button>

      <AddBookModal
        show={addModalShow}
        onHide={() => setAddModalShow(false)}
        onBookAdded={props.onBookAdded}
      />
    </Navbar>
  );
}

export default Navigation;
