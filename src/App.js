import BookList from "./components/BookList";
import Navigation from "./components/Navigation";
import { useState } from "react";

function App() {
  const [dataChanged, setDataChanged] = useState(false);

  function dataChangedHandler(dataChanged) {
    setDataChanged(dataChanged);
  }

  function listUpToDatedHandler() {
    setDataChanged(false);
  }

  return (
    <div className="App">
      <Navigation onDataChanged={dataChangedHandler} />
      <BookList
        dataChanged={dataChanged}
        onListUpdated={listUpToDatedHandler}
      />
    </div>
  );
}

export default App;
