module.exports = {

"[project]/components/Headder.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-ssr] (ecmascript) <export default as ShoppingCart>");
;
;
const Header = ({ cartItemCount, onCartClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "bg-slate-900 text-white py-5 shadow-md sticky top-0 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto flex justify-between items-center px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#",
                    className: "text-3xl font-bold tracking-tight",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sky-400",
                            children: "Pro"
                        }, void 0, false, {
                            fileName: "[project]/components/Headder.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this),
                        "Health"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Headder.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onCartClick,
                    className: "relative flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-700 transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                            size: 28
                        }, void 0, false, {
                            fileName: "[project]/components/Headder.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "hidden sm:inline",
                            children: "Cart"
                        }, void 0, false, {
                            fileName: "[project]/components/Headder.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        cartItemCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full h-6 w-6 flex items-center justify-center border-2 border-slate-900",
                            children: cartItemCount
                        }, void 0, false, {
                            fileName: "[project]/components/Headder.tsx",
                            lineNumber: 19,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Headder.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Headder.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Headder.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Header;
}}),
"[project]/app/Dr_help/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
// "use client";
// const doctors = [
//   {
//     name: "Dr. Sarah Johnson",
//     specialty: "Cardiology",
//     degree: "MD - Cardiology and Interventional Cardiology",
//     location: "Atlanta, Georgia, USA",
//     image:
//       "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg",
//   },
//   {
//     name: "Dr. Michael Chen",
//     specialty: "Hematology",
//     degree: "MD - Hematology and Medical Oncology",
//     location: "Savannah, Georgia, USA",
//     image:
//       "https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg",
//   },
//   {
//     name: "Dr. Emily Rodriguez",
//     specialty: "Pulmonology",
//     degree: "MD - Pulmonary Disease and Critical Care Medicine",
//     location: "Augusta, Georgia, USA",
//     image:
//       "https://img.freepik.com/free-photo/portrait-smiling-female-doctor-standing-with-laptop-computer-medical-office_1301-7807.jpg",
//   },
//   {
//     name: "Dr. James Wilson",
//     specialty: "Cardiology",
//     degree: "MD - Cardiovascular Disease and Internal Medicine",
//     location: "Macon, Georgia, USA",
//     image:
//       "https://img.freepik.com/free-photo/medical-workers-covid-19-vaccination-concept-confident-professional-doctor-male-nurse-blue-scrubs-show-thumbs-up-recommend-clinic-service-guarantee-quality-assurance_1258-57360.jpg",
//   },
// ];
// const DrHelpPage = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       {/* Header Section */}
//       <div className="bg-black text-white py-8">
//         <div className="container mx-auto text-center">
//           <h1 className="text-4xl font-bold">Professional Help</h1>
//           <p className="mt-4 text-lg">
//             Get professional help from our experienced doctors.
//           </p>
//         </div>
//       </div>
//       {/* Doctors Section */}
//       <div className="container mx-auto py-12 px-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {doctors.map((doctor, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-md rounded-lg overflow-hidden"
//             >
//               <img
//                 src={doctor.image}
//                 alt={doctor.name}
//                 className="w-full h-50 object-cover"
//               />
//               <div className="p-4">
//                 <h2 className="text-xl font-bold text-black">{doctor.name}</h2>
//                 <p className="text-sm text-gray-500">{doctor.specialty}</p>
//                 <p className="text-sm text-gray-700 mt-2">{doctor.degree}</p>
//                 <p className="text-sm text-gray-500 mt-1">{doctor.location}</p>
//                 <button className="mt-4 w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-black">
//                   Book An Appointment
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* Footer Section */}
//       <footer className="bg-black text-white py-8">
//         <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div>
//             <h3 className="text-lg font-bold">Address</h3>
//             <p className="text-sm mt-2">
//               768 5th Street - Sydney Harbor Bridge Circular City Of Sydney,
//               Australia.
//             </p>
//             <div className="flex space-x-4 mt-4">
//               <a href="#" className="text-white hover:text-gray-300">
//                 Facebook
//               </a>
//               <a href="#" className="text-white hover:text-gray-300">
//                 Twitter
//               </a>
//               <a href="#" className="text-white hover:text-gray-300">
//                 LinkedIn
//               </a>
//             </div>
//           </div>
//           <div>
//             <h3 className="text-lg font-bold">Top Links</h3>
//             <ul className="text-sm mt-2 space-y-2">
//               <li>
//                 <a href="#" className="hover:underline">
//                   Corporate Business
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline">
//                   Case Studies
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline">
//                   Marketing
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-lg font-bold">More Service</h3>
//             <ul className="text-sm mt-2 space-y-2">
//               <li>
//                 <a href="#" className="hover:underline">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline">
//                   Privacy Policy
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline">
//                   Contact Us
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="text-center mt-8 text-sm">
//           © Copyright 2023 Fdoctor - All Rights Reserved.
//         </div>
//       </footer>
//     </div>
//   );
// };
// export default DrHelpPage;
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Headder$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Headder.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"); // Added useMemo for optimization
"use client";
;
;
;
const initialDoctorsData = [
    {
        id: "1",
        name: "Dr. Sarah Johnson",
        specialty: "Cardiology",
        degree: "MD - Cardiology & Interventional Cardiology",
        location: "Atlanta, GA",
        image: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=360&h=360&fit=crop&crop=top",
        contactEmail: "sarah.j.contact@ourplatform.com",
        availability: "Mon, Wed, Fri (9 AM - 5 PM)",
        fee: 50
    },
    {
        id: "2",
        name: "Dr. Michael Chen",
        specialty: "Hematology",
        degree: "MD - Hematology & Medical Oncology",
        location: "Savannah, GA",
        image: "https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?w=360&h=360&fit=crop&crop=top",
        contactEmail: "michael.c.contact@ourplatform.com",
        availability: "Tue, Thu (10 AM - 6 PM)",
        fee: 65
    },
    {
        id: "3",
        name: "Dr. Emily Rodriguez",
        specialty: "Pulmonology",
        degree: "MD - Pulmonary Disease & Critical Care",
        location: "Augusta, GA",
        image: "https://img.freepik.com/free-photo/portrait-smiling-female-doctor-standing-with-laptop-computer-medical-office_1301-7807.jpg?w=360&h=360&fit=crop&crop=top",
        contactEmail: "emily.r.contact@ourplatform.com",
        availability: "Mon - Thu (8 AM - 4 PM)",
        fee: 55
    },
    {
        id: "4",
        name: "Dr. James Wilson",
        specialty: "Cardiology",
        degree: "MD - Cardiovascular Disease & Internal Medicine",
        location: "Macon, GA",
        image: "https://img.freepik.com/free-photo/medical-workers-covid-19-vaccination-concept-confident-professional-doctor-male-nurse-blue-scrubs-show-thumbs-up-recommend-clinic-service-guarantee-quality-assurance_1258-57360.jpg?w=360&h=360&fit=crop&crop=top",
        contactEmail: "james.w.contact@ourplatform.com",
        availability: "By Appointment Only",
        fee: 70
    },
    {
        id: "5",
        name: "Dr. Linda Miller",
        specialty: "Pediatrics",
        degree: "MD - General Pediatrics",
        location: "Columbus, GA",
        image: "https://img.freepik.com/free-photo/smiling-young-female-doctor-wearing-medical-robe-with-stethoscope-standing-with-crossed-arms-isolated-pink-wall_141793-10065.jpg?w=360&h=360&fit=crop&crop=top",
        contactEmail: "linda.m.contact@ourplatform.com",
        availability: "Mon - Fri (9 AM - 3 PM)",
        fee: 45
    }
];
const DrHelpPage = ()=>{
    const [doctors, setDoctors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialDoctorsData);
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeModal, setActiveModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedDoctor, setSelectedDoctor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // All your handler functions (handleAddToCart, handleRemoveFromCart, etc.) go here
    // ... (copy them from the App component in the Canvas)
    const handleAddToCart = (doctor)=>{
        if (!cart.find((item)=>item.id === doctor.id)) {
            setCart([
                ...cart,
                doctor
            ]);
            // Consider using a toast notification library instead of alert for better UX
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
        console.log("Contact Form Submitted:", formData);
        alert(`Message for Dr. ${formData.doctorName} sent successfully by ${formData.name}! \n(Check console for details)`);
        setActiveModal(null);
    };
    const handleCheckout = ()=>{
        if (cart.length === 0) {
            alert("Your cart is empty.");
            return;
        }
        setActiveModal('payment');
    };
    const handlePaymentSubmit = (paymentData)=>{
        console.log("Payment Data Submitted:", paymentData);
        const totalAmount = cart.reduce((sum, doc)=>sum + doc.fee, 0);
        alert(`Payment of $${totalAmount.toFixed(2)} successful for ${paymentData.cardName}! \n(Check console for details) \nAppointments booked (simulated).`);
        setCart([]);
        setActiveModal(null);
    };
    const cartTotalAmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return cart.reduce((sum, doctor)=>sum + doctor.fee, 0);
    }, [
        cart
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-slate-100 min-h-screen flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Headder$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                cartItemCount: cart.length,
                onCartClick: ()=>setActiveModal('cart')
            }, void 0, false, {
                fileName: "[project]/app/Dr_help/page.tsx",
                lineNumber: 270,
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
                                    lineNumber: 275,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg md:text-xl text-slate-300 max-w-2xl mx-auto",
                                    children: "Access experienced medical professionals. Book appointments and get the help you need, effortlessly."
                                }, void 0, false, {
                                    fileName: "[project]/app/Dr_help/page.tsx",
                                    lineNumber: 276,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Dr_help/page.tsx",
                            lineNumber: 274,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Dr_help/page.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DoctorListAndSearch, {
                        doctors: doctors,
                        onAddToCart: handleAddToCart,
                        onContact: handleOpenContactModal
                    }, void 0, false, {
                        fileName: "[project]/app/Dr_help/page.tsx",
                        lineNumber: 281,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Dr_help/page.tsx",
                lineNumber: 272,
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
                lineNumber: 284,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactDoctorModal, {
                isOpen: activeModal === 'contact',
                onClose: ()=>setActiveModal(null),
                doctor: selectedDoctor,
                onSubmit: handleContactSubmit
            }, void 0, false, {
                fileName: "[project]/app/Dr_help/page.tsx",
                lineNumber: 292,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PaymentModal, {
                isOpen: activeModal === 'payment',
                onClose: ()=>setActiveModal(null),
                amount: cartTotalAmount,
                onSubmit: handlePaymentSubmit
            }, void 0, false, {
                fileName: "[project]/app/Dr_help/page.tsx",
                lineNumber: 299,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Footer, {}, void 0, false, {
                fileName: "[project]/app/Dr_help/page.tsx",
                lineNumber: 306,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/Dr_help/page.tsx",
        lineNumber: 269,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = DrHelpPage;
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>ShoppingCart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "8",
            cy: "21",
            r: "1",
            key: "jimo8o"
        }
    ],
    [
        "circle",
        {
            cx: "19",
            cy: "21",
            r: "1",
            key: "13723u"
        }
    ],
    [
        "path",
        {
            d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
            key: "9zh506"
        }
    ]
];
const ShoppingCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("ShoppingCart", __iconNode);
;
 //# sourceMappingURL=shopping-cart.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-ssr] (ecmascript) <export default as ShoppingCart>": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ShoppingCart": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-ssr] (ecmascript)");
}}),

};

//# sourceMappingURL=_b152d27b._.js.map