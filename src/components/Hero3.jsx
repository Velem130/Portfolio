import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaPython,
  FaReact,
  FaFlask,
} from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdSchool } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import velem from '../assets/velem.jpg'; // Adjust path if needed

const Hero3 = () => {
  return (
    <div  className="min-h-screen bg-white text-gray-800 flex flex-col items-center px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">About Me</h1>

      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl w-full">
        {/* Profile Info Box */}
        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-1/3">
          <img
            src={velem}
            alt="Thokozani"
            className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg mb-4"
          />
          <div className="space-y-3 text-sm text-gray-700 text-center md:text-left">
            <div className="flex items-center gap-2">
              <MdEmail className="text-blue-600" />
              <span>mlulekivelem@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FiPhone className="text-green-600" />
              <span>+27 84 048 9731</span>
            </div>
            <div className="flex items-center gap-2">
              <MdLocationOn className="text-red-500" />
              <span>Johhannesburg, South Africa</span>
            </div>
            <div className="flex items-center gap-2">
              <MdSchool className="text-purple-600" />
              <span>Johannesburg University of Technology</span>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hello, I'm velem</h2>
          <p className="text-gray-700 mb-4">
            I’m an IT student at Johhannesburg University of Technology (Johannesburg bezuidenhout) passionate about full-stack development.
            I speak 3 languages and love bridging tech with community needs.
            My goal is to build fast, secure, and user-friendly applications that solve real-world problems.
          </p>
          <p className="text-gray-700 mb-6">
            When I’m not coding, you can find me exploring new technologies, contributing to open-source projects,
            or mentoring fellow students in tech.
          </p>

          <div className="p-6">
            {/* Technical Skills */}
            <h2 className="text-xl font-bold mb-4">Technical Skills</h2>
            <div className="flex flex-wrap gap-6 text-4xl text-blue-900">
              <div className="flex flex-col items-center">
                <FaHtml5 />
                <span className="text-sm text-gray-700 mt-1">HTML5</span>
              </div>
              <div className="flex flex-col items-center">
                <FaCss3Alt />
                <span className="text-sm text-gray-700 mt-1">CSS3</span>
              </div>
              <div className="flex flex-col items-center">
                <FaJs />
                <span className="text-sm text-gray-700 mt-1">JavaScript</span>
              </div>
              
              <div className="flex flex-col items-center">
                <FaPhp />
                <span className="text-sm text-gray-700 mt-1">PHP</span>
              </div>
              <div className="flex flex-col items-center">
                <FaPython />
                <span className="text-sm text-gray-700 mt-1">Python</span>
              </div>
              <div className="flex flex-col items-center">
                <FaReact />
                <span className="text-sm text-gray-700 mt-1">React</span>
              </div>
              <div className="flex flex-col items-center">
                <FaFlask />
                <span className="text-sm text-gray-700 mt-1">Flask</span>
              </div>
            </div>

            {/* Languages I Speak */}
            <h2 className="text-xl font-bold mt-10 mb-4">Languages I Speak</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-100 rounded-lg p-4 text-center shadow-sm">
                <div className="text-lg font-bold">ZA</div>
                <div className="font-semibold">English</div>
                <div className="text-sm text-gray-500">95%</div>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 text-center shadow-sm">
                <div className="text-lg font-bold">ZA</div>
                <div className="font-semibold">Sesotho</div>
                <div className="text-sm text-gray-500">78%</div>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 text-center shadow-sm">
                <div className="text-lg font-bold">ZA</div>
                <div className="font-semibold">Swahili</div>
                <div className="text-sm text-gray-500">85%</div>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 text-center shadow-sm">
                <div className="text-lg font-bold">ZA</div>
                <div className="font-semibold">sign language</div>
                <div id="myprojects" className="text-sm text-gray-500">35%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;

