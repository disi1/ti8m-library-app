import { Spinner, CardDeck } from "react-bootstrap";
import BookItem from "./BookItem";
import { useEffect, useState } from "react";

import "./BookList.css";

function BookList(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedBooks, setLoadedBooks] = useState([]);
  const [editBookDataChanged, setEditBookDataChanged] = useState(false);
  const [deleteBookDataChanged, setDeleteBookDataChanged] = useState(false);

  function getBooks() {
    fetch("https://5ffda94cd9ddad0017f68545.mockapi.io/books")
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setLoadedBooks(data);
      })
      .then((e) => console.log(e));
  }

  useEffect(() => {
    setIsLoading(true);
    getBooks();
    const interval = setInterval(() => {
      getBooks();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (props.bookAdded) {
      getBooks();
      props.onBookAdd(false);
    }
    if (editBookDataChanged) {
      getBooks();
      setEditBookDataChanged(false);
    }
    if (deleteBookDataChanged) {
      getBooks();
      setDeleteBookDataChanged(false);
    }
  }, [editBookDataChanged, deleteBookDataChanged, props]);

  function editBookHandler(dataHasChanged) {
    setEditBookDataChanged(dataHasChanged);
  }

  function deleteBookHandler(dataHasChanged) {
    setDeleteBookDataChanged(dataHasChanged);
  }

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }

  return (
    <CardDeck className="book-container justify-content-center">
      {loadedBooks.map((book) => (
        <BookItem
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          isbn={book.isbn}
          pages={book.pages}
          total_amount={book.total_amount}
          onBookEdit={editBookHandler}
          onBookDelete={deleteBookHandler}
        />
      ))}
    </CardDeck>
  );
}

export default BookList;
