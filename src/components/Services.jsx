import ServiceCard from "./ServiceCard";
import services from "../data/services";

function Services() {
  return (
    <section id="services" className="section">
      <h2>Our Services</h2>
      <div className="grid">
        {services.map((s) => (
          <ServiceCard key={s.id} title={s.title} text={s.text} />
        ))}
      </div>
    </section>
  );
}

export default Services;
