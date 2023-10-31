import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="bg-blue-100 dark:bg-black/30 w-44 h-44 rounded-full flex justify-center items-center">
        <img
          src="./images/marcelo_memoji.png"
          alt="Marcelo"
          className="max-w-[6.5rem]"
        />
      </div>
      <h2 className="lg:text-6xl font-bold">Let's create together...</h2>
      <div className="contact-section-header"></div>
      <div className="contact__call-to-action-container">
        <p id="contactDescription">
          Whether you have an offer, a question or just want to say hi
        </p>
        <div className="contact__email-label" role="status">
          <p id="copy-call-to-action">Copy the email address above</p>
          <p id="copied-call-to-action" className="copied-call-to-action">
            Email address copied!
          </p>
        </div>
        <div className="contact__email-container">
          <div className="address">
            <label id="contactCallToAction" className="font-mono">hello@marceloarias.com</label>
          </div>
          <button
            className="copy"
            aria-label="Copy email to clipboard"
            onClick={() => {
              navigator.clipboard.writeText("hello@marceloarias.com");
            }}
          >
            <i className="fas fa-copy" role="img" id="copy"></i>
            <i className="fas fa-check" role="img"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
