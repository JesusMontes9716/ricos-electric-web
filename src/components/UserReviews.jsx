export default function UserReviews() {
  return (
    <section className="reviews" id="reviews">
      <h2>What Our Customers Say</h2>

      <div className="reviews-grid">
        <div className="review-card reveal">
          <p className="review-text">
            “Excellent service! Very professional and reliable.
            I highly recommend Rico’s Electric.”
          </p>
          <p className="review-author">— Maria G.</p>
        </div>

        <div className="review-card reveal">
          <p className="review-text">
            “Fast response and great work quality.
            They fixed my electrical issue quickly.”
          </p>
          <p className="review-author">— John R.</p>
        </div>

        <div className="review-card reveal">
          <p className="review-text">
            “Honest pricing and dependable service.
            I will definitely use them again.”
          </p>
          <p className="review-author">— Carlos M.</p>
        </div>
      </div>
    </section>
  );
}
