import { Card, Button } from "react-bootstrap";
import { useState } from "react";

import "./BookItem.css";
import AddEditModal from "./AddEditModal";

function BookItem(props) {
  const [editModalShow, setEditModalShow] = useState(false);
  const [confirmationModalShow, setConfirmationModalShow] = useState(false);

  function editConfirmHandler(editConfirmed, bookData) {
    if (editConfirmed) {
      fetch(
        `https://5ffda94cd9ddad0017f68545.mockapi.io/books/${bookData.id}`,
        {
          method: "PUT",
          body: JSON.stringify(bookData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then(() => {
          props.onDataChanged(true);
        })
        .catch((e) => console.log(e));
    } else {
      props.onDataChanged(false);
    }
  }

  return (
    <div className="text-center text-black book-card col-md-4 d-flex">
      <Card bg="light">
        <Card.Header>
          <Card.Title>{props.title}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Subtitle>{props.author}</Card.Subtitle>
          <hr />
          <Card.Text>
            <small className="text-muted">ISBN {props.isbn}</small>
          </Card.Text>
        </Card.Body>
        <Card.Body className="actions">
          <Button
            variant="outline-secondary"
            onClick={() => setEditModalShow(true)}
          >
            Edit
          </Button>
          <Button
            variant="outline-danger"
            onClick={() => setConfirmationModalShow(true)}
          >
            Delete
          </Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            {props.pages} pages | {props.total_amount} items
          </small>
        </Card.Footer>
      </Card>

      <AddEditModal
        show={editModalShow}
        onHide={() => setEditModalShow(false)}
        onConfirm={editConfirmHandler}
        addEditType="Edit"
        id={props.id}
        title={props.title}
        author={props.author}
        isbn={props.isbn}
        pages={props.pages}
        total_amount={props.total_amount}
      />
    </div>
  );
}

export default BookItem;
