/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { PhoneCall, Compass, ShieldCheck, Flame, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { RESTAURANT_SETTINGS } from '../data';
import heroImg from '../assets/images/deltapot_hero_1780682737679.png';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 25, stiffness: 100 }
    }
  };

  return (
    <div className="relative min-h-[90vh] flex items-center bg-brand-charcoal overflow-hidden text-brand-cream py-16">
      {/* Visual Background with absolute premium overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Premium Southern Nigerian Cuisine"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-40 scale-105"
        />
        {/* Dark radial and linear gradient overlay mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/90 to-brand-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-charcoal to-transparent" />
      </div>

      {/* Hero Content Grid with desktop visual balance */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main textual statement */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6"
          >
            {/* Native badge with gold pulsing light */}
            {/* <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-gold/10 border border-brand-gold/20 rounded-full text-brand-gold text-[11px] font-medium tracking-widest uppercase">
              <Flame className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
              <span>Authentic Traditional Kitchen</span>
            </motion.div> */}
 
            {/* Headline with elegant serif display typography pairings */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="font-serif text-5xl sm:text-7xl font-extrabold tracking-tight leading-none text-white">
                Real Taste of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-[#fcdb9c] to-[#cba358]">
                  D South
                </span>
                <span className="text-brand-gold">.</span>
              </h1>
              <p className="font-body text-base sm:text-lg text-brand-cream/80 max-w-2xl font-medium leading-relaxed">
                Authentic Southern Nigerian Cuisine — served with pride in <strong className="text-brand-gold font-medium">Lekki Phase 1</strong>. Indulge in traditional recipes prepared in custom clay pots for ultimate flavor preservation.
              </p>
            </motion.div>
 
            {/* Custom attributes for instant conversions */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4 border-y border-brand-cream/10">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium tracking-wide text-brand-cream/90">Premium Ingredients</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium tracking-wide text-brand-cream/90">Hygiene Assured</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Flame className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium tracking-wide text-brand-cream/90">Clay Pot Traditions</span>
              </div>
            </motion.div>
 
            {/* Action buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-red text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-brand-gold hover:text-brand-charcoal transition-all duration-300 shadow-lg shadow-brand-red/15 hover:shadow-brand-gold/15 cursor-pointer"
              >
                <Compass className="w-4 h-4" />
                <span>Explore Menu</span>
              </Link>
 
              <a
                href={`https://wa.me/${RESTAURANT_SETTINGS.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-brand-cream/20 bg-brand-dark/40 hover:border-brand-gold text-brand-cream hover:text-brand-charcoal hover:bg-brand-gold text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 animate-pulse text-brand-gold" />
                <span>Order on WhatsApp</span>
              </a>
            </motion.div>
          </motion.div>
 
          {/* Visual highlight container: Floating visual badge block */}
          <div className="hidden lg:col-span-5 relative flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, type: 'spring', damping: 20 }}
              className="relative p-6 bg-brand-brown border border-brand-gold/10 rounded-3xl shadow-2xl max-w-sm"
            >
              <div className="absolute top-0 right-0 transform translate-x-3 -translate-y-3 bg-brand-gold text-brand-charcoal text-[9px] font-sans uppercase font-extrabold tracking-widest px-3 py-1.5 rounded-full shadow-md">
                Hot Seller
              </div>
              <span className="font-serif text-amber-200/80 text-xs italic tracking-wider block mb-1">Traditional Urhobo Feast</span>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">Banga Rice Fiesta</h3>
              <p className="text-xs text-brand-cream/70 leading-relaxed mb-4 font-sans font-light">
                Delta Style banga Rice cooked slowly inside seasoned palm fruit pulp extract. Rich, earthy taste garnished with dried fish, stockfish, and soft boiled eggs.
              </p>
              <div className="flex justify-between items-center py-2 border-t border-brand-cream/10">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold">₦15,000 / Plate</span>
                <Link
                  to="/menu"
                  className="text-xs font-bold uppercase text-brand-red hover:text-brand-gold transition-colors duration-200"
                >
                  Order Now →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
