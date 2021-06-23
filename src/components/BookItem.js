import { Card, Button } from "react-bootstrap";
import { useState } from "react";

import "./BookItem.css";

function BookItem(props) {
  const [editModalShow, setEditModalShow] = useState(false);
  const [confirmationModalShow, setConfirmationModalShow] = useState(false);

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
    </div>
  );
}

export default BookItem;
