import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer 
      className="relative text-white"
      style={{
        backgroundImage: "url('/herobg.png')", // Update with your actual image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 backdrop-blur-lg bg-[#071f2c] bg-opacity-50"></div>

      <div className="relative container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <img
              src="/logoMedigo.png"
              alt="MediGo Digital Logo"
              width={180}
              height={40}
              className="h-10 w-auto mb-4"
            />
            <span className="text-2xl text-gray-800 font-bold bg-gradient-to-r from-teal-400 to-purple-600 text-transparent bg-clip-text 
              hover:text-gray-800 hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.7)] transition duration-300 ease-in-out">
              MediGo Digital
            </span>
            <p className="text-gray-300 mb-4">Your trusted partner in healthcare digital marketing</p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Twitter className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Linkedin className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Instagram className="h-5 w-5" />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/" text="Home" />
              <FooterLink href="#about" text="About Us" />
              <FooterLink href="#services" text="Services" />
              <FooterLink href="/blogs" text="Blogs" />
              <FooterLink href="#contactus" text="Contact" />
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <FooterLink href="/services/seo" text="Healthcare SEO" />
              <FooterLink href="/services/ppc" text="Google Ads" />
              <FooterLink href="/services/social" text="Social Media Marketing" />
              <FooterLink href="/services/web" text="Website Development" />
              <FooterLink href="/services/content" text="Content Marketing" />
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li>123 Healthcare Street</li>
              <li>Mumbai, Maharashtra</li>
              <li>Phone: +91 9xxxx xxxx9</li>
              <li>Email: info@medigodigital.com</li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} MediGo Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Social Media Link Component
function SocialLink({ href, icon }) {
  return (
    <Link href={href} className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-200">
      {icon}
    </Link>
  );
}

// Footer Link Component
function FooterLink({ href, text }) {
  return (
    <li>
      <Link href={href} className="text-gray-300 hover:text-white transition-colors duration-200">
        {text}
      </Link>
    </li>
  );
}
