import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* BRAND */}
        <div className="header-brand">
          <img
            src={logo}
            alt="Rico’s Electric Logo"
            className="header-logo"
          />

          <div className="header-text">
            <h1 className="header-title">Rico’s Electric</h1>
            <span className="header-tagline">
              Licensed & Professional Electrical Services
            </span>
          </div>
        </div>

        {/* NAV */}
        <nav className="header-nav" aria-label="Main Navigation">
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
