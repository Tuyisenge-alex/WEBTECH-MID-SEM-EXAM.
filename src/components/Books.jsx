import BookCard from "./BookCard";
import books from "../data/books";

function Books() {
  return (
    <section id="books" className="section">
      <h2>Featured Books</h2>
      <div className="grid">
        {books.map((b) => (
          <BookCard key={b.id} title={b.title} author={b.author} text={b.text} color={b.color} />
        ))}
      </div>
    </section>
  );
}

export default Books;
