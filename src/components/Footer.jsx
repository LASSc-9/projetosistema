import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
const Footer = () => {
  return (
    <footer className="bg-black text-white p-6  flex flex-col items-center justify-center space-y-4">
      <h3>&copy; 2025 - todos os direitos reservados</h3>
      <div className="flex justify-around space-x-3">
        <a>
          <FaFacebook className="w-10 h-10 hover:text-blue-900 transition-colors duration-500"/>
        </a>
        <a>
          <FaInstagram className="w-10 h-10 hover:text-pink-700 transition-colors duration-500"/>
        </a>
      </div>
    </footer>
  )
}

export default Footer