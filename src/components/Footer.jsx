import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6  flex flex-col items-center justify-center space-y-4">
      <h3>&copy; 2025 - todos os direitos reservados</h3>
      <div className="flex justify-around">
        <a>
          <FaFacebook/>
        </a>
        <a>
          <FaInstagram/>
        </a>
      </div>
    </footer>
  )
}

export default Footer