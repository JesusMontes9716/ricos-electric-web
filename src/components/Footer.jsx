export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-company">
        © {year} Rico’s Electric
      </p>

      <p className="footer-contact">
        📞 <a href="tel:5754946332">(575) 494-6332</a> ·{" "}
        ✉️ <a href="mailto:ricoselectric@yahoo.com">
          ricoselectric@yahoo.com
        </a>
      </p>

      <p className="footer-license">
        Licensed Electrician · Lic. #374157 · MH #C374157
      </p>
    </footer>
  );
}
