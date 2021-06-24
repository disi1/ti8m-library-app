import { Spinner, CardDeck } from "react-bootstrap";
import BookItem from "./BookItem";
import { useEffect, useState } from "react";

import "./BookList.css";

function BookList(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedBooks, setLoadedBooks] = useState([]);
  const [listRefetch, setlistRefetch] = useState();

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
      props.onListRefetch(false);
    }

    if (listRefetch) {
      getBooks();
      setlistRefetch(false);
    }
  }, [listRefetch, props]);

  function refetchListHandler(shouldRefetchList) {
    setlistRefetch(shouldRefetchList);
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
          data={book}
          onBookEdited={refetchListHandler}
          onBookDeleted={refetchListHandler}
        />
      ))}
    </CardDeck>
  );
}

export default BookList;
