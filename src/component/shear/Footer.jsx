import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[linear-gradient(135deg,#2F5848,#A77E55)] text-white mt-10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <a className="btn btn-ghost text-2xl font-bold text-white px-0">
              BOOK<span className="text-[#F3D6A3]">NEST</span>
            </a>
            <p className="mt-3 text-white/80 text-sm leading-6">
              Discover, borrow, and enjoy your favorite books easily with BookNest.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Social Media</h2>
            <div className="flex gap-4">
              <a
                href="https://github.com/sr-shuvobd"
                target="_blank"
                className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-[#2F5848] transition-all duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/shohanur-rahman-bd/"
                target="_blank"
                className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-[#2F5848] transition-all duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.facebook.com/shohanur.rs"
                target="_blank"
                className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-[#2F5848] transition-all duration-300"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>

            <div className="space-y-3 text-white/85 text-sm">
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-[#F3D6A3]" />
                booknest@gmail.com
              </p>

              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#F3D6A3]" />
                +880 1234-567890
              </p>

              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#F3D6A3]" />
                Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-5 border-t border-white/20 text-center text-sm text-white/70">
          © 2026 BOOKNEST. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;