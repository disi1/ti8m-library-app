import BookForm from "./BookForm";
import { Modal } from "react-bootstrap";

/**
 * Holds the Modal with a Form to add a new book
 * On receiving back the necessary data, a POST request is launched
 * @param {Object} props
 * @returns {Modal}
 */
function AddBookModal(props) {
  /**
   * On receiving data back from Modal, launches a POST request
   * On success, executes callback function sent through props
   * @param {Object} data
   */
  function dataReceivedHandler(data) {
    fetch("https://5ffda94cd9ddad0017f68545.mockapi.io/books", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 201) {
          props.onBookAdded(true);
          props.onHide();
        }
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
      <Modal.Header style={{ backgroundColor: "#e8f5e9" }} closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <BookForm
          data={{}}
          modalType="Add"
          onDataReceived={dataReceivedHandler}
          onHide={() => props.onHide()}
        />
      </Modal.Body>
    </Modal>
  );
}

export default AddBookModal;
