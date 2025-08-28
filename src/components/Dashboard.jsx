
export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-white p-6">
      <h2 className="text-3xl font-bold text-green-600 mb-6">
        🎉 Interview Completed!
      </h2>

      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-center">
        <p className="text-gray-700 mb-4">
          Here is your performance summary:
        </p>
        <ul className="text-left text-gray-600 mb-6">
          <li>✅ Communication: Good</li>
          <li>✅ Confidence: Moderate</li>
          <li>✅ Technical: Strong</li>
        </ul>
        <h3 className="text-xl font-semibold text-blue-600 mb-4">
          Final Score: 85/100
        </h3>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full">
          Download Report
        </button>
      </div>
    </div>
  );
}
