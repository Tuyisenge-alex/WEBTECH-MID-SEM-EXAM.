import EventCard from "./EventCard";
import events from "../data/events";

function Events() {
  return (
    <section id="events" className="section">
      <h2>Upcoming Events</h2>
      <div className="grid">
        {events.map((e) => (
          <EventCard key={e.id} title={e.title} date={e.date} text={e.text} />
        ))}
      </div>
    </section>
  );
}

export default Events;
