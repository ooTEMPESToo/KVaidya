"use client";

import { useState, ChangeEvent, FormEvent } from "react";
// Removed import Head from "next/head"; as it is not supported in Next.js App Router
import {
  FileText,
  UploadCloud,
  CheckCircle,
  AlertCircle,
  BrainCircuit,
} from "lucide-react";
import ReportChat from "../../components/ReportChat"; // Ensure this path is correct

export default function AnalyzeReportPage() {
  const [file, setFile] = useState<File | null>(null);
  const [question, setQuestion] = useState<string>("");
  const [response, setResponse] = useState<{
    confidence_score: number;
    primary_diagnosis: string;
    summary: string;
    user_question_answer: string;
    key_findings?: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const suggestedQuestions = [
    "What is the primary diagnosis?",
    "Are there any critical values in the blood test?",
    "Summarize the doctor's notes.",
    "What medications are prescribed?",
  ];

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
      setError("");
    }
  };

  const handleQuestionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion(event.target.value);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuestion(suggestion);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file) {
      setError("Please select a PDF file first.");
      return;
    }
    if (!question.trim()) {
      setError("Please enter a question.");
      return;
    }

    setIsLoading(true);
    setResponse(null);
    setError("");

    const formData = new FormData();
    formData.append("pdf", file);
    formData.append("question", question);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:5000";

      const res = await fetch(`${apiUrl}/api/analyze-report`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setResponse(data.data || data.response);
      } else {
        setError(data.error || "An error occurred while analyzing the report.");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError(
        "Failed to connect to the analysis server. Please check your connection."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="bg-blue-100 p-4 rounded-full">
              <BrainCircuit className="h-12 w-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Medical Report Intelligence
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Upload your medical documents and get instant, AI-powered insights.
          </p>
        </div>

        {/* Disclaimer Alert */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md shadow-sm max-w-4xl mx-auto">
          <div className="flex items-start">
            <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
            <p className="text-sm text-yellow-800">
              <strong>Medical Disclaimer:</strong> This tool uses Artificial
              Intelligence. Results are for informational purposes only.
            </p>
          </div>
        </div>

        {/* Main Grid Layout 
          - md:grid-cols-2 creates two columns on medium screens and up.
          - items-stretch ensures both children (Form and Result) have the same height.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Left Column: Upload Form */}
          <div className="flex flex-col h-full">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 h-full flex flex-col">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <UploadCloud className="mr-2 h-5 w-5 text-blue-600" />
                Upload & Analyze
              </h2>

              <form
                onSubmit={handleSubmit}
                className="space-y-6 flex-1 flex flex-col"
              >
                {/* File Upload */}
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Report PDF
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl hover:border-blue-500 transition-colors bg-gray-50 hover:bg-blue-50 group cursor-pointer relative h-32">
                    <input
                      id="pdfFile"
                      name="pdfFile"
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="space-y-1 text-center flex flex-col justify-center h-full">
                      {file ? (
                        <div className="flex flex-col items-center">
                          <CheckCircle className="mx-auto h-8 w-8 text-green-500" />
                          <p className="mt-1 text-sm text-gray-900 font-medium truncate w-48">
                            {file.name}
                          </p>
                        </div>
                      ) : (
                        <>
                          <UploadCloud className="mx-auto h-8 w-8 text-gray-400 group-hover:text-blue-500 transition-colors" />
                          <div className="flex text-xs text-gray-600 justify-center mt-2">
                            <span className="font-medium text-blue-600">
                              Click to upload
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Question Input */}
                <div className="flex-1">
                  <label
                    htmlFor="question"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Your Question
                  </label>
                  <div className="relative">
                    <textarea
                      id="question"
                      value={question}
                      onChange={handleQuestionChange}
                      placeholder="e.g., Is this serious?"
                      rows={3}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow resize-none text-gray-900 placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Chips */}
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.slice(0, 2).map((q, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSuggestionClick(q)}
                      className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full hover:bg-blue-100 transition-colors border border-blue-100"
                    >
                      {q}
                    </button>
                  ))}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3.5 px-4 rounded-xl shadow-sm text-sm font-bold text-white transition-all transform hover:scale-[1.01] mt-auto ${
                    isLoading
                      ? "bg-blue-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  }`}
                >
                  {isLoading ? "Processing..." : "Analyze Report"}
                </button>
              </form>

              {/* Error Alert */}
              {error && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                  {error}
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Analysis Result */}
          <div className="flex flex-col h-full">
            <div
              className={`bg-white rounded-2xl shadow-xl border border-gray-100 h-full flex flex-col overflow-hidden ${
                !response ? "justify-center items-center" : ""
              }`}
            >
              {!response ? (
                // Empty State
                <div className="text-center p-8 opacity-50">
                  <FileText className="h-20 w-20 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-gray-900">
                    Waiting for Report
                  </h3>
                  <p className="text-gray-500 mt-2">
                    Analysis results will appear here
                  </p>
                </div>
              ) : (
                // Result Content
                <div className="flex flex-col h-full">
                  <div className="bg-gradient-to-r from-green-600 to-teal-600 px-6 py-4 flex-shrink-0">
                    <h2 className="text-white font-bold flex items-center text-lg">
                      <CheckCircle className="mr-2 h-5 w-5" />
                      Findings
                    </h2>
                  </div>

                  <div className="p-6 space-y-5 overflow-y-auto flex-1">
                    {typeof response === "object" &&
                    response.confidence_score ? (
                      <>
                        <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                          <span className="text-sm text-gray-500 font-medium">
                            AI Confidence
                          </span>
                          <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-bold rounded-full">
                            {response.confidence_score}%
                          </span>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                          <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">
                            Primary Diagnosis
                          </p>
                          <p className="text-lg text-indigo-700 font-bold">
                            {response.primary_diagnosis || "N/A"}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-2">
                            Summary
                          </p>
                          <p className="text-sm text-gray-700 leading-relaxed bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                            {response.summary}
                          </p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                          <h3 className="text-sm font-bold text-blue-900 mb-2">
                            Answer:
                          </h3>
                          <p className="text-sm text-blue-800 leading-relaxed">
                            {response.user_question_answer}
                          </p>
                        </div>
                      </>
                    ) : (
                      // Plain Text Fallback
                      <div className="prose prose-sm prose-blue text-gray-700">
                        <p className="whitespace-pre-line">
                          {typeof response === "string"
                            ? response
                            : JSON.stringify(response)}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Row: Chat Interface */}
        {/* Only show chat if we have a response, or always show it if you prefer */}
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pl-2 border-l-4 border-indigo-600">
            Have Follow-up Questions?
          </h2>
          {/* Pass the summary or diagnosis as context to the chat */}
          <ReportChat
            contextData={
              response
                ? JSON.stringify({
                    diagnosis: response.primary_diagnosis,
                    summary: response.summary,
                    findings: response.key_findings,
                  })
                : null
            }
          />
        </div>
      </div>
    </div>
  );
}
