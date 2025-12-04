module.exports = {

"[project]/app/predict/action/getAIGenText.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"40811266e1304ae22aa97b4e07d888f20ae1ec5024":"GetGeminiGenText","40c8b762f915ad79a2bbbd4f8ea333b52d9542cd91":"GetDiseaseNameFromReport"} */ __turbopack_context__.s({
    "GetDiseaseNameFromReport": (()=>GetDiseaseNameFromReport),
    "GetGeminiGenText": (()=>GetGeminiGenText)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/generative-ai/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
// Initialize the Gemini client and model (Singleton pattern)
const genAI = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](process.env.GEMINI_API_KEY);
// Use gemini-1.5-flash as it is the current standard.
// If you specifically need 2.5 (as per previous context), you can change this string back.
const model = genAI.getGenerativeModel({
    model: "gemini-2.5-pro"
});
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ GetDiseaseNameFromReport(reportText) {
    try {
        const prompt = `Analyze the following medical report content and identify the primary predicted disease or diagnosis mentioned. Return ONLY the name of the disease or condition. Do not include any extra text, descriptions, or explanations.
    
    Report Content: "${reportText}"`;
        const result = await model.generateContent(prompt);
        const diseaseName = result.response.text().trim();
        if (!diseaseName) {
            return {
                success: false,
                message: "Could not identify a clear disease from the report."
            };
        }
        return {
            success: true,
            message: diseaseName
        };
    } catch (error) {
        console.error("Gemini Disease Name Extraction error:", error);
        return {
            success: false,
            message: "Failed to extract disease name. Please try again later."
        };
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ GetGeminiGenText(diseaseName) {
    try {
        const prompt = `Give a brief overview of the disease "${diseaseName}". The response must contain only two fields: "description" and "cause". The combined length of both field values should be a maximum of 3 sentences total.`;
        const result = await model.generateContent({
            contents: [
                {
                    role: "user",
                    parts: [
                        {
                            text: prompt
                        }
                    ]
                }
            ],
            // ✅ FIX: Renamed 'config' to 'generationConfig' to match the SDK type definition
            generationConfig: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SchemaType"].OBJECT,
                    properties: {
                        description: {
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SchemaType"].STRING,
                            description: "A brief description of the disease."
                        },
                        cause: {
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SchemaType"].STRING,
                            description: "A small cause or risk factor of the disease."
                        }
                    },
                    required: [
                        "description",
                        "cause"
                    ]
                }
            }
        });
        const response = result.response;
        const jsonText = response.text().trim();
        const data = JSON.parse(jsonText);
        const message = `<strong>Description:</strong> ${data.description} <strong>Cause:</strong> ${data.cause}.`;
        return {
            success: true,
            message: message
        };
    } catch (error) {
        console.error("Gemini API generation error:", error);
        return {
            success: false,
            message: "Failed to generate information. Please ensure the disease name is valid."
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    GetDiseaseNameFromReport,
    GetGeminiGenText
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(GetDiseaseNameFromReport, "40c8b762f915ad79a2bbbd4f8ea333b52d9542cd91", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(GetGeminiGenText, "40811266e1304ae22aa97b4e07d888f20ae1ec5024", null);
}}),
"[project]/.next-internal/server/app/predict/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/predict/action/getAIGenText.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
;
}}),
"[project]/.next-internal/server/app/predict/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/predict/action/getAIGenText.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$predict$2f$action$2f$getAIGenText$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/predict/action/getAIGenText.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$predict$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$predict$2f$action$2f$getAIGenText$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/predict/page/actions.js { ACTIONS_MODULE0 => "[project]/app/predict/action/getAIGenText.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/predict/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/predict/action/getAIGenText.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "40811266e1304ae22aa97b4e07d888f20ae1ec5024": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$predict$2f$action$2f$getAIGenText$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GetGeminiGenText"]),
    "40c8b762f915ad79a2bbbd4f8ea333b52d9542cd91": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$predict$2f$action$2f$getAIGenText$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GetDiseaseNameFromReport"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$predict$2f$action$2f$getAIGenText$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/predict/action/getAIGenText.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$predict$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$predict$2f$action$2f$getAIGenText$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/predict/page/actions.js { ACTIONS_MODULE0 => "[project]/app/predict/action/getAIGenText.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/predict/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/predict/action/getAIGenText.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "40811266e1304ae22aa97b4e07d888f20ae1ec5024": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$predict$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$predict$2f$action$2f$getAIGenText$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40811266e1304ae22aa97b4e07d888f20ae1ec5024"]),
    "40c8b762f915ad79a2bbbd4f8ea333b52d9542cd91": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$predict$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$predict$2f$action$2f$getAIGenText$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40c8b762f915ad79a2bbbd4f8ea333b52d9542cd91"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$predict$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$predict$2f$action$2f$getAIGenText$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/predict/page/actions.js { ACTIONS_MODULE0 => "[project]/app/predict/action/getAIGenText.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$predict$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$predict$2f$action$2f$getAIGenText$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/predict/page/actions.js { ACTIONS_MODULE0 => "[project]/app/predict/action/getAIGenText.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
}}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/app/predict/page.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/predict/page.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/predict/page.tsx <module evaluation>", "default");
}}),
"[project]/app/predict/page.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/predict/page.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/predict/page.tsx", "default");
}}),
"[project]/app/predict/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$predict$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/predict/page.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$predict$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/app/predict/page.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$predict$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/app/predict/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/predict/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_2c1056b0._.js.map