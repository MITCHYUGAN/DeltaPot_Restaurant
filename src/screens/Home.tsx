/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, UtensilsCrossed, Truck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Hero from '../components/Hero';
import Reviews from '../components/Reviews';
import MapSection from '../components/MapSection';
import { RESTAURANT_FEATURES } from '../data';

export default function Home() {
  // Map hardcoded string icons to actual components beautifully
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-8 h-8 text-brand-gold" />;
      case 'Truck':
        return <Truck className="w-8 h-8 text-brand-gold" />;
      case 'Clock':
      default:
        return <Clock className="w-8 h-8 text-brand-gold" />;
    }
  };

  return (
    <div className="bg-brand-charcoal select-none">
      {/* 1. Hero Spotlight Banner */}
      <Hero />

      {/* 2. Visual Features Block */}
      <section className="bg-brand-dark/40 py-20 border-t border-brand-gold/10" id="experience">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-brand-gold">The Delta Experience</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white">
              Why DeltaPot Stands Out
            </h2>
            <p className="text-xs sm:text-sm text-brand-cream/60 leading-relaxed font-sans font-light">
              We stay fiercely true to traditional southern Nigerian cooking heritage to deliver premium gastro-experiences.
            </p>
          </div>

          {/* 3 Columns Grid of Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RESTAURANT_FEATURES.map((feat, index) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true, margin: '-50px' }}
                className="p-8 bg-gradient-to-b from-brand-dark to-brand-brown/85 border border-brand-gold/10 rounded-3xl hover:border-brand-gold/30 hover:shadow-2xl hover:shadow-brand-gold/5 transition-all duration-300 relative group text-center md:text-left"
              >
                <div className="mb-6 inline-flex p-4 rounded-full bg-brand-charcoal border border-brand-gold/10 group-hover:bg-brand-gold/10 group-hover:border-brand-gold/30 transition-all duration-300">
                  {getFeatureIcon(feat.icon)}
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-brand-gold transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-cream/70 font-sans font-light leading-relaxed">
                  {feat.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Quick Menu Transition link bar */}
          <div className="mt-16 text-center">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 group text-brand-gold hover:text-brand-red transition-all font-sans font-bold uppercase tracking-wider text-sm border-b border-brand-gold/20 hover:border-brand-red pb-1"
            >
              <span>Explore over 100 food items on our catalog</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
            </Link>
          </div>

        </div>
      </section>

      {/* 3. Social proof testimonials */}
      <Reviews />

      {/* 4. Geography Map embed contact */}
      <MapSection />
    </div>
  );
}
