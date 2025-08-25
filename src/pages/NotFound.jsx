import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="relative h-screen bg-gray-900 overflow-hidden flex items-center justify-center p-6">
      {/* Background Blurs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-purple-600 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-cyan-600 blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <div className="relative mb-12">
          <h1 className="text-[120px] md:text-[180px] font-bold text-white tracking-tighter">
            <span className="relative">
              <span className="absolute inset-0 text-purple-400 opacity-70 animate-glitch-1">
                404
              </span>
              <span className="absolute inset-0 text-cyan-400 opacity-70 animate-glitch-2">
                404
              </span>
              <span className="relative">404</span>
            </span>
          </h1>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Page Not Found
        </h2>

        <p className="text-gray-400 text-lg mb-10">
          Oops! The page you're looking for has vanished into the digital void.
        </p>

        <button
          className="relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-lg overflow-hidden group hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="relative z-10">Return to Safety</span>
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </button>
      </div>

      {/* Floating Dots */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <div className="w-3 h-3 bg-purple-400 rounded-full animate-float delay-100"></div>
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-float delay-300"></div>
        <div className="w-4 h-4 bg-white rounded-full animate-float delay-500"></div>
      </div>
    </section>
  );
};
