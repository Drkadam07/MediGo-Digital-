// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Menu, X } from "lucide-react";
// import { usePathname } from "next/navigation";

// const navLinks = [
//   { href: "/", label: "Home" },
//   { href: "/about", label: "About Us" },
//   { href: "/services", label: "Services" },
//   { href: "/industries", label: "Industries" },
//   { href: "/blogs", label: "Blogs" },
//   { href: "/contact", label: "Contact Us" },
// ];

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname();

//   return (
//     <header className="bg-white shadow-sm">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center h-20">
//           <Link href="/" className="flex items-center">
//             <Image
//               src="/logoMedigo.png"
//               alt="MediGo Digital Logo"
//               width={180}
//               height={40}
//               className="h-10 w-auto"
//             />
//             <span className="text-2xl font-bold">MediGo Digital</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             {navLinks.map(({ href, label }) => (
//               <Link
//                 key={href}
//                 href={href}
//                 className={`text-gray-700 hover:text-blue-600 ${
//                   pathname === href ? "text-blue-600 font-semibold" : ""
//                 }`}
//               >
//                 {label}
//               </Link>
//             ))}
//           </nav>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white shadow-md">
//           <div className="px-4 pt-4 pb-3 space-y-1">
//             {navLinks.map(({ href, label }) => (
//               <Link
//                 key={href}
//                 href={href}
//                 className={`block px-3 py-2 text-gray-700 hover:text-blue-600 ${
//                   pathname === href ? "text-blue-600 font-semibold" : ""
//                 }`}
//               >
//                 {label}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/blogs', label: 'Blogs' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="backdrop-blur-md shadow-lg bg-white fixed w-full z-50 rounded-3xl shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <img src="/logoMedigo.png" alt="MediGo Digital Logo" width={180} height={40} className="h-10 w-auto" />
            <span className="text-2xl font-bold">MediGo Digital</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-gray-700 font-semibold hover:text-blue-600 ${pathname === href ? 'text-blue-600 font-semibold' : ''}`}
              >
                {label}
              </Link>
            ))}
            <Link href="#contactus">
              <button className="bg-gradient-to-r rounded-full from-white via-[#add8e6] to-[#f8d7da] hover:bg-gradient-to-r hover:from-[#add8e6] hover:to-white text-black px-4 py-2">
                Contact Us
              </button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button type="button" onClick={() => setMobileMenuOpen(true)} className="lg:hidden p-2 text-gray-700">
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm bg-white shadow-md p-6">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">MediGo Digital</span>
            <button type="button" onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-700">
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 space-y-4 font-semibold ">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`block px-4 py-2 rounded-full text-gray-700 hover:bg-gradient-to-r hover:from-[#add8e6] hover:to-white hover:text-blue-600 ${pathname === href ? 'text-blue-600 font-semibold' : ''}`}
              >
                {label}
              </Link>
            ))}
            <Link href="#contactus">
              <button className="block w-full px-4 py-2 bg-gradient-to-r font-semibold rounded-full from-white via-[#add8e6] to-[#f8d7da] hover:bg-gradient-to-r hover:from-[#add8e6] hover:to-white ">
                Contact Us
              </button>
            </Link>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
