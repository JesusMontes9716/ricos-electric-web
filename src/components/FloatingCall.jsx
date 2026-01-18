export default function FloatingCall() {
  const phoneNumber = "5754946332";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <button
      type="button"
      className="floating-call"
      onClick={handleCall}
      aria-label="Call Rico’s Electric"
      title="Call Now"
    >
      📞
    </button>
  );
}
