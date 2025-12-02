// disease-predictor/app/reports/action/uploadReport.ts

import {
  GetGeminiGenText,
  GetDiseaseNameFromReport,
} from "../../predict/action/getAIGenText";
import formidable from "formidable";
import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import pdfParse from "pdf-parse";

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ message: "Form parse error" });

    const uploadedFile = Array.isArray(files.file) ? files.file[0] : files.file;

    if (!uploadedFile || !uploadedFile.filepath) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    try {
      const fileBuffer = fs.readFileSync(uploadedFile.filepath);
      const parsed = await pdfParse(fileBuffer); // ✅ PDF to text

      // 🚀 Improvement 3b: Step 1: Efficiently extract the disease name from the large text block
      const extractedDisease = await GetDiseaseNameFromReport(parsed.text);

      if (!extractedDisease.success) {
        // Return the specific error from the extraction step
        return res.status(400).json({ message: extractedDisease.message });
      }

      const diseaseName = extractedDisease.message;

      // 🚀 Improvement 3b: Step 2: Use the clean, short disease name for the descriptive summary
      const result = await GetGeminiGenText(diseaseName);

      return res.status(200).json({ response: result });
    } catch (error) {
      console.error("Error processing file:", error);
      return res.status(500).json({ message: "Error processing file" });
    }
  });
};

export default handler;
