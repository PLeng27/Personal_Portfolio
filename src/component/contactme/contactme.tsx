"use client";

import React from "react";
import "./contactme.css";

const ContactMe: React.FC = () => {
  return (
    <main className="contactme-main" id="MyContact">

      {/* Form Section — Option 3 minimal underline style */}
      <h2 className="greeting-header">Get In Touch | Contact</h2>

      <form className="contactme-form">
        <div className="form-groupme">
          <label htmlFor="nameInput1">Name</label>
          <input
            type="text"
            id="nameInput1"
            name="name"
            placeholder="Enter your name"
          />
        </div>

        <div className="form-groupme">
          <label htmlFor="emailInput1">Email</label>
          <input
            type="email"
            id="emailInput1"
            name="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="form-groupme">
          <label htmlFor="messageInput1">Message</label>
          <textarea
            id="messageInput1"
            name="message"
            placeholder="Enter your message"
            rows={4}
          />
        </div>

        <button
          type="button"
          className="send-btn"
          onClick={() => {
            const name = (document.getElementById("nameInput1") as HTMLInputElement)?.value || "";
            const email = (document.getElementById("emailInput1") as HTMLInputElement)?.value || "";
            const message = (document.getElementById("messageInput1") as HTMLTextAreaElement)?.value || "";
            const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
            window.open(
              `https://mail.google.com/mail/?view=cm&to=ngornlengnam@gmail.com&su=${subject}&body=${body}`,
              "_blank"
            );
          }}
        >
          Send Message
        </button>
      </form>

      {/* Contact Cards Grid — Option 6 as clickable buttons */}
      <div className="contact-cards">

        <button
          className="contact-card"
          onClick={() =>
            window.open(
              "https://mail.google.com/mail/?view=cm&to=ngornlengnam@gmail.com",
              "_blank"
            )
          }
        >
          <span className="contact-card-icon">✉️</span>
          <span className="contact-card-label">Email</span>
          <span className="contact-card-value">ngornlengnam@gmail.com</span>
        </button>

        <button
          className="contact-card"
          onClick={() =>
            window.open("https://www.linkedin.com/in/pleng27/", "_blank")
          }
        >
          <span className="contact-card-icon">💼</span>
          <span className="contact-card-label">LinkedIn</span>
          <span className="contact-card-value">Nam Ngorn Leng</span>
        </button>

        <button
          className="contact-card"
          onClick={(e) => {
            const btn = e.currentTarget;
            const val = btn.querySelector(".contact-card-value") as HTMLElement;
            const showCopied = () => {
              if (val) val.textContent = "Copied! ✅";
              setTimeout(() => {
                if (val) val.textContent = "(+855) 12600577";
              }, 1500);
            };
            if (navigator.clipboard && window.isSecureContext) {
              navigator.clipboard.writeText("+85512600577").then(showCopied);
            } else {
              const el = document.createElement("input");
              el.value = "+85512600577";
              document.body.appendChild(el);
              el.select();
              el.setSelectionRange(0, 99999);
              document.execCommand("copy");
              document.body.removeChild(el);
              showCopied();
            }
          }}
        >
          <span className="contact-card-icon">📱</span>
          <span className="contact-card-label">Phone / Telegram</span>
          <span className="contact-card-value">(+855) 12600577</span>
        </button>

      </div>
      <div className="reference-section">
        <h2 className="reference-title">References</h2>
        <div className="reference-grid">

          <div className="reference-card">
            <div className="ref-card-header">
              <div className="ref-avatar">RK</div>
              <div>
                <p className="ref-name">Mr. Roza Kinin</p>
                <p className="ref-role">IT Senior</p>
              </div>
            </div>
            <div className="ref-card-body">
              <p className="ref-org">ABA Bank</p>
              <p className="ref-phone">(+855) 15368971</p>
            </div>
          </div>

          <div className="reference-card">
            <div className="ref-card-header">
              <div className="ref-avatar">LL</div>
              <div>
                <p className="ref-name">Mr. Lim Lyheng</p>
                <p className="ref-role">Professor</p>
              </div>
            </div>
            <div className="ref-card-body">
              <p className="ref-org">Royal University of Phnom Penh</p>
              <p className="ref-phone">(+855) 11588297</p>
            </div>
          </div>

          <div className="reference-card">
            <div className="ref-card-header">
              <div className="ref-avatar">CK</div>
              <div>
                <p className="ref-name">Mr. Chi Kuong</p>
                <p className="ref-role">Head of IT Department &amp; Professor</p>
              </div>
            </div>
            <div className="ref-card-body">
              <p className="ref-org">Royal University of Phnom Penh</p>
              <p className="ref-phone">(+855) 17947377</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default ContactMe;
