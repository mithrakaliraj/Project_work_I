// src/components/FormStep.js
const FormStep = ({ title, children, onNext }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onNext) onNext();
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 shadow-xl rounded-2xl bg-white mt-10">
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {children}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormStep;
