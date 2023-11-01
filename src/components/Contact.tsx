import React, { useState } from "react";
import { Copy, Send, SendHorizonal } from "lucide-react";
import classNames from "classnames";

const Contact = () => {
  const [isEmailCopied, setIsEmailCopied] = useState(false);

  return (
    <section id="contact" className="contact-section">
      <div className="bg-blue-100 dark:bg-black/30 w-44 h-44 rounded-full flex justify-center items-center">
        <img
          src="./images/marcelo_memoji.png"
          alt="Marcelo"
          className="max-w-[6.5rem]"
        />
      </div>
      <h2 className="text-4xl lg:text-6xl font-bold">Let's create together</h2>
      <div className="contact-section-header"></div>
      <div className="contact__call-to-action-container">
        <p className="text-xl">
          Whether you have an offer, a question or just want to say hi <br />
          <p className={classNames("text-lg", {
            "text-green-600 dark:text-green-300": isEmailCopied,
            "text-blue-600 dark:text-blue-300": !isEmailCopied,
          })}>
            {isEmailCopied
              ? "Email copied to clipboard!"
              : "Answer in less than 24 hours"}
          </p>
        </p>
        {/* 
          TODO: Let's design a button like the Messages app in iPhone.
          Let's add a Discord button too.
        */}
        <div className="flex gap-x-2">
          <div className="dark:bg-black/20 border rounded-full p-2 px-8 lg:px-12 flex justify-center items-center">
            <label id="contactCallToAction" className="font-mono lg:text-2xl">
              <span>hello</span>
              <span className="mx-2">@</span>
              <span>marceloarias.com</span>
            </label>
          </div>
          <button
            className="bg-gray-800 text-white dark:bg-white dark:text-neutral-800 rounded-full p-4 flex justify-center items-center active:ring ring-gray-800"
            aria-label="Copy email to clipboard"
            onClick={() => {
              navigator.clipboard.writeText("hello@marceloarias.com");
              setIsEmailCopied(true);
            }}
          >
            <Copy className="lg:h-8 lg:w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
