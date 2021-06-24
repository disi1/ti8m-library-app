import BookList from "./components/BookList";
import Navigation from "./components/Navigation";
import { useState } from "react";

function App() {
  /**
   * Keeps track of whether the list of books should be refetched
   */
  const [listRefetch, setlistRefetch] = useState();
  const [filter, setfilter] = useState("");

  function refetchListHandler(shouldRefetchList) {
    setlistRefetch(shouldRefetchList);
  }

  function filterHandler(text) {
    setfilter(text);
  }

  return (
    <div className="App">
      <Navigation onBookAdded={refetchListHandler} onFilter={filterHandler}/>
      <BookList bookAdded={listRefetch} onListRefetch={refetchListHandler} filter={filter}/>
    </div>
  );
}

export default App;
