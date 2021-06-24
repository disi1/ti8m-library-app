import BookList from "./components/BookList";
import Navigation from "./components/Navigation";
import { useState } from "react";

function App() {
  const [listRefetch, setlistRefetch] = useState();

  function refetchListHandler(shouldRefetchList) {
    setlistRefetch(shouldRefetchList);
  }

  return (
    <div className="App">
      <Navigation onBookAdded={refetchListHandler} />
      <BookList bookAdded={listRefetch} onListRefetch={refetchListHandler} />
    </div>
  );
}

export default App;
