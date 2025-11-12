// Hero.jsx
import React from "react";
import "./Hero.css";

const Hero = ({ onPopupOpen }) => {
  const handleClick = (e) => {
    e.preventDefault(); // Prevent jump to #contact
    if (onPopupOpen) onPopupOpen();
  };

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const marqueeText =
    "🚀 We are a Bitrix24 Gold Partner | ✅ 100+ CRM Clients Served | 💬 Free Consultation Available | 📞 Call Now: +91 8958847686 | 📩 info@uniquedesignconsultnt.in";

  return (
    <section className="hero-wrapper">
      <div
        className="hero-content-container"
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : undefined,
          alignItems: isMobile ? "center" : undefined,
        }}
      >
        <div className="hero-text" style={{ width: isMobile ? "100%" : undefined }}>
          {/* marquee - improved mobile fallback with continuous animation (doesn't rely on overflow:auto) */}
          {isMobile ? (
            <div
              className="marquee-mobile"
              style={{
                overflow: "hidden",
                width: "100%",
                boxSizing: "border-box",
                padding: "8px 0",
                touchAction: "pan-y", // allow vertical scrolling on touch devices
              }}
              role="region"
              aria-label="Announcements"
            >
              {/* Inline CSS for the mobile marquee animation to avoid changing external CSS */}
              <style>
                {`
                  /* Track will contain two copies of the text and scroll left continuously */
                  .hero-marquee-mobile-track {
                    display: inline-flex;
                    white-space: nowrap;
                    gap: 1.5rem;
                    align-items: center;
                    will-change: transform;
                    animation: heroMarqueeMobile 18s linear infinite;
                    font-size: inherit;
                  }
                  /* Pause on hover / touch (improves accessibility) */
                  .marquee-mobile:active .hero-marquee-mobile-track,
                  .marquee-mobile:hover .hero-marquee-mobile-track {
                    animation-play-state: paused;
                  }
                  @keyframes heroMarqueeMobile {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                  }
                `}
              </style>

              {/* Two copies ensure a seamless loop */}
              <div
                className="hero-marquee-mobile-track"
                aria-hidden={false}
              >
                <span style={{ display: "inline-block", paddingRight: "1.5rem" }}>
                  {marqueeText}
                </span>
                <span style={{ display: "inline-block", paddingRight: "1.5rem" }}>
                  {marqueeText}
                </span>
              </div>
            </div>
          ) : (
            <div className="navbar-marquee " style={{paddingBottom:"120px "}}>
              <div className="marquee-container">
                <div className="marquee-track">
                  <div className="marquee-text">{marqueeText}</div>
                  <div className="marquee-text">{marqueeText}</div>
                </div>
              </div>
            </div>
          )}

          <h1>
            One Platform,
            <br />
            find a <span>Many Possibilities</span>
          </h1>
          <p>Make your business perfect right now!</p>

          {/* Connect the button */}
          <a
            href="#contact"
            className="free-quote-btn"
            onClick={handleClick}
            style={{ display: "inline-block" }}
          >
            Free Quote →
          </a>

          <a
            href="tel:+918958847686"
            className="hero-support text-decoration-none"
            style={{ marginTop: isMobile ? 12 : undefined, display: "inline-flex", alignItems: "center" }}
          >
            <div className="support-icon">📞</div>
            <div>
              <p className="support-label">ONLINE SUPPORT</p>
              <p className="support-number">+91 8958847686</p>
            </div>
          </a>
        </div>

        <div className="hero-image" style={{ width: isMobile ? "100%" : undefined, display: "flex", justifyContent: isMobile ? "center" : undefined }}>
          <img
            src={`${import.meta.env.BASE_URL}assets/img/hero/hero-banner 2.png`}
            alt="Hero Visual"
            className="hero-main-img"
            style={{ maxWidth: "100%", height: "auto", display: "block" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
