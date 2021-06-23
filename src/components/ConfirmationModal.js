import { Modal, Button } from "react-bootstrap";

function ConfirmationModal(props) {
  const confirmationMsg = `Are you sure you want to ${props.confirmationType.toLowerCase()} `;

  function confirmAction() {
    fetch(`https://5ffda94cd9ddad0017f68545.mockapi.io/books/${props.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status === 200) props.onBookDelete(true);
        props.onHide();
      })
      .catch((error) => console.log(error));
  }

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
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.confirmationType} Book
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {confirmationMsg}
          <b>"{props.title}"</b>?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="link-secondary" onClick={cancelAction}>
          CANCEL
        </Button>
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
