(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_7ed74029._.js", {

"[project]/app/Dr_help/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// "use client";
// import CartView from "@/components/CartView";
// import ContactDoctorModal from "@/components/ContactDoctorModal";
// import DoctorListAndSearch from "@/components/DoctorListAndSearch";
// import Footer from "@/components/Footer";
// import Header from "@/components/Headder";
// import PaymentModal from "@/components/PaymentModal";
// import { useState, useMemo } from "react"; // Added useMemo for optimization
// const initialDoctorsData = [
//   {
//     id: "1",
//     name: "Dr. Sarah Johnson",
//     specialty: "Cardiology",
//     degree: "MD - Cardiology & Interventional Cardiology",
//     location: "Atlanta, GA",
//     image: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=360&h=360&fit=crop&crop=top",
//     contactEmail: "sarah.j.contact@ourplatform.com", // Internal contact through platform
//     availability: "Mon, Wed, Fri (9 AM - 5 PM)",
//     fee: 50, // Consultation fee
//   },
//   {
//     id: "2",
//     name: "Dr. Michael Chen",
//     specialty: "Hematology",
//     degree: "MD - Hematology & Medical Oncology",
//     location: "Savannah, GA",
//     image: "https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?w=360&h=360&fit=crop&crop=top",
//     contactEmail: "michael.c.contact@ourplatform.com",
//     availability: "Tue, Thu (10 AM - 6 PM)",
//     fee: 65,
//   },
//   {
//     id: "3",
//     name: "Dr. Emily Rodriguez",
//     specialty: "Pulmonology",
//     degree: "MD - Pulmonary Disease & Critical Care",
//     location: "Augusta, GA",
//     image: "https://img.freepik.com/free-photo/portrait-smiling-female-doctor-standing-with-laptop-computer-medical-office_1301-7807.jpg?w=360&h=360&fit=crop&crop=top",
//     contactEmail: "emily.r.contact@ourplatform.com",
//     availability: "Mon - Thu (8 AM - 4 PM)",
//     fee: 55,
//   },
//   {
//     id: "4",
//     name: "Dr. James Wilson",
//     specialty: "Cardiology", // Same specialty for testing sort
//     degree: "MD - Cardiovascular Disease & Internal Medicine",
//     location: "Macon, GA",
//     image: "https://img.freepik.com/free-photo/medical-workers-covid-19-vaccination-concept-confident-professional-doctor-male-nurse-blue-scrubs-show-thumbs-up-recommend-clinic-service-guarantee-quality-assurance_1258-57360.jpg?w=360&h=360&fit=crop&crop=top",
//     contactEmail: "james.w.contact@ourplatform.com",
//     availability: "By Appointment Only",
//     fee: 70,
//   },
//   {
//     id: "5",
//     name: "Dr. Linda Miller",
//     specialty: "Pediatrics",
//     degree: "MD - General Pediatrics",
//     location: "Columbus, GA",
//     image: "https://img.freepik.com/free-photo/smiling-young-female-doctor-wearing-medical-robe-with-stethoscope-standing-with-crossed-arms-isolated-pink-wall_141793-10065.jpg?w=360&h=360&fit=crop&crop=top",
//     contactEmail: "linda.m.contact@ourplatform.com",
//     availability: "Mon - Fri (9 AM - 3 PM)",
//     fee: 45,
//   }
// ];
// // Types
// type Doctor = typeof initialDoctorsData[0];
// const DrHelpPage = () => { // Or whatever you name your page component
//   const [doctors, setDoctors] = useState<Doctor[]>(initialDoctorsData);
//   const [cart, setCart] = useState<Doctor[]>([]);
//   const [activeModal, setActiveModal] = useState<null | 'cart' | 'contact' | 'payment'>(null);
//   const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
//   // All your handler functions (handleAddToCart, handleRemoveFromCart, etc.) go here
//   // ... (copy them from the App component in the Canvas)
//   const handleAddToCart = (doctor: Doctor) => {
//     if (!cart.find(item => item.id === doctor.id)) {
//       setCart([...cart, doctor]);
//       // Consider using a toast notification library instead of alert for better UX
//       alert(`${doctor.name} added to cart!`);
//     } else {
//       alert(`${doctor.name} is already in the cart.`);
//     }
//   };
//   const handleRemoveFromCart = (doctorId: string) => {
//     setCart(cart.filter((doctor) => doctor.id !== doctorId));
//   };
//   const handleOpenContactModal = (doctor: Doctor) => {
//     setSelectedDoctor(doctor);
//     setActiveModal('contact');
//   };
//  const handleContactSubmit = (formData: { name: string; email: string; message: string; doctorName: string }) => {
//     console.log("Contact Form Submitted:", formData);
//     alert(`Message for Dr. ${formData.doctorName} sent successfully by ${formData.name}! \n(Check console for details)`);
//     setActiveModal(null);
//   };
//   const handleCheckout = () => {
//     if (cart.length === 0) {
//       alert("Your cart is empty.");
//       return;
//     }
//     setActiveModal('payment');
//   };
//   const handlePaymentSubmit = (paymentData: { cardName: string; cardNumber: string; expiryDate: string; cvv: string }) => {
//     console.log("Payment Data Submitted:", paymentData);
//     const totalAmount = cart.reduce((sum, doc) => sum + doc.fee, 0);
//     alert(`Payment of $${totalAmount.toFixed(2)} successful for ${paymentData.cardName}! \n(Check console for details) \nAppointments booked (simulated).`);
//     setCart([]);
//     setActiveModal(null);
//   };
//   const cartTotalAmount = useMemo(() => {
//     return cart.reduce((sum, doctor) => sum + doctor.fee, 0);
//   }, [cart]);
//   return (
//     <div className="bg-slate-100 min-h-screen flex flex-col">
//       <Header cartItemCount={cart.length} onCartClick={() => setActiveModal('cart')} />
//       <main className="flex-grow">
//         <div className="bg-slate-900 text-white py-12 md:py-16 text-center">
//             <div className="container mx-auto px-4">
//                 <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Find Your Doctor</h1>
//                 <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
//                     Access experienced medical professionals. Book appointments and get the help you need, effortlessly.
//                 </p>
//             </div>
//         </div>
//         <DoctorListAndSearch doctors={doctors} onAddToCart={handleAddToCart} onContact={handleOpenContactModal} />
//       </main>
//       <CartView
//         cart={cart}
//         onRemoveFromCart={handleRemoveFromCart}
//         onCheckout={handleCheckout}
//         isOpen={activeModal === 'cart'}
//         onClose={() => setActiveModal(null)}
//       />
//       <ContactDoctorModal
//         isOpen={activeModal === 'contact'}
//         onClose={() => setActiveModal(null)}
//         doctor={selectedDoctor}
//         onSubmit={handleContactSubmit}
//       />
//       <PaymentModal
//         isOpen={activeModal === 'payment'}
//         onClose={() => setActiveModal(null)}
//         amount={cartTotalAmount}
//         onSubmit={handlePaymentSubmit}
//       />
//       <Footer />
//     </div>
//   );
// };
// export default DrHelpPage;
// app/page.tsx
// app/page.tsx
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-browser/v4.js [app-client] (ecmascript) <export default as v4>"); // For generating unique IDs for queries
(()=>{
    const e = new Error("Cannot find module '../components/layout/Header'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../components/layout/Footer'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../components/doctors/DoctorListAndSearch'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../components/doctors/CartView'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../components/doctors/ContactDoctorModal'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../components/doctors/PaymentModal'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../components/types'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const App = ()=>{
    _s();
    const [doctors, setDoctors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialDoctorsData);
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // userQueries will be managed via Local Storage, initialized here for sending new queries
    const [userQueries, setUserQueries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeModal, setActiveModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // Removed 'queries'
    const [selectedDoctor, setSelectedDoctor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // For contact modal
    // Load cart and queries from Local Storage on initial mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const storedCart = localStorage.getItem('cart');
                if (storedCart) {
                    setCart(JSON.parse(storedCart));
                }
                const storedQueries = localStorage.getItem('userQueries');
                if (storedQueries) {
                    setUserQueries(JSON.parse(storedQueries));
                }
            }
        }
    }["App.useEffect"], []);
    // Save cart and queries to Local Storage whenever they change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.setItem('cart', JSON.stringify(cart));
            }
        }
    }["App.useEffect"], [
        cart
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.setItem('userQueries', JSON.stringify(userQueries));
            }
        }
    }["App.useEffect"], [
        userQueries
    ]);
    const handleAddToCart = (doctor)=>{
        if (!cart.find((item)=>item.id === doctor.id)) {
            setCart([
                ...cart,
                doctor
            ]);
            alert(`${doctor.name} added to cart!`);
        } else {
            alert(`${doctor.name} is already in the cart.`);
        }
    };
    const handleRemoveFromCart = (doctorId)=>{
        setCart(cart.filter((doctor)=>doctor.id !== doctorId));
    };
    const handleOpenContactModal = (doctor)=>{
        setSelectedDoctor(doctor);
        setActiveModal('contact');
    };
    const handleContactSubmit = (formData)=>{
        const newQuery = {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            doctorName: formData.doctorName,
            userEmail: formData.email,
            userName: formData.name,
            message: formData.message,
            timestamp: new Date().toISOString(),
            status: 'Sent'
        };
        setUserQueries((prevQueries)=>[
                ...prevQueries,
                newQuery
            ]); // Update local state, which will then save to Local Storage
        // --- REAL-TIME MAIL SENDING (Backend Integration Point) ---
        console.log("--- SIMULATED: Sending message to backend for email delivery ---");
        console.log("Query Details:", newQuery);
        console.log(`Backend would now send an email to ${initialDoctorsData.find((d)=>d.id === formData.doctorId)?.contactEmail || "doctor's email"}`);
        // A real application would make an API call here:
        // fetch('/api/send-email', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(newQuery),
        // })
        // .then(response => response.json())
        // .then(data => {
        //   if (data.success) {
        //     // Update status to 'Delivered' or 'Sent' based on backend response
        //     // You'd refetch or update a global state here if using a real backend
        //   } else {
        //     // Update status to 'Error'
        //   }
        // }).catch(error => {
        //   console.error("Failed to send email via backend:", error);
        // });
        // --- END OF REAL-TIME MAIL SENDING SIMULATION ---
        alert(`Message for Dr. ${formData.doctorName} sent successfully by ${formData.name}! (Simulated)`);
        setActiveModal(null);
    };
    const handleCheckout = ()=>{
        if (cart.length === 0) {
            alert("Your cart is empty.");
            return;
        }
        setActiveModal('payment'); // Open payment modal
    };
    const handlePaymentSubmit = (paymentData)=>{
        console.log("Payment Data Submitted:", paymentData);
        const totalAmount = cart.reduce((sum, doc)=>sum + doc.fee, 0);
        alert(`Payment of $${totalAmount.toFixed(2)} successful for ${paymentData.cardName}! (Simulated) \nAppointments booked (simulated).`);
        setCart([]); // Clear cart after successful payment
        setActiveModal(null);
    };
    const cartTotalAmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "App.useMemo[cartTotalAmount]": ()=>{
            return cart.reduce({
                "App.useMemo[cartTotalAmount]": (sum, doctor)=>sum + doctor.fee
            }["App.useMemo[cartTotalAmount]"], 0);
        }
    }["App.useMemo[cartTotalAmount]"], [
        cart
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-slate-100 min-h-screen flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {
                cartItemCount: cart.length,
                onCartClick: ()=>setActiveModal('cart')
            }, void 0, false, {
                fileName: "[project]/app/Dr_help/page.tsx",
                lineNumber: 303,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-grow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-900 text-white py-12 md:py-16 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl md:text-5xl font-extrabold mb-3",
                                    children: "Find Your Doctor"
                                }, void 0, false, {
                                    fileName: "[project]/app/Dr_help/page.tsx",
                                    lineNumber: 308,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg md:text-xl text-slate-300 max-w-2xl mx-auto",
                                    children: "Access experienced medical professionals. Book appointments and get the help you need, effortlessly."
                                }, void 0, false, {
                                    fileName: "[project]/app/Dr_help/page.tsx",
                                    lineNumber: 309,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Dr_help/page.tsx",
                            lineNumber: 307,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Dr_help/page.tsx",
                        lineNumber: 306,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DoctorListAndSearch, {
                        doctors: doctors,
                        onAddToCart: handleAddToCart,
                        onContact: handleOpenContactModal
                    }, void 0, false, {
                        fileName: "[project]/app/Dr_help/page.tsx",
                        lineNumber: 314,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Dr_help/page.tsx",
                lineNumber: 305,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartView, {
                cart: cart,
                onRemoveFromCart: handleRemoveFromCart,
                onCheckout: handleCheckout,
                isOpen: activeModal === 'cart',
                onClose: ()=>setActiveModal(null)
            }, void 0, false, {
                fileName: "[project]/app/Dr_help/page.tsx",
                lineNumber: 331,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactDoctorModal, {
                isOpen: activeModal === 'contact',
                onClose: ()=>setActiveModal(null),
                doctor: selectedDoctor,
                onSubmit: handleContactSubmit
            }, void 0, false, {
                fileName: "[project]/app/Dr_help/page.tsx",
                lineNumber: 339,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PaymentModal, {
                isOpen: activeModal === 'payment',
                onClose: ()=>setActiveModal(null),
                amount: cartTotalAmount,
                onSubmit: handlePaymentSubmit
            }, void 0, false, {
                fileName: "[project]/app/Dr_help/page.tsx",
                lineNumber: 346,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Footer, {}, void 0, false, {
                fileName: "[project]/app/Dr_help/page.tsx",
                lineNumber: 355,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/Dr_help/page.tsx",
        lineNumber: 301,
        columnNumber: 5
    }, this);
};
_s(App, "eoSXVCGyIYXIW2ObU75zKbnYR28=");
_c = App;
const __TURBOPACK__default__export__ = App;
var _c;
__turbopack_context__.k.register(_c, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/uuid/dist/esm-browser/native.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const __TURBOPACK__default__export__ = {
    randomUUID
};
}}),
"[project]/node_modules/uuid/dist/esm-browser/rng.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>rng)
});
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    if (!getRandomValues) {
        if (typeof crypto === 'undefined' || !crypto.getRandomValues) {
            throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
        }
        getRandomValues = crypto.getRandomValues.bind(crypto);
    }
    return getRandomValues(rnds8);
}
}}),
"[project]/node_modules/uuid/dist/esm-browser/regex.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
}}),
"[project]/node_modules/uuid/dist/esm-browser/validate.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-browser/regex.js [app-client] (ecmascript)");
;
function validate(uuid) {
    return typeof uuid === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].test(uuid);
}
const __TURBOPACK__default__export__ = validate;
}}),
"[project]/node_modules/uuid/dist/esm-browser/stringify.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "unsafeStringify": (()=>unsafeStringify)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-browser/validate.js [app-client] (ecmascript)");
;
const byteToHex = [];
for(let i = 0; i < 256; ++i){
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
const __TURBOPACK__default__export__ = stringify;
}}),
"[project]/node_modules/uuid/dist/esm-browser/v4.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$native$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-browser/native.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$rng$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-browser/rng.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-browser/stringify.js [app-client] (ecmascript)");
;
;
;
function v4(options, buf, offset) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$native$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].randomUUID && !buf && !options) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$native$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].randomUUID();
    }
    options = options || {};
    const rnds = options.random ?? options.rng?.() ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$rng$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    if (rnds.length < 16) {
        throw new Error('Random bytes length must be >= 16');
    }
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80;
    if (buf) {
        offset = offset || 0;
        if (offset < 0 || offset + 16 > buf.length) {
            throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
        }
        for(let i = 0; i < 16; ++i){
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unsafeStringify"])(rnds);
}
const __TURBOPACK__default__export__ = v4;
}}),
"[project]/node_modules/uuid/dist/esm-browser/v4.js [app-client] (ecmascript) <export default as v4>": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "v4": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-browser/v4.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_7ed74029._.js.map