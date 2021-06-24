import { Form, Button } from "react-bootstrap";
import { useRef } from "react";
import "./BookForm.css";

function BookForm(props) {
  const titleInputRef = useRef();
  const authorInputRef = useRef();
  const amountInputRef = useRef();
  const pagesInputRef = useRef();
  const isbnInputRef = useRef();

  function handleSubmit(event) {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      event.stopPropagation();
      confirmAction();
    }
  }

  function confirmAction() {
    const bookData = {
      id: props.data.id,
      title: titleInputRef.current.value,
      author: authorInputRef.current.value,
      isbn: isbnInputRef.current.value,
      pages: pagesInputRef.current.value,
      total_amount: amountInputRef.current.value,
    };

    props.onDataReceived(bookData);
  }

  function cancelAction() {
    props.onHide();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formGroupTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Enter the book title"
          defaultValue={props.data.title}
          ref={titleInputRef}
        />
      </Form.Group>
      <Form.Group controlId="formGroupAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Enter the author's name"
          defaultValue={props.data.author}
          ref={authorInputRef}
        />
      </Form.Group>
      <Form.Group controlId="formGroupIsbn">
        <Form.Label>ISBN</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter the International Standard Book Number"
          defaultValue={props.data.isbn}
          ref={isbnInputRef}
        />
      </Form.Group>
      <Form.Group controlId="formGroupPages">
        <Form.Label>Pages</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter the number of pages"
          defaultValue={props.data.pages}
          ref={pagesInputRef}
        />
      </Form.Group>
      <Form.Group controlId="formGroupAmount">
        <Form.Label>Amount</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter the number of books in stock"
          defaultValue={props.data.total_amount}
          ref={amountInputRef}
        />
      </Form.Group>
      <Button type="submit">{`${
        props.modalType === "Add" ? "Add book" : "Save changes"
      }`}</Button>
      <Button variant="link-secondary" onClick={cancelAction}>
        CANCEL
      </Button>
    </Form>
  );
}

export default BookForm;
