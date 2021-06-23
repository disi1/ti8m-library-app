import BookList from "./components/BookList";
import Navigation from "./components/Navigation";
import { useState } from "react";

function App() {
  const [bookAdded, setBookAdded] = useState(false);

  function addBookdHandler(dataHasChanged) {
    setBookAdded(dataHasChanged);
  }

  return (
    <div className="App">
      <Navigation onBookAdd={addBookdHandler} />
      <BookList bookAdded={bookAdded} onBookAdd={addBookdHandler} />
    </div>
  );
}

export default App;
