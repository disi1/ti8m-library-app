import { Modal, Button, Form } from "react-bootstrap";

import { useRef } from "react";

function AddEditModal(props) {
  const titleInputRef = useRef();
  const authorInputRef = useRef();
  const amountInputRef = useRef();
  const pagesInputRef = useRef();
  const isbnInputRef = useRef();

  function confirmAction() {
    const bookData = {
      id: props.id,
      title: titleInputRef.current.value,
      author: authorInputRef.current.value,
      isbn: isbnInputRef.current.value,
      pages: pagesInputRef.current.value,
      total_amount: amountInputRef.current.value,
    };
    props.onConfirm(true, bookData);
    props.onHide();
  }

  function cancelAction() {
    props.onConfirm(false);
    props.onHide();
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.addEditType === "Add" ? "Add" : "Edit"}
          {props.title ? ` ${props.title}` : ""}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formGroupTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="The name of the book"
              defaultValue={props.title}
              ref={titleInputRef}
            />
          </Form.Group>
          <Form.Group controlId="formGroupAuthor">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              placeholder="The name of the author"
              defaultValue={props.author}
              ref={authorInputRef}
            />
          </Form.Group>
          <Form.Group controlId="formGroupIsbn">
            <Form.Label>ISBN</Form.Label>
            <Form.Control
              type="text"
              placeholder="The International Standard Book Number"
              defaultValue={props.isbn}
              ref={isbnInputRef}
            />
          </Form.Group>
          <Form.Group controlId="formGroupPages">
            <Form.Label>Pages</Form.Label>
            <Form.Control
              type="number"
              placeholder="The number of pages"
              defaultValue={props.pages}
              ref={pagesInputRef}
            />
          </Form.Group>
          <Form.Group controlId="formGroupAmount">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="The number of books in stock"
              defaultValue={props.total_amount}
              ref={amountInputRef}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="link-secondary" onClick={cancelAction}>
          CANCEL
        </Button>
        <Button onClick={confirmAction}>{`${
          props.addEditType === "Add" ? "Add" : "Save changes"
        }`}</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddEditModal;
