'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  {
    href: '#', label: 'Industries', submenu: [
      { href: '/industries/doctors-clinics', label: 'Doctors & Clinics' },
      { href: '/industries/hospitals', label: 'Hospitals' },
      { href: '/industries/pharmacies', label: 'Pharmacies & Medical Stores' },
      { href: '/industries/pharmaceutical', label: 'Pharmaceutical Companies' },
      { href: '/industries/diagnostic-labs', label: 'Diagnostic Labs' }
    ]
  },
  { href: '/blogs', label: 'Blogs' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 10) setIsScrolled(true);
      else setIsScrolled(false);

      if (currentScrollY > lastScrollY) {
        setIsScrollingUp(false); // Scrolling Down -> Hide Navbar
      } else {
        setIsScrollingUp(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed w-full z-50 rounded-3xl backdrop-blur-md hadow-md transition-transform duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        } ${isScrollingUp ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <img src="/logoMedigo.png" alt="MediGo Digital Logo" width={180} height={40} className="h-10 w-auto" />
            <span className="text-2xl text-gray-800 font-bold bg-gradient-to-r from-teal-400 to-purple-600 text-transparent bg-clip-text 
                                    hover:text-gray-800 hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.7)] transition duration-300 ease-in-out">MediGo Digital</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map(({ href, label, submenu }) => (
              <div key={href} className="relative group">
                <Link
                  href={href}
                  className={`text-gray-800 font-semibold hover:text-blue-600 ${pathname === href ? 'text-blue-600 font-semibold' : ''
                    } flex items-center`}
                  onMouseEnter={() => submenu && setDropdownOpen(true)}
                  onMouseLeave={() => submenu && setDropdownOpen(false)}
                >
                  {label}
                  {submenu && <ChevronDownIcon className="h-4 w-4 ml-1" />}
                </Link>
                {submenu && (
                  <div
                    className={`absolute left-0 mt-2 w-56 backdrop-blur-md bg-slate-50/50 shadow-lg rounded-md overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:visible ${dropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                  >
                    {submenu.map(({ href, label }) => (
                      <Link
                        key={href}
                        href={href}
                        className="block px-4 py-2 text-gray-800 font-semibold rounded-full hover:bg-gradient-to-r hover:from-[#add8e6] hover:text-blue-600"
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="#contactus">
              <button className="bg-gradient-to-r rounded-full font-semibold from-white via-[#add8e6] to-[#f8d7da] hover:bg-gradient-to-r hover:from-[#add8e6] hover:to-white px-4 py-2">
                Contact Us
              </button>
            </Link>
          </nav>
          <button type="button" onClick={() => setMobileMenuOpen(true)} className="lg:hidden p-2 text-gray-800">
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm bg-white shadow-md p-6">
          <div className="flex justify-between items-center">
            <span className="text-lg text-gray-800 font-semibold">MediGo Digital</span>
            <button type="button" onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-700">
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 space-y-4 font-semibold">
            {navLinks.map(({ href, label, submenu }) => (
              <div key={href} className="relative">
                <Link
                  href={href}
                  className={`block px-4 py-2 rounded-full text-gray-800 hover:bg-gradient-to-r hover:from-[#add8e6] hover:to-white hover:text-blue-600 ${pathname === href ? 'text-blue-600 font-semibold' : ''
                    }`}
                  onClick={() => {
                    setMobileMenuOpen(false); 
                    if (submenu) {
                      setDropdownOpen(dropdownOpen !== href ? href : null);
                    }
                  }}
                >
                  {label} {submenu && <ChevronDownIcon className="h-4 w-4 ml-1 inline" />}
                </Link>

                {submenu && dropdownOpen === href && (
                  <div className="mt-2 rounded-md">
                    {submenu.map(({ href, label }) => (
                      <Link
                        key={href}
                        href={href}
                        className="block px-4 py-2 text-gray-800 rounded-full  hover:bg-gradient-to-r hover:from-[#add8e6] hover:to-white hover:text-blue-600"
                        onClick={() => setMobileMenuOpen(false)} 
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="#contactus" onClick={() => setMobileMenuOpen(false)}>
              <p className="block w-full mt-1 px-4 py-2 bg-gradient-to-r font-semibold text-center rounded-full from-white via-[#add8e6] to-[#f8d7da] hover:bg-gradient-to-r hover:from-[#add8e6] hover:to-white">
                Contact Us
              </p>
            </Link>

          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
