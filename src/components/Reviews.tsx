/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Star, MessageSquare } from "lucide-react";
import { motion } from "motion/react";
import { GOOGLE_REVIEWS } from "../data";

export default function Reviews() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 20 },
    },
  };

  return (
    <section className="bg-brand-charcoal py-20 border-t border-brand-gold/10" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header statement */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white leading-tight">Loved By Southern Food Lovers</h2>
          <p className="font-sans text-brand-cream/60 font-light text-base sm:text-lg leading-relaxed">
            Don't just take our word for it. Here is why food fans and local guides rank DeltaPot as the premier destination for Delta and riverine soups in Lekki Phase 1.
          </p>
        </div>

        {/* Reviews Deck Grid */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GOOGLE_REVIEWS.map((review) => (
            <motion.div
              key={review.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="p-6 bg-gradient-to-b from-brand-dark to-brand-brown/85 border border-brand-gold/10 rounded-3xl flex flex-col justify-between hover:border-brand-gold/30 hover:shadow-2xl transition-all duration-300 shadow-md group"
            >
              <div className="space-y-4">
                {/* Visual Stars */}
                <div className="flex text-brand-gold gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-3.5 h-3.5 ${i < review.rating ? "fill-current" : "text-brand-cream/15"}`} />
                  ))}
                </div>

                {/* Testimonial body text in elegant quotes */}
                <p className="text-xs sm:text-sm text-brand-cream/80 leading-relaxed font-sans font-light italic">"{review.text}"</p>
              </div>

              {/* Customer Author Row */}
              <div className="flex items-center gap-3.5 pt-5 border-t border-brand-gold/10 mt-6 md:mt-8">
                {review.avatar && <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover border border-brand-gold/20 flex-shrink-0" />}
                <div className="min-w-0">
                  <h4 className="font-heading text-sm font-bold text-white group-hover:text-brand-gold transition-colors duration-200">{review.name}</h4>
                  <p className="text-[10px] text-brand-cream/50 uppercase font-sans tracking-wider mt-0.5 font-semibold">{review.role}</p>
                  <p className="text-[9px] text-brand-cream/35 font-sans mt-0.5">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Google Reviews rating summary badge */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 bg-gradient-to-b from-brand-dark to-brand-brown/60 border border-brand-gold/10 rounded-3xl p-6 mt-12 max-w-xl mx-auto text-center sm:text-left">
          <div className="px-6 py-4 bg-brand-charcoal border border-brand-gold/15 rounded-2xl text-center flex-shrink-0 shadow-md">
            <span className="text-3xl font-bold text-white font-heading block">4.1</span>
            <div className="flex text-brand-gold justify-center gap-0.5 my-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="text-[9px] text-brand-cream/40 uppercase tracking-widest block font-medium">459 Reviews</span>
          </div>
          <div>
            <h4 className="font-heading text-base font-bold text-white">Rated 4.1 Stars on Google Maps</h4>
            <p className="text-xs text-brand-cream/60 leading-relaxed mt-1 font-sans">
              DeltaPot maintains solid acclaim with over 450 verified community reviews praising traditional southern fidelity and native clay pot presentations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
