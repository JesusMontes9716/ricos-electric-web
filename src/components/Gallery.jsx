export default function Gallery() {
  const media = [
    { src: "/ricos-electric-web/images/work1.jpg", type: "image" },
    { src: "/ricos-electric-web/images/work2.jpg", type: "image" },
    { src: "/ricos-electric-web/images/work3.jpg", type: "image" },
    { src: "/ricos-electric-web/images/work4.jpg", type: "image" },
    { src: "/ricos-electric-web/images/work5.mp4", type: "video" },
    { src: "/ricos-electric-web/images/work6.mp4", type: "video" },
    { src: "/ricos-electric-web/images/work7.mp4", type: "video" },
    { src: "/ricos-electric-web/images/work8.mp4", type: "video" },
    { src: "/ricos-electric-web/images/work9.mp4", type: "video" },
    { src: "/ricos-electric-web/images/work10.mp4", type: "video" },
    { src: "/ricos-electric-web/images/work11.mp4", type: "video" },
  ];

  return (
    <section className="gallery" id="gallery">
      <h2>Our Work</h2>
      <p className="gallery-subtitle">
        Quality electrical installations and repairs
      </p>

      <div className="gallery-grid">
        {media.map((item, index) => (
          <div className="gallery-item" key={index}>
            {item.type === "image" ? (
              <img src={item.src} alt={`Electrical work ${index + 1}`} />
            ) : (
              <video
                src={item.src}
                alt={`Electrical work ${index + 1}`}
                controls
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
