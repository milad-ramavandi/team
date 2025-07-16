"use client";
import React, { useState } from "react";
import Spinner from "../spinner";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const allFilled = formData?.name.trim() && formData?.email.trim() && formData?.message.trim();
  const [isSubmiting, setIsSubmiting] = useState<boolean>(false);
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    (async () => {
      setIsSubmiting(true);
      await setTimeout(() => {
        console.log("Form submitted:", formData);
        setIsSubmiting(false);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }, 1000);
    })();
  };
  return (
    <form className="mil-contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="YOUR NAME"
        name="name"
        value={formData?.name}
        onChange={handleInputChange}
        className="mil-contact-form-input"
        required
        autoComplete="off"
      />
      <input
        type="email"
        placeholder="YOUR EMAIL"
        name="email"
        value={formData?.email}
        onChange={handleInputChange}
        className="mil-contact-form-input"
        required
        autoComplete="off"
      />
      <div className="mil-contact-form-container-textarea">
        <textarea
          placeholder="YOUR MESSAGE"
          rows={9}
          name="message"
          value={formData?.message}
          onChange={handleInputChange}
          className="mil-contact-form-textarea"
          required
          autoComplete="0ff"
        />
        <div className="mil-contact-form-container-button">
          <button type="submit" className={`mil-contact-form-button ${allFilled || isSubmiting ? "mil-contact-form-button-border" : "mil-contact-form-button-no-border"}`}>
            {isSubmiting ? (
              <Spinner/>
            ) : (
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
