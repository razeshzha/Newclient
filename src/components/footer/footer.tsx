'use client'

import React from 'react'
import Link from 'next/link'
import { FaGithub, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Brand & Contact */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400">⚡ BrandName</h2>
          <div className="mt-4 flex items-center gap-2">
            <FaPhoneAlt className="text-blue-300" />
            <span className="text-sm">+977-9807669785</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <MdEmail className="text-blue-300" />
            <span className="text-sm">razesh@0gmail.com</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link href="/about-us" className="hover:text-blue-400">About Us</Link></li>
            <li><Link href="/contact-us" className="hover:text-blue-400">Contact Us</Link></li>
            <li><Link href="/products" className="hover:text-blue-400">Products</Link></li>
            <li><Link href="/wishlist" className="hover:text-blue-400">Wishlist</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-blue-400 text-2xl">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaGithub />
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaFacebook />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="https://wa.me/9807669785" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-gray-400">
        © {new Date().getFullYear()} ⚡ BrandName. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
