import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#002A41] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img
              src="/placeholder.svg"
              alt="MediGo Digital Logo"
              width={180}
              height={40}
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-400 mb-4">Your trusted partner in healthcare digital marketing</p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Twitter className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Linkedin className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Instagram className="h-5 w-5" />} />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/" text="Home" />
              <FooterLink href="/about" text="About Us" />
              <FooterLink href="/services" text="Services" />
              <FooterLink href="/testimonials" text="Testimonials" />
              <FooterLink href="/contact" text="Contact" />
            </ul>
          </div>

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

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Healthcare Street</li>
              <li>Mumbai, Maharashtra</li>
              <li>Phone: +91 98901 69506</li>
              <li>Email: info@medigodigital.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MediGo Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon }) {
  return (
    <Link href={href} className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-200">
      {icon}
    </Link>
  )
}

function FooterLink({ href, text }) {
  return (
    <li>
      <Link href={href} className="text-gray-400 hover:text-white transition-colors duration-200">
        {text}
      </Link>
    </li>
  )
}

