// components/communication/QueryStatusAndCommunication.tsx
"use client";
import React, { useState } from "react";
import { Mail, ChevronDown, ChevronUp, Clock, CheckCircle, XCircle, MessageSquare } from 'lucide-react';
import Modal from './Modal';
import { UserQuery } from './types'; // Import UserQuery type

interface QueryStatusAndCommunicationProps {
  userQueries: UserQuery[];
  onSimulateDoctorReply: (queryId: string, replyMessage: string) => void;
}

const QueryStatusAndCommunication: React.FC<QueryStatusAndCommunicationProps> = ({
  userQueries,
  onSimulateDoctorReply,
}) => {
  const [expandedQueryId, setExpandedQueryId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");
  const [isReplyModalOpen, setIsReplyModalOpen] = useState(false);
  const [selectedQueryForReply, setSelectedQueryForReply] = useState<UserQuery | null>(null);

  const toggleExpand = (queryId: string) => {
    setExpandedQueryId(expandedQueryId === queryId ? null : queryId);
  };

  const openReplyModal = (query: UserQuery) => {
    setSelectedQueryForReply(query);
    setReplyText(`Thank you for your message, ${query.userName}! Regarding your query...`); // Pre-fill
    setIsReplyModalOpen(true);
  };

  const handleReplySubmit = () => {
    if (selectedQueryForReply && replyText.trim()) {
      onSimulateDoctorReply(selectedQueryForReply.id, replyText.trim());
      setIsReplyModalOpen(false);
      setSelectedQueryForReply(null);
      setReplyText("");
    } else {
      alert("Please enter a reply message.");
    }
  };

  const getStatusIcon = (status: UserQuery['status']) => {
    switch (status) {
      case 'Sent': return <Clock size={18} className="text-blue-500" />;
      case 'Delivered': return <CheckCircle size={18} className="text-green-500" />;
      case 'Read': return <MessageSquare size={18} className="text-purple-500" />;
      case 'Doctor Replied (Simulated)': return <Mail size={18} className="text-indigo-600" />;
      case 'Error': return <XCircle size={18} className="text-red-500" />;
      default: return null;
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">Your Sent Messages Status</h2>

      {userQueries.length === 0 ? (
        <p className="text-center text-slate-600 text-lg py-10 border border-slate-200 rounded-lg bg-white shadow-sm">
          You haven&apos;t sent any messages yet.
        </p>
      ) : (
        <div className="space-y-4">
          {userQueries.map((query) => (
            <div key={query.id} className="bg-white p-5 rounded-lg shadow-md border border-slate-200">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleExpand(query.id)}>
                <div className="flex items-center space-x-3">
                  {getStatusIcon(query.status)}
                  <div>
                    <p className="font-semibold text-lg text-slate-800">To: Dr. {query.doctorName}</p>
                    <p className="text-sm text-slate-600">Status: <span className="font-medium">{query.status}</span></p>
                  </div>
                </div>
                {expandedQueryId === query.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>

              {expandedQueryId === query.id && (
                <div className="mt-4 pt-4 border-t border-slate-200 text-sm">
                  <p className="text-slate-700 mb-2"><span className="font-semibold">From:</span> {query.userName} ({query.userEmail})</p>
                  <p className="text-slate-700 mb-2"><span className="font-semibold">Sent On:</span> {new Date(query.timestamp).toLocaleString()}</p>
                  <p className="text-slate-700 mb-4 border-l-4 border-sky-400 pl-3 py-1 bg-sky-50 rounded-r-md">
                    <span className="font-semibold block text-sky-800">Your Message:</span>
                    {query.message}
                  </p>

                  {query.doctorReply && (
                    <div className="bg-indigo-50 p-3 rounded-lg border border-indigo-200 mt-3">
                      <p className="font-semibold text-indigo-700 flex items-center mb-1">
                        <MessageSquare size={16} className="mr-2"/> Doctor&apos;s Reply:
                      </p>
                      <p className="text-indigo-800">{query.doctorReply}</p>
                    </div>
                  )}

                  {/* Simulate Doctor Reply - For demo purposes */}
                  {!query.doctorReply && query.status !== 'Error' && (
                    <button
                      onClick={() => openReplyModal(query)}
                      className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors text-sm flex items-center space-x-2"
                    >
                      <Mail size={16} />
                      <span>Simulate Doctor&apos;s Reply</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Reply Simulation Modal */}
      <Modal isOpen={isReplyModalOpen} onClose={() => setIsReplyModalOpen(false)} title="Simulate Doctor's Reply">
        {selectedQueryForReply && (
          <div className="space-y-4">
            <p className="text-slate-700">Replying to your message to <span className="font-semibold">Dr. {selectedQueryForReply.doctorName}</span>:</p>
            <p className="text-sm text-slate-600 italic border-l-2 border-slate-300 pl-2">`{selectedQueryForReply.message}`</p>
            <div>
              <label htmlFor="doctorReply" className="block text-sm font-medium text-slate-700 mb-1">Doctor&apos;s Reply Message</label>
              <textarea
                id="doctorReply"
                rows={5}
                className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-slate-700"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Enter doctor's reply here..."
              ></textarea>
            </div>
            <button
              onClick={handleReplySubmit}
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors font-semibold text-base"
            >
              Send Simulated Reply
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default QueryStatusAndCommunication;