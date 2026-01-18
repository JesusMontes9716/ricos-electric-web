import { useState, useEffect, useRef } from "react";

export default function Contact() {
  const phoneNumber = "5754946332";
  const businessWhatsApp = "15754946332";
  const email = "ricoselectric@yahoo.com";

  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    description: "",
  });

  const callNow = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const sendEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
🔌 New Service Request

👤 Name: ${form.name}
📞 Phone: ${form.phone}
🏠 Address: ${form.address}
🛠 Service: ${form.description}
    `;

    const url = `https://wa.me/${businessWhatsApp}?text=${encodeURIComponent(
      message
    )}`;

    const newWindow = window.open(url, "_blank");
    if (newWindow) newWindow.opener = null;

    // Reset form
    setForm({
      name: "",
      phone: "",
      address: "",
      description: "",
    });

    setShowModal(false);
  };

  const openPopup = () => {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    const width = Math.max(320, Math.floor(Math.min(720, vw * 0.9)));
    const height = Math.max(480, Math.floor(Math.min(1000, vh * 0.9)));

    const left = window.screenX + Math.max(0, (window.innerWidth - width) / 2);
    const top = window.screenY + Math.max(0, (window.innerHeight - height) / 2);

    const features = `width=${width},height=${height},left=${Math.floor(left)},top=${Math.floor(top)},resizable=yes,scrollbars=yes`;

    // Build URL using Vite's BASE_URL to avoid incorrect base path warnings
    const base = import.meta.env.BASE_URL || '/';
    const basePath = base === '/' ? '' : base.endsWith('/') ? base.slice(0, -1) : base;
    const popupUrl = `${window.location.origin}${basePath}/service-request.html`;

    const popup = window.open(popupUrl, 'serviceRequest', features);
    if (popup) {
      try { popup.opener = null; } catch (e) {}
      popup.focus();
    } else {
      // Popup blocked — fallback to in-page modal
      setShowModal(true);
    }
  };

  // Refs and accessibility helpers for modal
  const modalRef = useRef(null);
  const firstInputRef = useRef(null);

  useEffect(() => {
    if (!showModal) return;

    const previousActive = document.activeElement;

    // Focus first input when modal opens
    setTimeout(() => firstInputRef.current?.focus(), 0);

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowModal(false);
        return;
      }

      if (e.key === "Tab") {
        const modal = modalRef.current;
        if (!modal) return;
        const focusable = modal.querySelectorAll(
          'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previousActive?.focus();
    };
  }, [showModal]);

  const hiddenLabelStyle = {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    border: 0,
  };

  const formatPhoneDisplay = (num) => {
    const cleaned = ('' + num).replace(/\D/g, '');
    if (cleaned.length === 10) {
      return `(${cleaned.slice(0,3)}) ${cleaned.slice(3,6)}-${cleaned.slice(6)}`;
    }
    return num;
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>

      <p className="contact-item">
        📞 <strong>{formatPhoneDisplay(phoneNumber)}</strong>
      </p>

      <p className="contact-item">
        ✉️ <strong>{email}</strong>
      </p>

      <div className="contact-buttons">
        <button
          type="button"
          className="contact-btn primary"
          onClick={callNow}
        >
          Call Now
        </button>

        <button
          type="button"
          className="contact-btn secondary"
          onClick={sendEmail}
        >
          Send Email
        </button>

        <button
          type="button"
          className="contact-btn request"
          onClick={openPopup}
          aria-haspopup="dialog"
          aria-controls="serviceRequestModal"
          aria-expanded={showModal}
        >
          Request Service
        </button>
      </div>

      <hr className="contact-divider" />

      <p className="contact-license">Licensed Electrician</p>

      <p className="contact-license">
        Lic. #374157 · MH #C374157
      </p>

      <p className="contact-tagline">
        Honest · Dependable · Reliable
      </p>

      {/* MODAL */}
      {showModal && (
        <div
          className="modal-overlay"
          onClick={() => setShowModal(false)}
        >
          <div
            id="serviceRequestModal"
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="serviceRequestTitle"
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 id="serviceRequestTitle">Service Request</h3>

            <form onSubmit={handleSubmit}>
              <label htmlFor="name" style={hiddenLabelStyle}>
                Full Name
              </label>
              <input
                id="name"
                ref={firstInputRef}
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                required
              />

              <label htmlFor="phone" style={hiddenLabelStyle}>
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
                required
              />

              <label htmlFor="address" style={hiddenLabelStyle}>
                Service Address
              </label>
              <input
                id="address"
                type="text"
                placeholder="Service Address"
                value={form.address}
                onChange={(e) =>
                  setForm({ ...form, address: e.target.value })
                }
                required
              />

              <label htmlFor="description" style={hiddenLabelStyle}>
                Describe the service needed
              </label>
              <textarea
                id="description"
                placeholder="Describe the service needed"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                required
              ></textarea>

              <div className="modal-buttons">
                <button type="submit" className="primary">
                  Send Request
                </button>

                <button
                  type="button"
                  className="secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
