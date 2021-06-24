import { Spinner, CardDeck } from "react-bootstrap";
import BookItem from "./BookItem";
import { useEffect, useState } from "react";

import "./BookList.css";

/**
 * Holds a deck of cards containing book items
 * Through useEffect, the list of books is fetched on opening the page and on state changes
 * @param {Object} props
 * @returns {CardDeck}
 */
function BookList(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedBooks, setLoadedBooks] = useState([]);
  const [listRefetch, setlistRefetch] = useState();

  /**
   * Launches a GET request to update the loadedBooks state with the most recent list of books
   */
  async function getBooks() {
    try {
      const response = await fetch(
        "https://5ffda94cd9ddad0017f68545.mockapi.io/books"
      );

      if (response.status === 200) {
        let data = await response.json();
        setIsLoading(false);
        setLoadedBooks(data);
      }
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * Displays the loading spinner until the list of books is fetched
   * Refetch the data every 60 seconds
   */
  useEffect(() => {
    setIsLoading(true);
    getBooks();
    const interval = setInterval(() => {
      getBooks();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  /**
   * Depending on the states, refetch the list of books and update the states
   */
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

  /**
   * Update the listRefetch state accordingly
   * @param {Boolean} shouldRefetchList
   */
  function refetchListHandler(shouldRefetchList) {
    setlistRefetch(shouldRefetchList);
  }

  /**
   * Displays the loading spinner
   */
  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }

  return (
    <CardDeck className="book-container justify-content-center">
      {loadedBooks
        .filter(
          (book) =>
            book.title.toLowerCase().includes(props.filter.toLowerCase()) ||
            book.author.toLowerCase().includes(props.filter.toLowerCase())
        )
        .map((book) => (
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
