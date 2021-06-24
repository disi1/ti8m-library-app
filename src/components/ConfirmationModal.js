import { Modal, Button } from "react-bootstrap";

/**
 * Holds the Modal which asks for the user's confirmation to do the corresponding action (e.g. delete)
 * @param {Object} props
 * @returns {Modal}
 */
function ConfirmationModal(props) {
  const confirmationMsg = `Are you sure you want to ${props.confirmationType.toLowerCase()} `;

  /**
   * On confirmation received, launches a DELETE request and, on success, sends back a signal through props
   */
  function confirmAction() {
    fetch(`https://5ffda94cd9ddad0017f68545.mockapi.io/books/${props.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status === 200) props.onBookDeleted(true);
        props.onHide();
      })
      .catch((error) => console.log(error));
  }

  /**
   * On confirmation denied, the modal is hidden and no other action is taken
   */
  function cancelAction() {
    props.onHide();
  }

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{ backgroundColor: "#e8f5e9" }}>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.confirmationType} Book
        </Modal.Title>
      </Modal.Header>
      {/* Generating the modal body depending on the confirmationMsg and the title */}
      <Modal.Body>
        <p>
          {confirmationMsg}
          {/* <b>"{props.title}"</b>? */}
          <cite title={props.title}>{props.title}</cite> ?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="link-secondary" onClick={cancelAction}>
          CANCEL
        </Button>
        {/* Generating Button and Button text depending on confimationType */}
        <Button
          variant={props.confirmationType === "Delete" ? "danger" : "primary"}
          onClick={confirmAction}
        >
          {props.confirmationType}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmationModal;
