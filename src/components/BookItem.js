import { Card, Button } from "react-bootstrap";
import { useState } from "react";

import "./BookItem.css";
import EditBookModal from "./EditBookModal";
import ConfirmationModal from "./ConfirmationModal";

function BookItem(props) {
  const [editModalShow, setEditModalShow] = useState();
  const [confirmationModalShow, setConfirmationModalShow] = useState();

  return (
    <div className="text-center text-black book-card col-md-4">
      <Card bg="light">
        <Card.Header>
          <Card.Title>
            {props.data.title}
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Subtitle>{props.data.author}</Card.Subtitle>
          <hr />
          <Card.Text>
            <small className="text-muted">ISBN {props.data.isbn}</small>
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
            {props.data.pages} pages | {props.data.total_amount} items
          </small>
        </Card.Footer>
      </Card>

      <EditBookModal
        data={props.data}
        show={editModalShow}
        onHide={() => setEditModalShow(false)}
        onBookEdited={props.onBookEdited}
      />

      <ConfirmationModal
        title={props.data.title}
        id={props.data.id}
        confirmationType="Delete"
        show={confirmationModalShow}
        onHide={() => setConfirmationModalShow(false)}
        onBookDeleted={props.onBookDeleted}
      />
    </div>
  );
}

export default BookItem;
