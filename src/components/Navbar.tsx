/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Menu, X, Phone, Clock, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { RESTAURANT_SETTINGS } from "../data";
import logo from "../assets/images/logo.png";

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export default function Navbar({ cartCount, onOpenCart }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/" || location.pathname === "";
    }
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Menu", path: "/menu" },
    { title: "Contact", path: "/#contact" },
  ];

  return (
    <>
      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-40 bg-brand-charcoal/95 backdrop-blur-md border-b border-brand-gold/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Text in Editorial Serif */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex flex-col select-none group">
                <img src={logo} className="w-[200px]" alt="" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center" id="desktop-nav">
              {navLinks.map((link) => {
                // For Hash element like Contact
                const isHash = link.path.startsWith("/#");
                const pathTarget = isHash ? "/" : link.path;

                return isHash ? (
                  <a
                    key={link.title}
                    href={link.path}
                    className="font-sans text-sm font-semibold tracking-wider uppercase text-brand-cream/80 hover:text-brand-gold transition-all duration-200 border-b-2 border-transparent hover:border-brand-gold py-1"
                  >
                    {link.title}
                  </a>
                ) : (
                  <Link
                    key={link.title}
                    to={pathTarget}
                    className={`font-sans text-sm font-semibold tracking-wider uppercase transition-all duration-200 py-1 border-b-2 ${
                      isActive(link.path) ? "text-brand-gold border-brand-gold" : "text-brand-cream/80 border-transparent hover:text-brand-gold"
                    }`}
                  >
                    {link.title}
                  </Link>
                );
              })}
            </nav>

            {/* Action Buttons: Menu CTA and Dynamic Shopping Cart */}
            <div className="flex items-center space-x-3">
              <Link
                to="/menu"
                className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 bg-brand-red text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-brand-gold hover:text-brand-charcoal shadow-md shadow-brand-red/15 transition-all duration-300"
              >
                Order Online
              </Link>

              {/* Shopping Bag Button with Animation */}
              <motion.button
                id="cart-trigger"
                onClick={onOpenCart}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-3 bg-brand-dark hover:bg-brand-brown border border-brand-gold/20 rounded-full text-brand-gold hover:text-brand-cream cursor-pointer transition-colors duration-300 shadow-sm"
                aria-label="Open Shopping Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                <AnimatePresence>
                  {cartCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-gold text-[10px] font-bold text-brand-charcoal shadow-md border border-brand-charcoal"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Mobile Menu Toggler */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-brand-cream/80 hover:text-brand-gold md:hidden cursor-pointer"
                aria-haspopup="true"
                aria-expanded={isOpen}
                aria-label="Toggle mobile menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-brand-gold/10 bg-brand-charcoal overflow-hidden"
              id="mobile-nav"
            >
              <div className="px-4 pt-4 pb-6 space-y-3">
                {navLinks.map((link) => {
                  const isHash = link.path.startsWith("/#");
                  return isHash ? (
                    <a
                      key={link.title}
                      href={link.path}
                      onClick={handleLinkClick}
                      className="block px-3 py-2 rounded-md font-sans text-base font-semibold text-brand-cream/90 hover:text-brand-gold hover:bg-brand-dark/50 transition-colors duration-200"
                    >
                      {link.title}
                    </a>
                  ) : (
                    <Link
                      key={link.title}
                      to={link.path}
                      onClick={handleLinkClick}
                      className={`block px-3 py-2 rounded-md font-sans text-base font-semibold transition-colors duration-200 ${
                        isActive(link.path) ? "text-brand-gold bg-brand-dark" : "text-brand-cream/90 hover:text-brand-gold hover:bg-brand-dark/50"
                      }`}
                    >
                      {link.title}
                    </Link>
                  );
                })}
                <Link
                  to="/menu"
                  onClick={handleLinkClick}
                  className="w-full text-center flex items-center justify-center px-4 py-3 bg-brand-red text-white text-sm font-bold uppercase tracking-wider rounded-full shadow-md shadow-brand-red/15 hover:bg-brand-gold hover:text-brand-charcoal transition-all duration-300"
                >
                  Order on WhatsApp
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      {/* Top Banner with Quick Info */}
      <div className="bg-brand-charcoal text-white border-b border-brand-red/10 py-1.5 px-4 text-xs">
        <div className="max-w-7xl mx-[auto] p-2 flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4 font-sans text-[11px] uppercase tracking-widest text-brand-cream/60">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-brand-gold" />
            <span>Hours: {RESTAURANT_SETTINGS.hours}</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`https://wa.me/${RESTAURANT_SETTINGS.whatsapp.replace("+", "")}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-brand-gold transition-colors duration-200"
            >
              <Phone className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
              <span>Call / WhatsApp: {RESTAURANT_SETTINGS.whatsappFormatted}</span>
            </a>
            <a href={RESTAURANT_SETTINGS.instagramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-brand-gold transition-colors duration-200">
              <Instagram className="w-3.5 h-3.5 text-brand-gold" />
              <span>{RESTAURANT_SETTINGS.instagram}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
