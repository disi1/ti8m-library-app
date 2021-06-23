import { Link } from "react-router-dom";
import { Navbar, Button } from "react-bootstrap";
import { useState } from "react";
import AddEditModal from "./AddEditModal";

function Navigation(props) {
  const [addEditModalShow, setAddEditModalShow] = useState(false);

  function addBookHandler(dataChanged) {
      props.onBookAdd(dataChanged);
  }

  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand as={Link} to="/">
        Bookshelf
      </Navbar.Brand>
      <Button variant="primary" onClick={() => setAddEditModalShow(true)}>
        + New Book
      </Button>

      <AddEditModal
        show={addEditModalShow}
        onHide={() => setAddEditModalShow(false)}
        addEditModalType="Add"
        onBookAdd={addBookHandler}
      />
    </Navbar>
  );
}

export default Navigation;
