'use client'
import { Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function TopBar() {
  return (
    <div className="bg-[#003B5C] text-white py-2">
      <div className="container mx-auto px-4 flex justify-start items-center">
        <div className="hidden md:flex items-center space-x-8">
          <Link href="tel:+91xxxxxxx96" className="flex items-center text-sm hover:text-blue-200">
            <Phone className="h-4 w-4 mr-2" />
            +91 xxxxx xxx06
          </Link>
          <Link href="mailto:info@medigodigital.com" className="flex items-center text-sm hover:text-blue-200">
            <Mail className="h-4 w-4 mr-2" />
            info@medigodigital.com
          </Link>
        </div>
      </div>
    </div>
  )
}
