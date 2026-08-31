import "./home.css";

export default function HomePage() {
  return (
    <main className="home-page">
      <img
        src="/logo-homepage.svg"
        alt="Open Reposit logo"
        className="home-logo"
      />

      <p className="home-tagline">
        An open, structured home for research, ideas, and intellectual work.
      </p>

      <p className="home-framing">
        We're figuring out what to build. Come help shape it.
      </p>

      <a href="/discussion" className="home-cta">
        Join the discussion
      </a>

      <div className="home-contact-primary">
        <span className="home-contact-primary-label">General inquiries:</span>{" "}
        <a href="mailto:enquires@openreposit.com">
          enquires@openreposit.com
        </a>
      </div>

      <div className="home-contact-secondary">
        <span className="home-contact-secondary-label">Technical:</span>{" "}
        <a href="mailto:developers@openreposit.com">
          developers@openreposit.com
        </a>
        {" · "}
        <span className="home-contact-secondary-label">Partnerships:</span>{" "}
        <a href="mailto:partnership@openreposit.com">
          partnership@openreposit.com
        </a>
      </div>
    </main>
  );
}