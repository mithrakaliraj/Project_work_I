import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      {/* 🔹 Navbar */}
      <nav className="w-full flex justify-between items-center px-10 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">MockTrix</h1>
        <div className="space-x-6 text-gray-700 font-medium">
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
      </nav>

      {/* 🔹 Hero Section */}
      <header className="flex flex-col items-center justify-center flex-grow text-center px-6">
        <h2 className="text-5xl font-extrabold text-gray-800 leading-snug mb-4">
          Ace Your Next Interview <br /> With Confidence 🚀
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mb-6">
          Practice real-time mock interviews powered by AI. Get personalized feedback on your
          answers, confidence, and communication skills.
        </p>
        <button
          onClick={() => navigate("/resume")}
          className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full shadow-lg text-lg font-medium"
        >
          Start Your Interview →
        </button>
      </header>

      {/* 🔹 Features Section */}
      <section id="features" className="py-16 px-6 bg-gray-50">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Why Choose MockTrix?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <h4 className="text-xl font-semibold text-blue-600 mb-2">📄 Resume-Based Questions</h4>
            <p className="text-gray-600">Upload your resume and get tailored interview questions that match your profile.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <h4 className="text-xl font-semibold text-teal-600 mb-2">🤖 AI-Powered Feedback</h4>
            <p className="text-gray-600">Receive insights on your communication, technical skills, and confidence instantly.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <h4 className="text-xl font-semibold text-orange-600 mb-2">📊 Performance Dashboard</h4>
            <p className="text-gray-600">Track your progress and download reports to improve with every practice session.</p>
          </div>
        </div>
      </section>

      {/* 🔹 Footer */}
      <footer className="bg-white text-center py-6 border-t mt-auto">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} MockTrix | Designed for Students to Succeed
        </p>
      </footer>
    </div>
  );
}
