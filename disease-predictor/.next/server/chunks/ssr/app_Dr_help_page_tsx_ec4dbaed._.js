module.exports = {

"[project]/app/Dr_help/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
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
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'uuid'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
    const e = new Error("Cannot find module '../components/communication/QueryStatusAndCommunication'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../components/types'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
;
;
const App = ()=>{
    const [doctors, setDoctors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialDoctorsData);
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [userQueries, setUserQueries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]); // NEW STATE for tracking queries
    const [activeModal, setActiveModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null); // Added 'queries'
    const [selectedDoctor, setSelectedDoctor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null); // For contact modal
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
    // Modified to handle saving query data
    const handleContactSubmit = (formData)=>{
        const newQuery = {
            id: uuidv4(),
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
            ]);
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
        //     setUserQueries(prev => prev.map(q => q.id === newQuery.id ? { ...q, status: 'Delivered' } : q));
        //   } else {
        //     setUserQueries(prev => prev.map(q => q.id === newQuery.id ? { ...q, status: 'Error' } : q));
        //   }
        // }).catch(error => {
        //   console.error("Failed to send email via backend:", error);
        //   setUserQueries(prev => prev.map(q => q.id === newQuery.id ? { ...q, status: 'Error' } : q));
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
    const handleSimulateDoctorReply = (queryId, replyMessage)=>{
        setUserQueries((prevQueries)=>prevQueries.map((query)=>query.id === queryId ? {
                    ...query,
                    status: 'Doctor Replied (Simulated)',
                    doctorReply: replyMessage
                } : query));
        alert("Doctor's reply simulated!");
    // In a real app, this would happen via a backend webhook or polling for replies
    };
    const cartTotalAmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return cart.reduce((sum, doctor)=>sum + doctor.fee, 0);
    }, [
        cart
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-slate-100 min-h-screen flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {
                cartItemCount: cart.length,
                onCartClick: ()=>setActiveModal('cart')
            }, void 0, false, {
                fileName: "[project]/app/Dr_help/page.tsx",
                lineNumber: 287,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-grow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-900 text-white py-12 md:py-16 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl md:text-5xl font-extrabold mb-3",
                                    children: "Find Your Doctor"
                                }, void 0, false, {
                                    fileName: "[project]/app/Dr_help/page.tsx",
                                    lineNumber: 292,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg md:text-xl text-slate-300 max-w-2xl mx-auto",
                                    children: "Access experienced medical professionals. Book appointments and get the help you need, effortlessly."
                                }, void 0, false, {
                                    fileName: "[project]/app/Dr_help/page.tsx",
                                    lineNumber: 293,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Dr_help/page.tsx",
                            lineNumber: 291,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Dr_help/page.tsx",
                        lineNumber: 290,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DoctorListAndSearch, {
                        doctors: doctors,
                        onAddToCart: handleAddToCart,
                        onContact: handleOpenContactModal
                    }, void 0, false, {
                        fileName: "[project]/app/Dr_help/page.tsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-12 bg-slate-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto px-4 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold text-slate-800 mb-6",
                                    children: "Your Communication History"
                                }, void 0, false, {
                                    fileName: "[project]/app/Dr_help/page.tsx",
                                    lineNumber: 303,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveModal('queries'),
                                    className: "bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-semibold text-base flex items-center justify-center mx-auto space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Mail, {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/app/Dr_help/page.tsx",
                                            lineNumber: 308,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "View Sent Messages"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Dr_help/page.tsx",
                                            lineNumber: 309,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Dr_help/page.tsx",
                                    lineNumber: 304,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Dr_help/page.tsx",
                            lineNumber: 302,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Dr_help/page.tsx",
                        lineNumber: 301,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Dr_help/page.tsx",
                lineNumber: 289,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CartView, {
                cart: cart,
                onRemoveFromCart: handleRemoveFromCart,
                onCheckout: handleCheckout,
                isOpen: activeModal === 'cart',
                onClose: ()=>setActiveModal(null)
            }, void 0, false, {
                fileName: "[project]/app/Dr_help/page.tsx",
                lineNumber: 315,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactDoctorModal, {
                isOpen: activeModal === 'contact',
                onClose: ()=>setActiveModal(null),
                doctor: selectedDoctor,
                onSubmit: handleContactSubmit
            }, void 0, false, {
                fileName: "[project]/app/Dr_help/page.tsx",
                lineNumber: 323,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PaymentModal, {
                isOpen: activeModal === 'payment',
                onClose: ()=>setActiveModal(null),
                amount: cartTotalAmount,
                onSubmit: handlePaymentSubmit
            }, void 0, false, {
                fileName: "[project]/app/Dr_help/page.tsx",
                lineNumber: 330,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
                isOpen: activeModal === 'queries',
                onClose: ()=>setActiveModal(null),
                title: "Your Message Queries",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(QueryStatusAndCommunication, {
                    userQueries: userQueries,
                    onSimulateDoctorReply: handleSimulateDoctorReply
                }, void 0, false, {
                    fileName: "[project]/app/Dr_help/page.tsx",
                    lineNumber: 343,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/Dr_help/page.tsx",
                lineNumber: 338,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Footer, {}, void 0, false, {
                fileName: "[project]/app/Dr_help/page.tsx",
                lineNumber: 349,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/Dr_help/page.tsx",
        lineNumber: 286,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = App;
}}),

};

//# sourceMappingURL=app_Dr_help_page_tsx_ec4dbaed._.js.map