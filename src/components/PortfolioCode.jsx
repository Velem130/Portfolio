import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

const PortfolioCode = () => {
  return (
    <div className="pt-20 px-8">
      <h1 className="text-3xl font-bold mb-4">Portfolio Code Page</h1>
      <p className="mb-6">This is the page for the portfolio code content.</p>

<a
  href="https://github.com/Velem130/reactjsx/tree/main/flask-backend
"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 bg-gray-800 text-white  px-5 py-2 rounded hover:bg-gray-900 transition"
>
  <FaGithub size={20} />
   Click Here To view the Codes
</a>

<br></br>
      {/* Back to Home Button */}
      <Link
        to="/"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        ← Back to Home
      </Link>
    </div>
  );
};

export default PortfolioCode;
