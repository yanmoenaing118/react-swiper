import "./App.css";
import Pagination from "./components/paginate";

function App() {
  return (
    <div className="App">
      <Pagination itemsPerPage={4} />
    </div>
  );
}

export default App;
