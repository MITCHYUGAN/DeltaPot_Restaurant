/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, AppWindow, Navigation, MessageSquare, Car, Shield } from 'lucide-react';
import { RESTAURANT_SETTINGS } from '../data';

export default function MapSection() {
  // Center location coordinates details
  const googleMapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.673858004523!2d3.4682006760592965!3d6.448744024046183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf47b0a72adcd%3A0x673dbb3cdb129dd9!2s18B%20Emmanuel%20Abimbola%20Cole%20St%2C%20Lekki%20Phase%20I%2C%20Lekki%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1717610000000!5m2!1sen!2sng";

  return (
    <section className="bg-brand-charcoal text-brand-cream py-20 border-t border-brand-gold/10" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout with Side Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Street Directories details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-red/10 border border-brand-red/30 rounded-full text-brand-red text-xs font-semibold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>Visit Us</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                Our Nest in Lekki
              </h2>
              <p className="font-sans text-brand-cream/60 font-light leading-relaxed">
                DeltaPot is nested in the serene surroundings of Emmanuel Abimbola Cole Street in Lekki Phase 1. Ready to host couples, families, and solo traditional food seekers looking to escape.
              </p>
            </div>

            {/* Address cards */}
            <div className="space-y-4">
              <div className="p-5 bg-brand-dark border border-brand-gold/15 rounded-lg flex items-start gap-4 hover:border-brand-gold/30 transition-all">
                <MapPin className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-base font-semibold text-white">Full Address</h4>
                  <p className="font-sans text-sm text-brand-cream/70 leading-relaxed mt-1">
                    {RESTAURANT_SETTINGS.address}
                  </p>
                </div>
              </div>

              <div className="p-5 bg-brand-dark border border-brand-gold/15 rounded-lg flex items-start gap-4 hover:border-brand-gold/30 transition-all">
                <Car className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-base font-semibold text-white">Parking & Security</h4>
                  <p className="font-sans text-sm text-brand-cream/70 mt-1 leading-relaxed">
                    Secure compound street parking with 24/7 dedicated security personnel on ground.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-brand-dark border border-brand-gold/15 rounded-lg flex items-start gap-4 hover:border-brand-gold/30 transition-all">
                <Shield className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-base font-semibold text-white">Reservation & Large Events</h4>
                  <p className="font-sans text-sm text-brand-cream/70 mt-1 leading-relaxed">
                    Celebrating birthdays, family retreats, or hosting office events? Call us to reserve tables or book visual catering setups.
                  </p>
                </div>
              </div>
            </div>

            {/* Turn-by-turn Navigation CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://maps.google.com/?q=18B+Emmanuel+Abimbola+Cole+Street,+Lekki+Phase+1,+Lagos"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-5 bg-brand-gold hover:bg-brand-gold/90 border border-brand-gold text-brand-dark hover:text-white font-bold text-xs uppercase tracking-widest rounded-md text-center transition-all duration-300 flex items-center justify-center gap-1.5"
              >
                <Navigation className="w-4 h-4 animate-bounce" />
                <span>Get Directions Maps</span>
              </a>

              <a
                href={`https://wa.me/${RESTAURANT_SETTINGS.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-5 border border-brand-cream/20 hover:border-brand-red bg-transparent hover:bg-brand-red/10 text-brand-cream font-bold text-xs uppercase tracking-widest rounded-md text-center transition-all duration-300 flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat with Host</span>
              </a>
            </div>
          </div>

          {/* Map Frame Visual */}
          <div className="lg:col-span-7 h-[450px] lg:h-auto rounded-xl overflow-hidden border border-brand-gold/15 shadow-2xl relative group">
            <iframe
              src={googleMapEmbedUrl}
              className="w-full h-full border-0 filter grayscale invert contrast-110 brightness-95 opacity-80 group-hover:opacity-100 group-hover:filter-none transition-all duration-700"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DeltaPot Restaurant Lekki Location Details Map"
            />
            {/* Visual branding overlay anchor */}
            <div className="absolute bottom-4 left-4 p-3 bg-brand-dark/95 border border-brand-gold/30 rounded-lg shadow-lg flex items-center gap-2 max-w-xs transition-opacity duration-300">
              <div className="h-2 w-2 rounded-full bg-brand-red animate-ping" />
              <div>
                <p className="text-xs font-bold text-white font-serif">DeltaPot Lekki</p>
                <p className="text-[10px] text-brand-cream/50">Emmanuel Abimbola Cole Street</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
