export default function Hero() {
  const phoneNumber = "5754946332";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <section className="hero" id="home">
      <div className="hero-overlay">
        <div className="hero-content reveal">
          <h1>Professional Electrical Services</h1>

          <p>
            Residential and commercial electrical services you can trust.
            Honest, dependable, and reliable solutions for your home or business.
          </p>

          <button
            type="button"
            className="hero-btn"
            onClick={handleCall}
            aria-label="Call Rico’s Electric"
          >
            Call Now
          </button>
        </div>
      </div>
    </section>
  );
}
