"use client";
import React, { useState, useMemo, useEffect } from "react"; // for fallback ID generation (optional)
import { initialDoctorsData, Doctor } from '../../components/types';
import Header from "@/components/layout/Headder";
import DoctorListAndSearch from "@/components/doctors/DoctorListAndSearch";
import CartView from "@/components/CartView";
import ContactDoctorModal from "@/components/doctors/ContactDoctorModal";
import PaymentModal from "@/components/PaymentModal";
import Footer from "@/components/layout/Footer";

const API_BASE = "http://localhost:5000/api"; // Change if your backend is hosted elsewhere

const DrHelpPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [doctors, setDoctors] = useState<Doctor[]>(initialDoctorsData);
  const [cart, setCart] = useState<Doctor[]>([]);
  const [activeModal, setActiveModal] = useState<null | 'cart' | 'contact' | 'payment'>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  // Cart from localStorage (optional)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  const handleAddToCart = (doctor: Doctor) => {
    if (!cart.find(item => item.id === doctor.id)) {
      setCart([...cart, doctor]);
      alert(`${doctor.name} added to cart!`);
    } else {
      alert(`${doctor.name} is already in the cart.`);
    }
  };

  const handleRemoveFromCart = (doctorId: string) => {
    setCart(cart.filter((doctor) => doctor.id !== doctorId));
  };

  const handleOpenContactModal = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setActiveModal('contact');
  };

  // Send user query to backend API
  const handleContactSubmit = async (formData: { name: string; email: string; message: string; doctorName: string; doctorId: string; }) => {
    const newQuery = {
      doctorName: formData.doctorName,
      userEmail: formData.email,
      userName: formData.name,
      message: formData.message,
      timestamp: new Date().toISOString(),
      status: "Sent"
    };

    try {
      const res = await fetch(`${API_BASE}/user-query`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newQuery)
      });
      if (!res.ok) throw new Error("Failed to send query");

      alert(`Message for Dr. ${formData.doctorName} sent successfully by ${formData.name}!`);
      setActiveModal(null);
    } catch (error) {
      alert("Error sending message. Please try again later.");
      console.error(error);
    }
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }
    setActiveModal('payment'); // Open payment modal
  };

  const handlePaymentSubmit = (paymentData: { cardName: string; cardNumber: string; expiryDate: string; cvv: string }) => {
    const totalAmount = cart.reduce((sum, doc) => sum + doc.fee, 0);
    alert(`Payment of $${totalAmount.toFixed(2)} successful for ${paymentData.cardName}! (Simulated) \nAppointments booked (simulated).`);
    setCart([]); // Clear cart after payment
    setActiveModal(null);
  };

  const cartTotalAmount = useMemo(() => cart.reduce((sum, doctor) => sum + doctor.fee, 0), [cart]);

  return (
    <div className="bg-slate-100 min-h-screen flex flex-col">
      <Header cartItemCount={cart.length} onCartClick={() => setActiveModal('cart')} />
      <main className="flex-grow">
        <DoctorListAndSearch doctors={doctors} onAddToCart={handleAddToCart} onContact={handleOpenContactModal} />
      </main>

      <CartView
        cart={cart}
        onRemoveFromCart={handleRemoveFromCart}
        onCheckout={handleCheckout}
        isOpen={activeModal === 'cart'}
        onClose={() => setActiveModal(null)}
      />

      <ContactDoctorModal
        isOpen={activeModal === 'contact'}
        onClose={() => setActiveModal(null)}
        doctor={selectedDoctor}
        onSubmit={handleContactSubmit}
      />

      <PaymentModal
        isOpen={activeModal === 'payment'}
        onClose={() => setActiveModal(null)}
        amount={cartTotalAmount}
        onSubmit={handlePaymentSubmit}
      />
      <Footer />
    </div>
  );
};

export default DrHelpPage;
