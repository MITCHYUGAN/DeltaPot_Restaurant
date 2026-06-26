/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { Search, Compass, SlidersHorizontal, EyeOff, ShoppingBag, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MenuItem } from '../types';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data';
import FoodCard from '../components/FoodCard';

interface MenuProps {
  onAddToCart: (item: MenuItem) => void;
  onOrderNowSingle: (item: MenuItem) => void;
  cartCount: number;
  onOpenCart: () => void;
}

export default function Menu({ onAddToCart, onOrderNowSingle, cartCount, onOpenCart }: MenuProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = useMemo(() => ["All", ...MENU_CATEGORIES], []);

  // Filter items based on selected category and keyword search query
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-brand-charcoal text-brand-cream min-h-screen py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page title and description */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-brand-gold">
            DeltaPot Cookery catalog
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-white">
            Our Southern Menu
          </h1>
          <p className="font-sans text-xs sm:text-sm text-brand-cream/65 leading-relaxed font-light">
            Each recipe represents authentic culinary traditions. Choose your favorites, customize your tray, and order instantly on WhatsApp.
          </p>
        </div>

        {/* Powerful Search bar and category filtering toolbar */}
        <div className="space-y-6 mb-10 bg-gradient-to-b from-brand-dark to-brand-brown/85 p-6 sm:p-8 rounded-3xl border border-brand-gold/10 shadow-xl shadow-brand-charcoal/40">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-brand-cream/40">
                <Search className="w-5 h-5 text-brand-gold" />
              </span>
              <input
                type="text"
                placeholder="Search soups, roasted meats, cocktails or wine collections..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 px-5 bg-brand-charcoal border border-brand-gold/15 rounded-full text-sm text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold placeholder-brand-cream/35 transition-all duration-300 font-sans tracking-wide text-brand-cream font-light"
              />
            </div>

            {/* Helper status text */}
            <div className="text-right flex items-center justify-between sm:justify-end gap-3 text-xs text-brand-cream/50 uppercase font-sans tracking-wider">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-brand-charcoal rounded-full border border-brand-gold/10 text-brand-gold font-bold">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Filters</span>
              </span>
              <span className="font-mono text-[11px] tracking-wide text-brand-cream/60">{filteredItems.length} matching recipes</span>
            </div>
          </div>

          {/* Scrolling Tab Buttons - Mobile horizontally scrollable with visual indicators */}
          <div className="relative">
            <div className="flex overflow-x-auto pb-2 gap-2 scrollbar-none snap-x snap-mandatory mask-gradient-overlay" style={{ scrollbarWidth: 'none' }}>
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`snap-center px-6 py-2.5 rounded-full text-xs uppercase font-extrabold tracking-widest border transition-all duration-300 whitespace-nowrap cursor-pointer ${
                      isSelected
                        ? 'bg-brand-red border-brand-red text-white shadow-md'
                        : 'bg-brand-charcoal border-brand-gold/10 text-brand-cream/70 hover:text-brand-gold hover:border-brand-gold/30'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
            
            {/* Mobile swipe gesture tip */}
            <div className="md:hidden flex items-center justify-center gap-1 text-[9px] text-brand-cream/30 uppercase tracking-widest pt-2 font-sans font-medium">
              <span>Swipe left or right for more categories</span>
            </div>
          </div>
        </div>

        {/* Dynamic Menu Grid layout */}
        <AnimatePresence mode="popLayout">
          {filteredItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-20 text-center flex flex-col items-center justify-center space-y-4"
            >
              <EyeOff className="w-14 h-14 text-brand-gold/20" />
              <div>
                <h3 className="font-serif text-xl font-bold text-white">No culinary items found</h3>
                <p className="text-xs text-brand-cream/60 max-w-sm mt-1 mx-auto font-sans leading-relaxed">
                  We elements do not match your current keyword <span className="text-brand-gold font-mono">"{searchQuery}"</span>. Try adjusting your searches or select another category.
                </p>
              </div>
              <button
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                className="px-6 py-3 bg-brand-dark hover:bg-brand-brown border border-brand-gold/20 text-brand-gold hover:text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300"
              >
                Reset catalog
              </button>
            </motion.div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {filteredItems.map((item) => (
                <FoodCard
                  key={item.id}
                  item={item}
                  onAddToCart={onAddToCart}
                  onOrderNowSingle={onOrderNowSingle}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* FLOATING DIRECT TRIGGER AT HAND BOTTOM RIGHT */}
      <AnimatePresence>
        {cartCount > 0 && (
          <motion.button
            id="floating-cart"
            onClick={onOpenCart}
            initial={{ scale: 0, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 30 }}
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-6 right-6 z-30 p-4 bg-brand-red hover:bg-brand-red/90 text-white rounded-full shadow-2xl flex items-center gap-2.5 hover:shadow-brand-red/30 cursor-pointer border border-brand-red"
            aria-label="Open Tray drawer"
          >
            <ShoppingBag className="w-6 h-6" />
            <span className="font-mono font-bold text-xs bg-brand-charcoal text-brand-gold px-2 py-0.5 rounded-full border border-brand-gold/25">
              {cartCount} Portions
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
