import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold text-gray-800">BlogApp</h1>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => {
                  navigate("/signin");
                }}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">BlogApp</h1>
          <p className="text-xl text-gray-600 mb-8">
            Your platform for sharing stories
          </p>
          <button
            onClick={() => {
              navigate("/signup");
            }}
            className="bg-black text-white p-3 rounded-md"
          >
            Get Started
          </button>
        </div>
      </main>
    </div>
  );
}
