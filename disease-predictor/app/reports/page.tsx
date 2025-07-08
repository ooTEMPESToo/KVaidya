"use client";
import { useState, ChangeEvent, FormEvent } from "react"; // Import event types
import Head from "next/head";

export default function AnalyzeReportPage() {
  const [file, setFile] = useState<File | null>(null); // Type for file state
  const [question, setQuestion] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // Type the event parameter for file input
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    } else {
      setFile(null); // Handle case where no file is selected or files array is empty
    }
    setResponse(""); // Clear previous response
    setError(""); // Clear previous error
  };

  // Type the event parameter for textarea
  const handleQuestionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion(event.target.value);
  };

  // Type the event parameter for form submission
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file) {
      setError("Please select a PDF file.");
      return;
    }
    if (!question.trim()) {
      setError("Please enter your question about the report.");
      return;
    }

    setIsLoading(true);
    setResponse("");
    setError("");

    const formData = new FormData();
    formData.append("pdf", file);
    formData.append("question", question);
//
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/analyze-report`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setResponse(data.response);
      } else {
        setError(data.error || "An unknown error occurred.");
      }
    } catch (err) {
      console.error("Frontend fetch error:", err);
      setError(
        "Failed to connect to the backend or an unexpected error occurred. Please ensure the backend server is running."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <Head>
        <title>Medical Report Analyzer</title>
      </Head>

      <h1 className="text-2xl font-bold mb-4 text-center">
        Medical Report Analyzer
      </h1>

      <p className="text-sm text-red-600 border-l-4 border-red-400 pl-4 mb-6">
        <strong>DISCLAIMER:</strong> This tool ML model to answer questions about
        medical reports. The information provided is <u>NOT</u> a substitute for
        professional medical advice, diagnosis, or treatment. Always seek the
        advice of your physician or other qualified healthcare provider.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="pdfFile" className="block text-sm font-medium mb-1">
            Upload PDF Report:
          </label>
          <input
            type="file"
            id="pdfFile"
            accept=".pdf"
            onChange={handleFileChange}
            required
            className="w-full border-2 border-dashed border-gray-300 p-3 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="question" className="block text-sm font-medium mb-1">
            Your Question About the Report:
          </label>
          <textarea
            id="question"
            value={question}
            onChange={handleQuestionChange}
            placeholder="e.g., What was the blood pressure reading?"
            rows={4}
            required
            className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-2 rounded-md font-semibold text-white transition-colors ${
            isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-black hover:bg-gray-500"
          }`}
        >
          {isLoading ? "Analyzing..." : "Analyze Report"}
        </button>
      </form>

      {error && (
        <div className="mt-6 p-4 border border-red-300 bg-red-50 text-red-700 rounded-md">
          <strong>Error:</strong> {error}
        </div>
      )}

      {response && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Analysis Result:</h2>
          <p className="text-sm text-gray-800 whitespace-pre-line">
            {response.replace(/[*`_>-]/g, "").trim()}
          </p>
        </div>
      )}
    </div>
  );
}
