"use server";

import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";

// Initialize the Gemini client and model (Singleton pattern)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

// Use gemini-1.5-flash as it is the current standard.
// If you specifically need 2.5 (as per previous context), you can change this string back.
const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });

// 1. Efficiently extract the disease name from the report
export async function GetDiseaseNameFromReport(reportText: string) {
  try {
    const prompt = `Analyze the following medical report content and identify the primary predicted disease or diagnosis mentioned. Return ONLY the name of the disease or condition. Do not include any extra text, descriptions, or explanations.
    
    Report Content: "${reportText}"`;

    const result = await model.generateContent(prompt);
    const diseaseName = result.response.text().trim();

    if (!diseaseName) {
      return {
        success: false,
        message: "Could not identify a clear disease from the report.",
      };
    }

    return {
      success: true,
      message: diseaseName,
    };
  } catch (error) {
    console.error("Gemini Disease Name Extraction error:", error);
    return {
      success: false,
      message: "Failed to extract disease name. Please try again later.",
    };
  }
}

// 2. Generate the description using structured JSON output
export async function GetGeminiGenText(diseaseName: string) {
  try {
    const prompt = `Give a brief overview of the disease "${diseaseName}". The response must contain only two fields: "description" and "cause". The combined length of both field values should be a maximum of 3 sentences total.`;

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      // ✅ FIX: Renamed 'config' to 'generationConfig' to match the SDK type definition
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: SchemaType.OBJECT,
          properties: {
            description: {
              type: SchemaType.STRING,
              description: "A brief description of the disease.",
            },
            cause: {
              type: SchemaType.STRING,
              description: "A small cause or risk factor of the disease.",
            },
          },
          required: ["description", "cause"],
        },
      },
    });

    const response = result.response;
    const jsonText = response.text().trim();
    const data = JSON.parse(jsonText);

    const message = `<strong>Description:</strong> ${data.description} <strong>Cause:</strong> ${data.cause}.`;

    return {
      success: true,
      message: message,
    };
  } catch (error) {
    console.error("Gemini API generation error:", error);
    return {
      success: false,
      message:
        "Failed to generate information. Please ensure the disease name is valid.",
    };
  }
}
