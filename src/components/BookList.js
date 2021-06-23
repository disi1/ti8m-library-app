import { CardGroup } from "react-bootstrap";
import BookItem from "./BookItem";

import "./BookList.css";

function BookList() {
  return (
    <CardGroup className="book-container">
      <BookItem
        title="The book title"
        author="The book author"
        isbn="9999999999"
        pages={99}
        total_amount={30}
      />
      <BookItem
        title="999 BOOKS"
        author="ANONYMOUS"
        isbn="9999999999"
        pages={99}
        total_amount={30}
      />
    </CardGroup>
  );
}

export default BookList;
