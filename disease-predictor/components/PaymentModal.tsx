/* eslint-disable prefer-const */
import { useEffect, useState } from "react";
import Modal from "./Modal";
interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  onSubmit: (paymentData: { cardName: string; cardNumber: string; expiryDate: string; cvv: string }) => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, amount, onSubmit }) => {
  const [paymentData, setPaymentData] = useState({ cardName: "", cardNumber: "", expiryDate: "", cvv: "" });

   useEffect(() => {
    if (isOpen) {
      setPaymentData({ cardName: "", cardNumber: "", expiryDate: "", cvv: "" });
    }
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    // Basic formatting for card number and expiry
    if (name === "cardNumber") {
      value = value.replace(/\D/g, "").replace(/(.{4})/g, '$1 ').trim().slice(0, 19);
    } else if (name === "expiryDate") {
      value = value.replace(/\D/g, "").replace(/(.{2})/, '$1/').trim().slice(0, 5);
    } else if (name === "cvv") {
      value = value.replace(/\D/g, "").slice(0, 4);
    }
    setPaymentData({ ...paymentData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!paymentData.cardName.trim() || !paymentData.cardNumber.trim() || !paymentData.expiryDate.trim() || !paymentData.cvv.trim()) {
        alert("Please fill in all payment details.");
        return;
    }
    if (paymentData.cardNumber.replace(/\s/g, '').length < 13 || paymentData.cardNumber.replace(/\s/g, '').length > 16) {
        alert("Please enter a valid card number.");
        return;
    }
    if (!/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(paymentData.expiryDate)) {
        alert("Please enter a valid expiry date (MM/YY).");
        return;
    }
     if (paymentData.cvv.length < 3 || paymentData.cvv.length > 4) {
        alert("Please enter a valid CVV.");
        return;
    }
    onSubmit(paymentData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Secure Payment">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="bg-sky-50 p-4 rounded-lg border border-sky-200">
            <p className="text-center text-slate-700">
                You are paying: <span className="font-bold text-sky-600 text-xl">${amount.toFixed(2)}</span>
            </p>
        </div>
        <div>
          <label htmlFor="cardName" className="block text-sm font-medium text-slate-700 mb-1">Name on Card</label>
          <input
            type="text"
            name="cardName"
            id="cardName"
            value={paymentData.cardName}
            onChange={handleChange}
            className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none text-slate-700"
            required
          />
        </div>
        <div>
          <label htmlFor="cardNumber" className="block text-sm font-medium text-slate-700 mb-1">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            id="cardNumber"
            placeholder="0000 0000 0000 0000"
            value={paymentData.cardNumber}
            onChange={handleChange}
            className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none text-slate-700"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="expiryDate" className="block text-sm font-medium text-slate-700 mb-1">Expiry Date</label>
            <input
              type="text"
              name="expiryDate"
              id="expiryDate"
              placeholder="MM/YY"
              value={paymentData.expiryDate}
              onChange={handleChange}
              className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none text-slate-700"
              required
            />
          </div>
          <div>
            <label htmlFor="cvv" className="block text-sm font-medium text-slate-700 mb-1">CVV</label>
            <input
              type="text"
              name="cvv"
              id="cvv"
              placeholder="123"
              value={paymentData.cvv}
              onChange={handleChange}
              className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none text-slate-700"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors font-semibold text-base"
        >
          Pay ${amount.toFixed(2)}
        </button>
         <p className="text-xs text-slate-500 text-center mt-2">
            Your payment is processed securely. This is a demo form.
        </p>
      </form>
    </Modal>
    
  );
};
export default PaymentModal;