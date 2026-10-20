function EventCard({ title, date, text }) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p className="date">{date}</p>
      <p>{text}</p>
    </article>
  );
}

export default EventCard;
