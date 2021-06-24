import BookForm from "./BookForm";
import { Modal } from "react-bootstrap";

function EditBookModal(props) {
  function dataReceivedHandler(data) {
    fetch(`https://5ffda94cd9ddad0017f68545.mockapi.io/books/${data.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => {
        props.onBookEdited(true);
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
        <Modal.Title id="contained-modal-title-vcenter">{`Edit "${props.title}"`}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <BookForm
          modalType="Edit"
          onDataReceived={dataReceivedHandler}
          onHide={() => props.onHide()}
          data={props.data}
        />
      </Modal.Body>
    </Modal>
  );
}

export default EditBookModal;
