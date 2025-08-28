import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function InterviewPage() {
  const navigate = useNavigate();

  const questions = [
    "Tell me about yourself.",
    "Why should we hire you?",
    "What are your strengths?",
    "Where do you see yourself in 5 years?"
  ];

  const [qIndex, setQIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);

  // Timer per question
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // Auto start recording when question changes
  useEffect(() => {
    console.log("🎤 Recording started for:", questions[qIndex]);
    setTimeLeft(30); // reset timer
    return () => {
      console.log("🛑 Recording stopped for:", questions[qIndex]);
    };
  }, [qIndex]);

  const handleNext = () => {
    if (qIndex < questions.length - 1) {
      setQIndex(qIndex + 1);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">
        Interview in Progress
      </h2>

      {/* Webcam Placeholder */}
      <div className="w-64 h-48 bg-gray-100 border-2 border-dashed border-gray-400 rounded-xl flex items-center justify-center text-gray-500 mb-4">
        🎥 Webcam Recording...
      </div>

      {/* Question */}
      <p className="text-lg font-medium text-gray-800 mb-4">
        {questions[qIndex]}
      </p>

      {/* Timer */}
      <p className="text-red-500 mb-4">Time Left: {timeLeft}s</p>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-2 rounded-full shadow-lg"
      >
        Next Question →
      </button>
    </div>
  );
}
