import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer2 = () => {
  return (
    <footer className="bg-blue-950 text-gray-200 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Column 1: Name & Bio */}
        <div>
          <h3 className="text-xl font-bold text-yellow-400 mb-2">Issa Mluleki Velem</h3>
          <p className="text-sm mb-4">Full-Stack Developer creating digital solutions with clean code and user-focused design.</p>
          <div className="flex gap-4 mt-2">
            <a href="#"><FaLinkedin size={20} className="hover:text-yellow-400" /></a>
            <a href="#"><FaGithub size={20} className="hover:text-yellow-400" /></a>
            <a href="#"><FaTwitter size={20} className="hover:text-yellow-400" /></a>
            <a href="#"><FaInstagram size={20} className="hover:text-yellow-400" /></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400">About</a></li>
            <li><a href="#" className="hover:text-yellow-400">Projects</a></li>
            <li><a href="#" className="hover:text-yellow-400">Education</a></li>
            <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">Contact Info</h3>
          <div className="flex items-center gap-3 mb-2 text-sm">
            <FaEnvelope className="text-yellow-400" />
            <span>mlulekivelem@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 mb-2 text-sm">
            <FaPhone className="text-yellow-400" />
            <span>+27 84 084 9731</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <FaMapMarkerAlt className="text-yellow-400" />
            <span>Johhannesburg, South Africa</span>
          </div>
        </div>

       
      </div>

     
     
      
    </footer>
  );
};

export default Footer2;






