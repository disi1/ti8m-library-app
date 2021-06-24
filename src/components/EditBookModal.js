import BookForm from "./BookForm";
import { Modal } from "react-bootstrap";

/**
 * Holds the Modal with a Form which receives through props the details of the book to edit
 * On receiving back the necessary data, a PUT request is launched
 * @param {Object} props
 * @returns {Modal}
 */
function EditBookModal(props) {
  /**
   * On receiving data back from Modal, launches a PUT request
   * On success, executes callback function sent through props
   * that the data should be refetched
   * @param {Object} data
   */
  function dataReceivedHandler(data) {
    fetch(`https://5ffda94cd9ddad0017f68545.mockapi.io/books/${data.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          props.onBookEdited(true);
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
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit
          <cite title="Source Title"> {props.data.title}</cite>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <BookForm
          data={props.data}
          modalType="Edit"
          onDataReceived={dataReceivedHandler}
          onHide={() => props.onHide()}
        />
      </Modal.Body>
    </Modal>
  );
}

export default EditBookModal;
