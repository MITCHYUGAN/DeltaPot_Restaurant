/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Flame, ShoppingCart, Send, Plus } from "lucide-react";
import { motion } from "motion/react";
import { MenuItem } from "../types";
import { RESTAURANT_SETTINGS } from "../data";

interface FoodCardProps {
  key?: string | number;
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
  onOrderNowSingle: (item: MenuItem) => void;
}

export default function FoodCard({ item, onAddToCart, onOrderNowSingle }: FoodCardProps) {
  const isPriceOnRequest = item.price === 0;

  // Format currency nicely with commas
  const formatPrice = (value: number) => {
    return `₦${value.toLocaleString()}`;
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col bg-gradient-to-b from-brand-dark to-brand-brown/85 border border-brand-gold/10 rounded-3xl overflow-hidden shadow-xl hover:border-brand-gold/30 hover:shadow-2xl hover:shadow-brand-gold/5 transition-all duration-300"
    >
      {/* Category Tag on visual thumbnail */}
      {item.image ? (
        <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-brand-dark/40">
          <img src={item.image} alt={item.name} referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          {/* Subtle gradient gradient shadow inside image */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/95 to-transparent opacity-85" />

          {/* Popular Tag */}
          {item.isPopular && (
            <span className="absolute top-3 left-3 flex items-center gap-1 px-3 py-1 bg-brand-red text-white text-[9px] font-sans font-extrabold tracking-widest rounded-full shadow-lg uppercase">
              <Flame className="w-3 h-3 fill-current" />
              <span>Best Seller</span>
            </span>
          )}

          <span className="absolute bottom-3 right-3 text-[9px] font-sans font-bold uppercase tracking-widest text-brand-gold bg-brand-charcoal/90 px-3 py-1 rounded-full border border-brand-gold/15">
            {item.category}
          </span>
        </div>
      ) : (
        /* Fallback when there is no custom photo - renders an elegant stylized minimalist abstract pattern card */
        <div className="relative h-20 w-full overflow-hidden bg-gradient-to-br from-brand-brown to-brand-charcoal border-b border-brand-gold/10 flex items-center justify-between px-5">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-brand-gold animate-pulse" />
            <span className="text-[9px] uppercase font-sans tracking-widest text-brand-gold font-bold">{item.category}</span>
          </div>
          {item.isPopular && <span className="flex items-center gap-1 px-2.5 py-1 bg-brand-red text-white text-[8px] font-sans font-extrabold tracking-widest rounded-full uppercase">POPULAR</span>}
        </div>
      )}

      {/* Item Body details */}
      <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="font-serif text-lg sm:text-lg font-bold text-white group-hover:text-brand-gold transition-colors duration-200 line-clamp-2">{item.name}</h3>
          </div>

          <p className="text-xs text-brand-cream/60 leading-relaxed font-sans font-light mb-5 line-clamp-3">{item.description}</p>
        </div>

        {/* Lower row details - Price & customized shopping options */}
        <div className="pt-4 border-t border-brand-gold/10 mt-auto">
          <div className="flex items-center justify-between gap-4 mb-5">
            <span className="text-[10px] font-sans text-brand-cream/40 uppercase tracking-widest">Price</span>
            <span className="text-base sm:text-md font-mono font-bold text-brand-gold">{isPriceOnRequest ? "Price on request" : formatPrice(item.price)}</span>
          </div>

          {/* Quick Order controls */}
          <div className="grid grid-cols-2 gap-2 text-[10px] uppercase font-bold tracking-widest">
            {/* Add to Cart Button */}
            <button
              onClick={() => onAddToCart(item)}
              className="flex items-center justify-center gap-1.5 py-3 px-2 rounded-full bg-brand-dark hover:bg-brand-brown border border-brand-gold/25 text-brand-gold hover:text-brand-cream transition-all duration-300 cursor-pointer shadow-sm"
              title="Add this traditional portion to your tray"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add to Tray</span>
            </button>

            {/* Quick Checkout Now Button */}
            <button
              onClick={() => onOrderNowSingle(item)}
              className="flex items-center justify-center gap-1.5 py-3 px-2 rounded-full bg-brand-red hover:bg-brand-gold border border-brand-red hover:border-brand-gold text-white hover:text-brand-charcoal transition-all duration-300 cursor-pointer shadow-md shadow-brand-red/10 animate-hover"
              title="Instantly place WhatsApp order for this single item"
            >
              <Send className="w-3 h-3" />
              <span>Order Now</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
