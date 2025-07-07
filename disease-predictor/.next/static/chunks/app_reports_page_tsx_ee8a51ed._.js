(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_reports_page_tsx_ee8a51ed._.js", {

"[project]/app/reports/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// "use client";
// import React, { useState, useCallback } from "react";
// import { useDropzone } from "react-dropzone";
// const ReportPage = () => {
//   const [file, setFile] = useState<File | null>(null);
//   const [message, setMessage] = useState("");
//   const [response, setResponse] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [question, setQuestion] = useState("");
//   const [fileUploaded, setFileUploaded] = useState(false);
//   const handleFileChange = (selectedFile: File | null) => {
//     if (!selectedFile) return;
//     if (selectedFile.type !== "application/pdf") {
//       setMessage("Only PDF files are allowed.");
//       return;
//     }
//     if (selectedFile.size > 5 * 1024 * 1024) {
//       setMessage("File size should be less than 5MB.");
//       return;
//     }
//     setFile(selectedFile);
//     setFileUploaded(false); // reset when user re-uploads
//     setMessage("");
//   };
//   const onDrop = useCallback((acceptedFiles: File[]) => {
//     if (acceptedFiles.length > 0) {
//       handleFileChange(acceptedFiles[0]);
//     }
//   }, []);
//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop,
//     accept: { "application/pdf": [] },
//     maxSize: 5 * 1024 * 1024,
//   });
//   const handleFileUpload = async () => {
//     if (!file) {
//       setMessage("Please upload a file.");
//       return;
//     }
//     const formData = new FormData();
//     formData.append("file", file); // ✅ KEY SHOULD BE "file"
//     try {
//       const res = await fetch("/report/action/uploadReport", {
//         method: "POST",
//         body: formData,
//       });
//       const data = await res.json();
//       console.log(data);
//       if (!res.ok) throw new Error(data.message || "Failed to upload");
//       setResponse(data.response || "File processed successfully!");
//     } catch (err) {
//       setMessage(err instanceof Error ? err.message : "Upload failed.");
//     }
//   };
//   const handleAskQuestion = async () => {
//     if (!fileUploaded) {
//       setMessage("Please upload a PDF file first.");
//       return;
//     }
//     if (!question.trim()) {
//       setMessage("Please enter a question.");
//       return;
//     }
//     setLoading(true);
//     setMessage("");
//     try {
//       const askResponse = await fetch("http://localhost:5000/ask", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ question }),
//       });
//       if (!askResponse.ok) throw new Error("Failed to get an answer.");
//       const askResult = await askResponse.json();
//       setResponse(askResult.answer);
//     } catch (error) {
//       setMessage(error instanceof Error ? error.message : "An error occurred.");
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold mb-4">Upload Medical Report</h1>
//       <div
//         {...getRootProps()}
//         className="border-2 border-dashed p-6 text-center cursor-pointer rounded-lg"
//       >
//         <input {...getInputProps()} />
//         <p className="text-gray-600">
//           Drag & drop a PDF file here, or click to select one.
//         </p>
//       </div>
//       {file && (
//         <p className="mt-2 text-gray-700 text-sm">
//           Selected file: <strong>{file.name}</strong>
//         </p>
//       )}
//       <button
//         onClick={handleFileUpload}
//         className="mt-4 w-full py-2 bg-black text-white rounded-lg"
//         disabled={loading}
//       >
//         {loading ? "Processing..." : "Upload"}
//       </button>
//       <h2 className="mt-6 text-lg font-bold">Ask a Question:</h2>
//       <input
//         type="text"
//         value={question}
//         onChange={(e) => setQuestion(e.target.value)}
//         className="w-full p-2 border rounded mt-2"
//         placeholder="Enter your question"
//       />
//       <button
//         onClick={handleAskQuestion}
//         className="mt-4 w-full py-2 bg-black text-white rounded-lg"
//         disabled={loading}
//       >
//         {loading ? "Fetching Answer..." : "Ask"}
//       </button>
//       {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
//       {response && (
//         <div className="mt-6 p-4 bg-gray-100 rounded-lg">
//           <h2 className="text-lg font-semibold mb-2">Response:</h2>
//           <p className="text-sm text-gray-800">{response}</p>
//         </div>
//       )}
//     </div>
//   );
// };
// export default ReportPage;
// app/report/page.jsx
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function Home() {
    _s();
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [summary, setSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleUpload = async ()=>{
        if (!file) return;
        const formData = new FormData();
        formData.append("file", file);
        setLoading(true);
        const res = await fetch("http://localhost:5000/upload-pdf/", {
            method: "POST",
            body: formData
        });
        const data = await res.json();
        setSummary(data.summary);
        setLoading(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded shadow w-full max-w-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-xl font-bold mb-4",
                    children: "Upload PDF for Summary"
                }, void 0, false, {
                    fileName: "[project]/app/reports/page.tsx",
                    lineNumber: 187,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "file",
                    accept: "application/pdf",
                    onChange: (e)=>setFile(e.target.files?.[0] || null),
                    className: "mb-4"
                }, void 0, false, {
                    fileName: "[project]/app/reports/page.tsx",
                    lineNumber: 188,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleUpload,
                    className: "bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700",
                    children: loading ? "Summarizing..." : "Upload & Summarize"
                }, void 0, false, {
                    fileName: "[project]/app/reports/page.tsx",
                    lineNumber: 194,
                    columnNumber: 9
                }, this),
                summary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-semibold mb-2",
                            children: "Summary:"
                        }, void 0, false, {
                            fileName: "[project]/app/reports/page.tsx",
                            lineNumber: 202,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-700 whitespace-pre-wrap",
                            children: summary
                        }, void 0, false, {
                            fileName: "[project]/app/reports/page.tsx",
                            lineNumber: 203,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/reports/page.tsx",
                    lineNumber: 201,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/reports/page.tsx",
            lineNumber: 186,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/reports/page.tsx",
        lineNumber: 185,
        columnNumber: 5
    }, this);
}
_s(Home, "/62+frFZ87jqcdXWf/LcpzX0KZ0=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_reports_page_tsx_ee8a51ed._.js.map