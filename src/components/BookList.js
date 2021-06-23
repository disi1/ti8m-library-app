import { Spinner, CardDeck } from "react-bootstrap";
import BookItem from "./BookItem";
import { useEffect, useState } from "react";

import "./BookList.css";

function BookList() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedBooks, setLoadedBooks] = useState([]);

  function getBooks() {
    fetch("https://5ffda94cd9ddad0017f68545.mockapi.io/books")
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setLoadedBooks(data);
      });
  }

  useEffect(() => {
    setIsLoading(true);
    getBooks();
  }, []);

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
        />
      ))}
    </CardDeck>
  );
}

export default BookList;
