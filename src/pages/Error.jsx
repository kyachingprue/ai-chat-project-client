import { Link } from "react-router-dom";
import { FaRobot } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Error = () => {
  return (
    <>
      <Helmet>
        <title>AetherAI | Page Not Found</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
        <div className="text-center backdrop-blur-xl bg-white/5 border border-white/10 p-10 rounded-3xl shadow-2xl">
          <div className="flex justify-center mb-6">
            <FaRobot className="text-7xl text-indigo-400 animate-bounce" />
          </div>

          <h1 className="text-8xl font-bold bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            404
          </h1>

          <h2 className="text-2xl font-semibold mt-4">
            AI couldn't find this page
          </h2>

          <p className="text-gray-400 mt-3 max-w-md">
            The page you are looking for might have been removed, renamed, or is
            temporarily unavailable. Let's get you back to the conversation.
          </p>

          <div className="mt-8 flex gap-4 justify-center">
            <Link to="/">
              <button className="px-6 py-3 rounded-xl bg-linear-to-r from-indigo-500 to-cyan-500 hover:scale-105 transition duration-300 shadow-lg">
                Go Home
              </button>
            </Link>

            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 rounded-xl border border-indigo-400 hover:bg-indigo-500/20 transition"
            >
              Retry
            </button>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            Error Code : AI_404_NOT_FOUND
          </div>
        </div>
      </div>
    </>
  )
};

export default Error;
