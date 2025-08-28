// src/components/ResumePage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormStep from "./FormStep";

const topics = ["OS", "DS", "ML", "AI", "DL", "OOP", "C", "C++", "Java", "WebDev"];

const ResumePage = () => {
  const navigate = useNavigate();
  const [resume, setResume] = useState(null);
  const [selectedTopics, setSelectedTopics] = useState([]);

  const handleNext = () => {
    // You can save state to context or API here if needed
    navigate("/interview");
  };

  const handleSelect = (e) => {
    const value = e.target.value;
    if (value && !selectedTopics.includes(value)) {
      setSelectedTopics([...selectedTopics, value]);
    }
    e.target.value = ""; // reset dropdown after selection
  };

  const removeTopic = (topic) => {
    setSelectedTopics(selectedTopics.filter((t) => t !== topic));
  };

  return (
    <FormStep title="Build Your Resume Profile" onNext={handleNext}>
      {/* Resume Upload */}
      <div className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer">
        <label className="cursor-pointer">
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={(e) => setResume(e.target.files[0])}
          />
          <div className="text-gray-500">
            Click to upload or drag & drop your resume
            <div className="text-sm mt-1">Supported: PDF, DOC, DOCX</div>
          </div>
        </label>
      </div>

      {/* Topics Selection */}
      <div className="mt-6">
        <label className="block font-medium">Topics Beyond Resume</label>
        <select
          className="w-full border rounded-lg p-2 mt-2"
          onChange={handleSelect}
          defaultValue=""
        >
          <option value="" disabled>
            Select a topic
          </option>
          {topics.map((topic, index) => (
            <option key={index} value={topic}>
              {topic}
            </option>
          ))}
        </select>

        {/* Selected Topics */}
        <div className="flex flex-wrap gap-2 mt-3">
          {selectedTopics.map((topic, index) => (
            <div
              key={index}
              className="flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full shadow-sm"
            >
              <span>{topic}</span>
              <button
                type="button"
                onClick={() => removeTopic(topic)}
                className="ml-2 text-red-500 font-bold hover:text-red-700"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>
    </FormStep>
  );
};

export default ResumePage;
