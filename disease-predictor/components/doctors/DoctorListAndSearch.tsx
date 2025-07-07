import { Search } from "lucide-react";
import DoctorCard from "../Dr_card";
import { useMemo, useState } from "react";
import { Doctor } from '../types';
interface DoctorListAndSearchProps {
  doctors: Doctor[];
  onAddToCart: (doctor: Doctor) => void;
  onContact: (doctor: Doctor) => void;
}
const DoctorListAndSearch: React.FC<DoctorListAndSearchProps> = ({ doctors: initialDoctors, onAddToCart, onContact }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortCriteria, setSortCriteria] = useState(""); // e.g., "name_asc", "fee_asc"
  const [filterSpecialty, setFilterSpecialty] = useState("");

  const uniqueSpecialties = useMemo(() => {
    const specialties = new Set(initialDoctors.map(doc => doc.specialty));
    return Array.from(specialties).sort();
  }, [initialDoctors]);

  const filteredAndSortedDoctors = useMemo(() => {
    let processedDoctors = [...initialDoctors];

    if (filterSpecialty) {
      processedDoctors = processedDoctors.filter(doc => doc.specialty === filterSpecialty);
    }

    if (searchTerm) {
      processedDoctors = processedDoctors.filter(
        (doctor) =>
          doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortCriteria) {
      const [key, order] = sortCriteria.split('_');
      processedDoctors.sort((a, b) => {
        let valA = a[key as keyof Doctor];
        let valB = b[key as keyof Doctor];

        if (typeof valA === 'string') valA = valA.toLowerCase();
        if (typeof valB === 'string') valB = valB.toLowerCase();
        
        // For numeric comparison (like fee)
        if (typeof valA === 'number' && typeof valB === 'number') {
            return order === "asc" ? valA - valB : valB - valA;
        }

        // For string comparison
        if (valA < valB) return order === "asc" ? -1 : 1;
        if (valA > valB) return order === "asc" ? 1 : -1;
        return 0;
      });
    }
    return processedDoctors;
  }, [searchTerm, sortCriteria, filterSpecialty, initialDoctors]);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div className="md:col-span-1">
            <label htmlFor="search" className="block text-sm font-medium text-slate-700 mb-1">Search Doctors</label>
            <div className="relative">
              <input
                type="text"
                id="search"
                placeholder="Name or specialty..."
                className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none pl-10 text-slate-700"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            </div>
          </div>
          <div>
            <label htmlFor="filterSpecialty" className="block text-sm font-medium text-slate-700 mb-1">Filter by Specialty</label>
            <select
              id="filterSpecialty"
              className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none bg-white text-slate-700"
              value={filterSpecialty}
              onChange={(e) => setFilterSpecialty(e.target.value)}
            >
              <option value="">All Specialties</option>
              {uniqueSpecialties.map(spec => <option key={spec} value={spec}>{spec}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="sort" className="block text-sm font-medium text-slate-700 mb-1">Sort by</label>
            <select
              id="sort"
              className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none bg-white text-slate-700"
              value={sortCriteria}
              onChange={(e) => setSortCriteria(e.target.value)}
            >
              <option value="">Default</option>
              <option value="name_asc">Name (A-Z)</option>
              <option value="name_desc">Name (Z-A)</option>
              <option value="fee_asc">Fee (Low to High)</option>
              <option value="fee_desc">Fee (High to Low)</option>
              <option value="specialty_asc">Specialty (A-Z)</option>
            </select>
          </div>
        </div>
      </div>

      {filteredAndSortedDoctors.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} onAddToCart={onAddToCart} onContact={onContact} />
          ))}
        </div>
      ) : (
        <p className="text-center text-slate-600 text-xl py-10">No doctors found matching your criteria.</p>
      )}
    </div>
  );
};
export default DoctorListAndSearch;