import { Mail, ShoppingCart } from "lucide-react";
import { Doctor } from './types';
import Image from "next/image";
interface DoctorCardProps {
  doctor: Doctor;
  onAddToCart: (doctor: Doctor) => void;
  onContact: (doctor: Doctor) => void;
}
const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, onAddToCart, onContact }) => {
  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
      <Image
        src={doctor.image || `https://placehold.co/400x300/E2E8F0/4A5568?text=${doctor.name.split(' ')[1]}`}
        alt={`Photo of ${doctor.name}`}
        className="w-full h-56 object-cover"
        onError={(e) => (e.currentTarget.src = `https://placehold.co/400x300/E2E8F0/4A5568?text=Image+Error`)}
      />
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-800">{doctor.name}</h3>
        <p className="text-sky-600 font-medium text-sm">{doctor.specialty}</p>
        <p className="text-xs text-slate-600 mt-1 mb-2 flex-grow">{doctor.degree}</p>
        <p className="text-xs text-slate-500"><span className="font-medium">Location:</span> {doctor.location}</p>
        <p className="text-xs text-slate-500"><span className="font-medium">Availability:</span> {doctor.availability}</p>
        <p className="text-lg font-semibold text-slate-700 mt-2 mb-3">${doctor.fee}<span className="text-xs font-normal"> / consultation</span></p>
        <div className="mt-auto space-y-2">
          <button
            onClick={() => onAddToCart(doctor)}
            className="w-full bg-sky-500 text-white py-2.5 px-4 rounded-md hover:bg-sky-600 transition-colors font-medium text-sm flex items-center justify-center space-x-2"
          >
            <ShoppingCart size={18} />
            <span>Book Appointment</span>
          </button>
          <button
            onClick={() => onContact(doctor)}
            className="w-full bg-slate-200 text-slate-700 py-2.5 px-4 rounded-md hover:bg-slate-300 transition-colors font-medium text-sm flex items-center justify-center space-x-2"
          >
            <Mail size={18} />
            <span>Contact Doctor</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;