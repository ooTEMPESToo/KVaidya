import { CreditCard, X } from "lucide-react";
import { useMemo, useState } from "react";
import Modal from "./Modal";
import PaymentModal from "./PaymentModal";
import { Doctor } from './types';
import Image from "next/image";

interface CartViewProps {
  cart: Doctor[];
  onRemoveFromCart: (doctorId: string) => void;
  onCheckout: () => void;
  isOpen: boolean;
  onClose: () => void;
}

const CartView: React.FC<CartViewProps> = ({ cart, onRemoveFromCart, onCheckout, isOpen, onClose }) => {
  const [isPaymentOpen, setPaymentOpen] = useState(false);

  const totalAmount = useMemo(() => {
    return cart.reduce((sum, doctor) => sum + doctor.fee, 0);
  }, [cart]);

  const handlePaymentSubmit = (paymentData: unknown) => {
    console.log("Payment submitted:", paymentData);
    onCheckout();  // Call actual checkout logic
    setPaymentOpen(false);
    onClose();     // Close cart view
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} title="Your Consultation Cart">
        {cart.length === 0 ? (
          <p className="text-slate-600 text-center py-8">Your cart is empty. Add a doctor to get started.</p>
        ) : (
          <>
            <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2">
              {cart.map((doctor) => (
                <div key={doctor.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex items-center space-x-3">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-14 h-14 rounded-md object-cover"
                      onError={(e) => (e.currentTarget.src = `https://placehold.co/60x60/E2E8F0/4A5568?text=${doctor.name.charAt(0)}`)}
                    />
                    <div>
                      <h4 className="font-semibold text-slate-700 text-sm">{doctor.name}</h4>
                      <p className="text-xs text-slate-500">{doctor.specialty}</p>
                      <p className="text-sm font-medium text-sky-600">${doctor.fee}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemoveFromCart(doctor.id)}
                    className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100 transition-colors"
                    aria-label={`Remove ${doctor.name} from cart`}
                  >
                    <X size={20} />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-slate-700">Total:</span>
                <span className="text-xl font-bold text-sky-600">${totalAmount.toFixed(2)}</span>
              </div>
              <button
                onClick={() => setPaymentOpen(true)}
                className="w-full bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors font-semibold text-base flex items-center justify-center space-x-2"
              >
                <CreditCard size={20} />
                <span>Proceed to Payment</span>
              </button>
            </div>
          </>
        )}
      </Modal>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={isPaymentOpen}
        onClose={() => setPaymentOpen(false)}
        amount={totalAmount}
        onSubmit={handlePaymentSubmit}
      />
    </>
  );
};

export default CartView;
