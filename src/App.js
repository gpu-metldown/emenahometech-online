import React, { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Services", "How It Works", "Gallery", "About", "Contact"];

const SERVICES = [
  {
    icon: "✦",
    title: "Lighting Control",
    desc: "Precision-tuned ambient lighting systems with scene automation, circadian rhythm support, and motion-responsive zones throughout your home.",
    accent: "#c8a96e",
  },
  {
    icon: "✦",
    title: "Security & Surveillance",
    desc: "Military-grade access control, smart cameras, motion detection and real-time alerts — complete situational awareness of your property.",
    accent: "#7eb8d4",
  },
  {
    icon: "✦",
    title: "Climate Management",
    desc: "Intelligent HVAC integration that learns your preferences, optimises energy consumption, and delivers perfect cabin comfort year-round.",
    accent: "#c8a96e",
  },
  {
    icon: "✦",
    title: "Shutter & Blinds",
    desc: "Automated motorised shading that responds to sunlight, time of day, and your routines — protecting interiors while managing glare.",
    accent: "#7eb8d4",
  },
  {
    icon: "✦",
    title: "Energy Monitoring",
    desc: "Live dashboards tracking consumption across every circuit. Identify waste, reduce bills, and move toward a fully sustainable home.",
    accent: "#c8a96e",
  },
  {
    icon: "✦",
    title: "Audio & Entertainment",
    desc: "Whole-home multi-room audio, cinema integration, and one-touch scene activation for the ultimate in-home entertainment experience.",
    accent: "#7eb8d4",
  },
];

const STEPS = [
  { num: "01", label: "Consultation", desc: "We assess your home layout, lifestyle, and goals to design a tailored automation blueprint." },
  { num: "02", label: "System Design", desc: "Our engineers draft a comprehensive integration plan, selecting hardware matched to your environment." },
  { num: "03", label: "Installation", desc: "Discreet, professional installation with minimal disruption. Every cable routed, every device calibrated." },
  { num: "04", label: "Handover & Support", desc: "Full walkthrough of your system, custom app setup, and dedicated ongoing support from our team." },
];

const GALLERY_ITEMS = [
  { label: "Scenes & Mood", img: "dash-scenes.png" },
  { label: "Energy Dashboard", img: "dash-energy.png" },
  { label: "Security Overview", img: "dash-security.png" },
  { label: "Shutter Control", img: "dash-shutters.png" },
];

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const fn = () => setY(window.scrollY);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return y;
}

