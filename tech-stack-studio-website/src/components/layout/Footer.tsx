import Link from "next/link";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-amber-600/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <Logo size="sm" />
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Crafting exceptional full-stack web experiences with modern
              technology and creative vision. Where technical expertise meets
              artistic innovation.
            </p>
            {/* <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:hello@techstackstudio.com"
                className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:+1234567890"
                className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
              >
                <Phone size={20} />
              </a>
            </div> */}
          </div>

          <div>
            <h3 className="text-amber-500 font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                >
                  Full-Stack Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                >
                  API Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                >
                  Cloud Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-amber-500 font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                >
                  Our Process
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-600/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Tech Stack Studio. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Crafted with passion and precision
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
