// components/layout/Header.tsx
"use client";
import React from "react"; // Import Link for navigation
import { ShoppingCart } from "lucide-react";

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick }) => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <nav className="flex items-center space-x-6">
          {/* <Link href="/history" className="text-slate-700 hover:text-purple-600 transition-colors flex items-center space-x-1 font-medium">
            <Mail size={20} />
            <span>History</span>
          </Link> */}
          <button
            onClick={onCartClick}
            className="relative text-slate-700 hover:text-sky-600 transition-colors p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-500"
            aria-label="View Cart"
          >
            <ShoppingCart size={24} />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
