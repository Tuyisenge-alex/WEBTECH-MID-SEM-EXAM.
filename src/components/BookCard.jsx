function BookCard({ title, author, text, color }) {
  return (
    <article className="card">
      {/* simple coloured block used as a book cover */}
      <div className="cover" style={{ backgroundColor: color }}>
        {title}
      </div>
      <h3>{title}</h3>
      <p className="author">by {author}</p>
      <p>{text}</p>
    </article>
  );
}

export default BookCard;
