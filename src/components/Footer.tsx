/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from "react-router-dom";
import { MapPin, Phone, Instagram, Clock, Utensils, Shield, Heart } from "lucide-react";
import { RESTAURANT_SETTINGS } from "../data";
import logo from "../assets/images/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal border-t border-brand-gold/20 pt-16 pb-8 text-brand-cream/80" id="footer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Intro Column */}
          <div className="md:col-span-1 space-y-4">
            <Link to="/" className="flex flex-col select-none group">
              <img src={logo} className="w-[200px]" alt="" />
            </Link>
            <p className="text-sm font-sans text-brand-cream/60 leading-relaxed font-light">
              Experience the supreme, authentic flavors of Niger Delta and southern Nigerian traditional cuisine. Served hot in Lekki Phase 1, Lagos.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href={`https://wa.me/${RESTAURANT_SETTINGS.whatsapp.replace("+", "")}`}
                className="p-2 rounded-full bg-brand-dark hover:bg-brand-red border border-brand-gold/25 text-brand-gold hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
                target="_blank"
                rel="noreferrer"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_SETTINGS.instagramUrl}
                className="p-2 rounded-full bg-brand-dark hover:bg-brand-red border border-brand-gold/25 text-brand-gold hover:text-white transition-all duration-300"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-brand-gold tracking-wide">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-brand-red transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-brand-red transition-colors duration-200 justify-between inline-flex items-center w-full">
                  <span>Explore Menu</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] bg-brand-red text-white uppercase font-bold tracking-widest font-sans">Fresh</span>
                </Link>
              </li>
              <li>
                <a href="/#contact" className="hover:text-brand-red transition-colors duration-200">
                  Directions & Location
                </a>
              </li>
              <li>
                <a href="/#reviews" className="hover:text-brand-red transition-colors duration-200">
                  Customer Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours Column */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-brand-gold tracking-wide">Dining Hours</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-brand-cream">Monday — Saturday</p>
                  <p className="text-brand-cream/60">10:00 AM — 10:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Shield className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-brand-cream">Sundays</p>
                  <p className="text-brand-cream/60">Closed for weekly cleaning</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact and Address Column */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-brand-gold tracking-wide">Our Location</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                <address className="not-italic text-brand-cream/85 leading-relaxed">{RESTAURANT_SETTINGS.address}</address>
              </div>
            </div>
          </div>
        </div>

        {/* Lower copyright bar with cute credentials */}
        <div className="border-t border-brand-gold/10 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-brand-cream/40 px-1 gap-4">
          <p>© {currentYear} DeltaPot Restaurant and Bar. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-brand-red fill-current" />
            <span>for southern cooking lovers in Lekki.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
