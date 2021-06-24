import BookForm from "./BookForm";
import { Modal } from "react-bootstrap";

function AddBookModal(props) {
  function dataReceivedHandler(data) {
    fetch("https://5ffda94cd9ddad0017f68545.mockapi.io/books", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => {
        props.onBookAdded(true);
        props.onHide();
      })
      .catch((e) => console.log(e));
  }

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <BookForm
          modalType="Add"
          onDataReceived={dataReceivedHandler}
          onHide={() => props.onHide()}
          data={{}}
        />
      </Modal.Body>
    </Modal>
  );
}

export default AddBookModal;
