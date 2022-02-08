// import "./App.css";
import "./css/book.css";
import Book from "./components/Book";
import book__lists from "./components/Books-details";

function App() {
  console.log(book__lists);
  return (
    <div className="box">
      {book__lists.map((book) => {
        return (
          <Book
            title={book.title}
            img={book.img}
            author={book.author}
            key={book.id}
          />
        );
      })}
      {/* <Book /> */}
    </div>
  );
}

export default App;
