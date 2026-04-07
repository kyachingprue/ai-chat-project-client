import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa'
import logo from '../../public/chat-bot.png';

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-gray-900 via-black to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className='flex space-x-2 items-center pb-4'>
            <img src={logo} className='w-7 h-7 md:w-9 md:h-9' alt="Website logo image" />
            <h2 className="text-2xl font-bold mb-2">AetherAI</h2>
          </div>
          <p className="text-gray-300 max-w-xs">
            AI-driven solutions for smarter experiences. Explore, innovate, and
            connect with the future of technology.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2 text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <a href="/" className="hover:text-pink-500 transition-colors">
            Home
          </a>
          <a href="/about" className="hover:text-pink-500 transition-colors">
            About
          </a>
          <a href="/services" className="hover:text-pink-500 transition-colors">
            Services
          </a>
          <a href="/contact" className="hover:text-pink-500 transition-colors">
            Contact
          </a>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a
              href="#"
              className="p-3 rounded-full bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 text-white hover:scale-110 transition-transform"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 text-white hover:scale-110 transition-transform"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 text-white hover:scale-110 transition-transform"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 text-white hover:scale-110 transition-transform"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} AetherAI. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
