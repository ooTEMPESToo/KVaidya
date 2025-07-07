import { GetGeminiGenText } from "../../predict/action/getAIGenText";
import formidable from "formidable";
import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import pdfParse from "pdf-parse"; // npm install pdf-parse

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

  form.parse(
    req,
    async (err, fields, files) => {
      if (err) return res.status(500).json({ message: "Form parse error" });

      const uploadedFile = Array.isArray(files.file)
        ? files.file[0]
        : files.file;

      if (!uploadedFile || !uploadedFile.filepath) {
        return res.status(400).json({ message: "No file uploaded" });
      }

      try {
        const fileBuffer = fs.readFileSync(uploadedFile.filepath);
        const parsed = await pdfParse(fileBuffer); // ✅ PDF to text

        const result = await GetGeminiGenText(parsed.text); // ✅ Send plain text to Gemini
        return res.status(200).json({ response: result });
      } catch (error) {
        console.error("Error processing file:", error);
        return res.status(500).json({ message: "Error processing file" });
      }
    }
  );
};

export default handler;
