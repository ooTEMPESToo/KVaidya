"use client";
import React, { useState, useEffect } from "react";
import Modal from "../Modal";
import { Doctor } from "../types";
import emailjs from "emailjs-com";

interface ContactDoctorModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctor: Doctor | null;
  onSubmit?: (formData: {
    name: string;
    email: string;
    message: string;
    doctorName: string;
    doctorId: string;
  }) => void;
}

const ContactDoctorModal: React.FC<ContactDoctorModalProps> = ({
  isOpen,
  onClose,
  doctor,
  onSubmit,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData({ name: "", email: "", message: "" });
    }
  }, [isOpen, doctor]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!doctor) return;

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      message: formData.message,
      doctor_email: doctor.contactEmail,
      doctor_name: doctor.name,
    };

    try {
      setLoading(true);
      await emailjs.send(
        "service_rxo5sbj", // Replace with your actual EmailJS service ID
        "template_jdeya7f", // Replace with your template ID
        templateParams,
        "3BR7oT5KrIpRMl_3T" // Replace with your EmailJS public key
      );
      alert("Message sent successfully!");
      if (onSubmit) {
        onSubmit({
          ...formData,
          doctorName: doctor.name,
          doctorId: doctor.id,
        });
      }
      onClose();
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!doctor) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Contact Dr. ${doctor.name}`}
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <p className="text-sm text-slate-600">
          Your message will be securely sent to Dr. {doctor.name}. They will
          respond to your email address.
        </p>

        <div>
          <label
            htmlFor="contactName"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="contactName"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none text-slate-700"
            required
          />
        </div>

        <div>
          <label
            htmlFor="contactEmail"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            Your Email
          </label>
          <input
            type="email"
            name="email"
            id="contactEmail"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none text-slate-700"
            required
          />
        </div>

        <div>
          <label
            htmlFor="contactMessage"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            Message
          </label>
          <textarea
            name="message"
            id="contactMessage"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none text-slate-700"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-sky-500 text-white py-3 px-6 rounded-lg hover:bg-sky-600 transition-colors font-semibold text-base ${
            loading ? "opacity-60 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </Modal>
  );
};

export default ContactDoctorModal;