function NavBar() {
  const scrollY = useScrollY();
  const [menuOpen, setMenuOpen] = useState(false);
  const solid = scrollY > 60;

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id.toLowerCase().replace(/ /g, "-"));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: solid ? "rgba(10,14,20,0.97)" : "transparent",
      backdropFilter: solid ? "blur(12px)" : "none",
      borderBottom: solid ? "1px solid rgba(200,169,110,0.18)" : "none",
      transition: "all 0.4s ease",
      padding: "0 2rem",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      height: "68px",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{
          width: 36, height: 36, background: "linear-gradient(135deg, #c8a96e, #e8c98e)",
          borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 14, fontWeight: 700, color: "#0a0e14", flexShrink: 0,
        }}>EH</div>
        <span style={{ color: "#f0ece4", fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 600, letterSpacing: "0.04em" }}>
          Emena Home Tech
        </span>
      </div>

      {/* Desktop Nav */}
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="desktop-nav">
        {NAV_LINKS.map(l => (
          <button key={l} onClick={() => scrollTo(l)} style={{
            background: "none", border: "none", color: "rgba(240,236,228,0.75)",
            fontFamily: "'Cormorant Garamond', serif", fontSize: 15, letterSpacing: "0.06em",
            cursor: "pointer", padding: "4px 0", transition: "color 0.2s",
            textTransform: "uppercase",
          }}
            onMouseEnter={e => e.target.style.color = "#c8a96e"}
            onMouseLeave={e => e.target.style.color = "rgba(240,236,228,0.75)"}
          >{l}</button>
        ))}
        <button onClick={() => scrollTo("Contact")} style={{
          background: "transparent", border: "1px solid #c8a96e",
          color: "#c8a96e", padding: "8px 20px", borderRadius: 2,
          fontFamily: "'Cormorant Garamond', serif", fontSize: 14,
          letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer",
          transition: "all 0.2s",
        }}
          onMouseEnter={e => { e.target.style.background = "#c8a96e"; e.target.style.color = "#0a0e14"; }}
          onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#c8a96e"; }}
        >Request Quote</button>
      </div>

      {/* Mobile Hamburger */}
      <button onClick={() => setMenuOpen(!menuOpen)} style={{
        display: "none", background: "none", border: "none", color: "#f0ece4",
        fontSize: 24, cursor: "pointer",
      }} className="mobile-menu-btn">☰</button>

      {menuOpen && (
        <div style={{
          position: "fixed", top: 68, left: 0, right: 0,
          background: "rgba(10,14,20,0.98)", borderBottom: "1px solid rgba(200,169,110,0.2)",
          padding: "1.5rem 2rem", display: "flex", flexDirection: "column", gap: "1.2rem",
        }}>
          {NAV_LINKS.map(l => (
            <button key={l} onClick={() => scrollTo(l)} style={{
              background: "none", border: "none", color: "#f0ece4", textAlign: "left",
              fontFamily: "'Cormorant Garamond', serif", fontSize: 18, cursor: "pointer",
              letterSpacing: "0.06em",
            }}>{l}</button>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section id="hero" style={{
      minHeight: "100vh", position: "relative", overflow: "hidden",
      display: "flex", alignItems: "center", justifyContent: "center",
      background: "#0a0e14",
    }}>
      {/* Animated grid background */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `
          linear-gradient(rgba(200,169,110,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200,169,110,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        animation: "gridDrift 20s linear infinite",
      }} />

      {/* Horizon glow */}
      <div style={{
        position: "absolute", bottom: "20%", left: "50%", transform: "translateX(-50%)",
        width: "70vw", height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(200,169,110,0.5), transparent)",
      }} />

      {/* Altitude lines */}
      {[30, 45, 60].map(p => (
        <div key={p} style={{
          position: "absolute", bottom: `${p}%`, left: 0, right: 0, height: "1px",
          background: `rgba(126,184,212,0.06)`,
        }} />
      ))}

      {/* Compass rose */}
      <div style={{
        position: "absolute", top: "12%", right: "8%", opacity: 0.12,
        fontSize: 90, color: "#c8a96e", lineHeight: 1,
        fontFamily: "'Cormorant Garamond', serif", userSelect: "none",
        animation: "compassSpin 60s linear infinite",
      }}>✈</div>

      <div style={{ position: "relative", textAlign: "center", padding: "0 2rem", maxWidth: 900 }}>
        <div style={{
          display: "inline-block", border: "1px solid rgba(200,169,110,0.4)",
          padding: "5px 18px", marginBottom: "2rem", borderRadius: 2,
        }}>
          <span style={{
            color: "#c8a96e", fontFamily: "'Cormorant Garamond', serif",
            fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase",
          }}>Smart Home Integration Specialists</span>
        </div>

        <h1 style={{
          color: "#f0ece4", fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(3rem, 8vw, 6.5rem)", fontWeight: 300,
          lineHeight: 1.05, margin: "0 0 1.5rem",
          letterSpacing: "-0.01em",
        }}>
          Your Home.<br />
          <span style={{ color: "#c8a96e", fontStyle: "italic" }}>Commanded</span> with<br />
          Precision.
        </h1>

        <p style={{
          color: "rgba(240,236,228,0.6)", fontSize: "clamp(1rem, 2vw, 1.15rem)",
          maxWidth: 560, margin: "0 auto 3rem",
          fontFamily: "'Cormorant Garamond', serif", lineHeight: 1.7, fontWeight: 300,
        }}>
          Professional smart home automation engineered with the discipline of aviation — every system integrated, every detail calibrated, every scenario prepared for.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => document.getElementById("services").scrollIntoView({ behavior: "smooth" })} style={{
            background: "#c8a96e", border: "none", color: "#0a0e14",
            padding: "14px 36px", borderRadius: 2, cursor: "pointer",
            fontFamily: "'Cormorant Garamond', serif", fontSize: 15,
            letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600,
            transition: "all 0.2s",
          }}
            onMouseEnter={e => e.target.style.background = "#e8c98e"}
            onMouseLeave={e => e.target.style.background = "#c8a96e"}
          >Explore Services</button>
          <button onClick={() => document.getElementById("how-it-works").scrollIntoView({ behavior: "smooth" })} style={{
            background: "transparent", border: "1px solid rgba(240,236,228,0.3)",
            color: "#f0ece4", padding: "14px 36px", borderRadius: 2, cursor: "pointer",
            fontFamily: "'Cormorant Garamond', serif", fontSize: 15,
            letterSpacing: "0.1em", textTransform: "uppercase",
            transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.target.style.borderColor = "#c8a96e"; e.target.style.color = "#c8a96e"; }}
            onMouseLeave={e => { e.target.style.borderColor = "rgba(240,236,228,0.3)"; e.target.style.color = "#f0ece4"; }}
          >How It Works</button>
        </div>

        {/* HUD stats bar */}
        <div style={{
          display: "flex", justifyContent: "center", gap: "3rem", marginTop: "5rem",
          borderTop: "1px solid rgba(200,169,110,0.15)", paddingTop: "2rem",
          flexWrap: "wrap",
        }}>
          {[["100+", "Projects Delivered"], ["10+", "Years Experience"], ["24/7", "Support Available"], ["50+", "Brands Integrated"]].map(([num, label]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ color: "#c8a96e", fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 600 }}>{num}</div>
              <div style={{ color: "rgba(240,236,228,0.45)", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" style={{ background: "#0d1119", padding: "7rem 2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader tag="Systems & Services" title="Full-Spectrum Home Automation" light />
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "1px", background: "rgba(200,169,110,0.1)",
          border: "1px solid rgba(200,169,110,0.1)",
          marginTop: "4rem",
        }}>
          {SERVICES.map((s, i) => (
            <div key={s.title} style={{
              background: "#0d1119", padding: "2.5rem",
              transition: "background 0.3s",
              position: "relative", overflow: "hidden",
            }}
              onMouseEnter={e => e.currentTarget.style.background = "#111722"}
              onMouseLeave={e => e.currentTarget.style.background = "#0d1119"}
            >
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                background: i % 2 === 0
                  ? "linear-gradient(90deg, transparent, #c8a96e, transparent)"
                  : "linear-gradient(90deg, transparent, #7eb8d4, transparent)",
                opacity: 0, transition: "opacity 0.3s",
              }} className="service-line" />
              <div style={{ color: s.accent, fontSize: 20, marginBottom: "1rem" }}>{s.icon}</div>
              <h3 style={{
                color: "#f0ece4", fontFamily: "'Cormorant Garamond', serif",
                fontSize: 22, fontWeight: 500, margin: "0 0 0.8rem", letterSpacing: "0.02em",
              }}>{s.title}</h3>
              <p style={{ color: "rgba(240,236,228,0.5)", lineHeight: 1.7, margin: 0, fontSize: 14 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" style={{ background: "#0a0e14", padding: "7rem 2rem" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <SectionHeader tag="Process" title="From Blueprint to Live System" light />
        <div style={{ marginTop: "4rem", position: "relative" }}>
          <div style={{
            position: "absolute", left: "calc(2.5rem)",
            top: 0, bottom: 0, width: "1px",
            background: "linear-gradient(180deg, transparent, rgba(200,169,110,0.3) 10%, rgba(200,169,110,0.3) 90%, transparent)",
          }} />
          {STEPS.map((step, i) => (
            <div key={step.num} style={{
              display: "flex", gap: "2.5rem", marginBottom: i < STEPS.length - 1 ? "3.5rem" : 0,
              alignItems: "flex-start",
            }}>
              <div style={{
                width: 50, height: 50, flexShrink: 0,
                border: "1px solid rgba(200,169,110,0.4)",
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "#0a0e14", position: "relative", zIndex: 1,
              }}>
                <span style={{ color: "#c8a96e", fontFamily: "'Cormorant Garamond', serif", fontSize: 13, letterSpacing: "0.1em" }}>{step.num}</span>
              </div>
              <div style={{ paddingTop: 10 }}>
                <h3 style={{
                  color: "#f0ece4", fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 24, fontWeight: 500, margin: "0 0 0.5rem",
                }}>{step.label}</h3>
                <p style={{ color: "rgba(240,236,228,0.55)", lineHeight: 1.7, margin: 0, fontSize: 15, maxWidth: 600 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [active, setActive] = useState(0);
  return (
    <section id="gallery" style={{ background: "#0d1119", padding: "7rem 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader tag="Interface Gallery" title="Your Command Centre" light />
        <div style={{ marginTop: "3rem", display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
          {GALLERY_ITEMS.map((item, i) => (
            <button key={item.label} onClick={() => setActive(i)} style={{
              padding: "8px 20px", borderRadius: 2, cursor: "pointer",
              fontFamily: "'Cormorant Garamond', serif", fontSize: 14, letterSpacing: "0.06em",
              border: `1px solid ${i === active ? "#c8a96e" : "rgba(240,236,228,0.15)"}`,
              background: i === active ? "rgba(200,169,110,0.1)" : "transparent",
              color: i === active ? "#c8a96e" : "rgba(240,236,228,0.55)",
              transition: "all 0.2s",
            }}>{item.label}</button>
          ))}
        </div>
        <div style={{
          marginTop: "2rem", border: "1px solid rgba(200,169,110,0.15)",
          borderRadius: 4, overflow: "hidden", position: "relative",
          background: "#111722",
        }}>
          <div style={{
            position: "absolute", top: 12, left: 16, display: "flex", gap: 6, zIndex: 2,
          }}>
            {["#ff5f57", "#ffbd2e", "#28ca41"].map(c => (
              <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.7 }} />
            ))}
          </div>
          <div style={{
            padding: "2.5rem 1.5rem 1.5rem",
            display: "flex", alignItems: "center", justifyContent: "center",
            minHeight: 300,
            color: "rgba(240,236,228,0.3)", fontSize: 14, fontFamily: "'Cormorant Garamond', serif",
            letterSpacing: "0.1em", flexDirection: "column", gap: "0.5rem",
          }}>
            <span style={{ fontSize: 40, opacity: 0.3 }}>▦</span>
            <span>{GALLERY_ITEMS[active].label} Interface</span>
            <span style={{ fontSize: 12, opacity: 0.5 }}>{GALLERY_ITEMS[active].img}</span>
          </div>
        </div>
        <p style={{ color: "rgba(240,236,228,0.3)", fontSize: 12, textAlign: "center", marginTop: "1rem", fontStyle: "italic" }}>
          Live dashboard previews — connect your installed system to see real data
        </p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" style={{ background: "#0a0e14", padding: "7rem 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
        <div>
          <SectionHeader tag="About Us" title="Engineered by a Pilot. Built for Precision." light align="left" />
          <p style={{ color: "rgba(240,236,228,0.6)", lineHeight: 1.9, fontSize: 15, marginTop: "2rem" }}>
            Emena Home Tech was founded by a commercial pilot who understands that reliable systems aren't a luxury — they're a requirement. Every smart home project we deliver is engineered with the same rigour applied to aircraft systems: redundant pathways, failsafe logic, and zero tolerance for incomplete integration.
          </p>
          <p style={{ color: "rgba(240,236,228,0.6)", lineHeight: 1.9, fontSize: 15, marginTop: "1rem" }}>
            We bring aviation-grade discipline to domestic automation, ensuring your lighting, security, climate, and entertainment systems work in perfect harmony — every time, without exception.
          </p>
          <div style={{ display: "flex", gap: "2rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
            {[["KNX", "Certified"], ["Loxone", "Partner"], ["CEDIA", "Member"]].map(([brand, sub]) => (
              <div key={brand} style={{ borderLeft: "2px solid #c8a96e", paddingLeft: "1rem" }}>
                <div style={{ color: "#f0ece4", fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 500 }}>{brand}</div>
                <div style={{ color: "rgba(240,236,228,0.4)", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase" }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{
            border: "1px solid rgba(200,169,110,0.2)", padding: "2.5rem",
            background: "#0d1119", position: "relative",
          }}>
            <div style={{
              position: "absolute", top: -1, left: "10%", right: "10%", height: "2px",
              background: "linear-gradient(90deg, transparent, #c8a96e, transparent)",
            }} />
            <div style={{ fontFamily: "'Cormorant Garamond', serif", color: "#c8a96e", fontSize: 60, lineHeight: 1, marginBottom: "1rem", opacity: 0.6 }}>"</div>
            <p style={{ color: "rgba(240,236,228,0.75)", fontFamily: "'Cormorant Garamond', serif", fontSize: 20, lineHeight: 1.6, fontStyle: "italic", margin: "0 0 1.5rem" }}>
              In aviation, a system either works or it doesn't. There is no acceptable middle ground. That's exactly how we design smart homes.
            </p>
            <div style={{ color: "rgba(240,236,228,0.4)", fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              — Founder, Emena Home Tech
            </div>
          </div>
          {/* Decorative corner elements */}
          <div style={{ position: "absolute", bottom: -16, right: -16, width: 60, height: 60, border: "1px solid rgba(200,169,110,0.15)", pointerEvents: "none" }} />
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" style={{ background: "#0d1119", padding: "7rem 2rem" }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <SectionHeader tag="Get In Touch" title="Request a Consultation" light />
        {sent ? (
          <div style={{
            marginTop: "3rem", textAlign: "center", padding: "3rem",
            border: "1px solid rgba(200,169,110,0.3)", background: "rgba(200,169,110,0.05)",
          }}>
            <div style={{ color: "#c8a96e", fontSize: 40, marginBottom: "1rem" }}>✓</div>
            <h3 style={{ color: "#f0ece4", fontFamily: "'Cormorant Garamond', serif", fontSize: 24, margin: "0 0 0.5rem" }}>Message Received</h3>
            <p style={{ color: "rgba(240,236,228,0.5)", margin: 0 }}>We'll be in touch within 24 hours to schedule your consultation.</p>
          </div>
        ) : (
          <div style={{ marginTop: "3rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
              {[
                { key: "name", placeholder: "Full Name", type: "text" },
                { key: "email", placeholder: "Email Address", type: "email" },
                { key: "phone", placeholder: "Phone Number", type: "tel" },
                { key: "service", placeholder: "Service of Interest", type: "text" },
              ].map(f => (
                <input key={f.key} type={f.type} placeholder={f.placeholder}
                  value={form[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                  style={{
                    background: "rgba(240,236,228,0.04)", border: "1px solid rgba(200,169,110,0.2)",
                    color: "#f0ece4", padding: "14px 16px", borderRadius: 2, fontSize: 14,
                    fontFamily: "inherit", outline: "none", width: "100%", boxSizing: "border-box",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={e => e.target.style.borderColor = "rgba(200,169,110,0.6)"}
                  onBlur={e => e.target.style.borderColor = "rgba(200,169,110,0.2)"}
                />
              ))}
            </div>
            <textarea placeholder="Tell us about your home and automation goals..."
              value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
              rows={5} style={{
                background: "rgba(240,236,228,0.04)", border: "1px solid rgba(200,169,110,0.2)",
                color: "#f0ece4", padding: "14px 16px", borderRadius: 2, fontSize: 14,
                fontFamily: "inherit", outline: "none", width: "100%", boxSizing: "border-box",
                resize: "vertical", transition: "border-color 0.2s",
              }}
              onFocus={e => e.target.style.borderColor = "rgba(200,169,110,0.6)"}
              onBlur={e => e.target.style.borderColor = "rgba(200,169,110,0.2)"}
            />
            <button onClick={handleSubmit} style={{
              marginTop: "1.5rem", background: "#c8a96e", border: "none",
              color: "#0a0e14", padding: "15px 40px", borderRadius: 2, cursor: "pointer",
              fontFamily: "'Cormorant Garamond', serif", fontSize: 15, letterSpacing: "0.12em",
              textTransform: "uppercase", fontWeight: 600, width: "100%",
              transition: "background 0.2s",
            }}
              onMouseEnter={e => e.target.style.background = "#e8c98e"}
              onMouseLeave={e => e.target.style.background = "#c8a96e"}
            >Send Request</button>
          </div>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#070a0f", borderTop: "1px solid rgba(200,169,110,0.1)", padding: "3rem 2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <div>
          <div style={{ color: "#f0ece4", fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 500, marginBottom: 4 }}>Emena Home Tech</div>
          <div style={{ color: "rgba(240,236,228,0.3)", fontSize: 12, letterSpacing: "0.06em" }}>Smart Home Integration · Est. 2020</div>
        </div>
        <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
          {NAV_LINKS.map(l => (
            <button key={l} onClick={() => { const el = document.getElementById(l.toLowerCase().replace(/ /g, "-")); if (el) el.scrollIntoView({ behavior: "smooth" }); }} style={{
              background: "none", border: "none", color: "rgba(240,236,228,0.35)",
              fontFamily: "'Cormorant Garamond', serif", fontSize: 13, cursor: "pointer",
              letterSpacing: "0.06em", textTransform: "uppercase", transition: "color 0.2s",
            }}
              onMouseEnter={e => e.target.style.color = "#c8a96e"}
              onMouseLeave={e => e.target.style.color = "rgba(240,236,228,0.35)"}
            >{l}</button>
          ))}
        </div>
        <div style={{ color: "rgba(240,236,228,0.2)", fontSize: 12 }}>© 2025 Emena Home Tech</div>
      </div>
    </footer>
  );
}

function SectionHeader({ tag, title, light, align = "center" }) {
  return (
    <div style={{ textAlign: align }}>
      <div style={{
        display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "1.2rem",
      }}>
        <div style={{ width: 24, height: 1, background: "#c8a96e" }} />
        <span style={{ color: "#c8a96e", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>{tag}</span>
        <div style={{ width: 24, height: 1, background: "#c8a96e" }} />
      </div>
      <h2 style={{
        color: light ? "#f0ece4" : "#1a1a1a",
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300,
        margin: 0, letterSpacing: "-0.01em", lineHeight: 1.15,
      }}>{title}</h2>
    </div>
  );
}

export default function App() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&display=swap" rel="stylesheet" />
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: #0a0e14; }
        input::placeholder, textarea::placeholder { color: rgba(240,236,228,0.25); }
        @keyframes gridDrift { from { backgroundPosition: 0 0; } to { backgroundPosition: 60px 60px; } }
        @keyframes compassSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
      <NavBar />
      <Hero />
      <Services />
      <HowItWorks />
      <Gallery />
      <About />
      <ContactForm />
      <Footer />
    </>
  );
}
