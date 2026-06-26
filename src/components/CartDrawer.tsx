/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag, MapPin, MessageSquare, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { CartItem } from '../types';
import { RESTAURANT_SETTINGS } from '../data';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}: CartDrawerProps) {
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  // Live calculations
  const totalPriced = cartItems.reduce(
    (sum, item) => sum + item.menuItem.price * item.quantity,
    0
  );
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const hasPriceOnRequest = cartItems.some((item) => item.menuItem.price === 0);

  // Generate prefilled WhatsApp text URL
  const handlePlaceOrder = () => {
    if (cartItems.length === 0) return;

    let orderListText = '';
    cartItems.forEach((item) => {
      const priceVal =
        item.menuItem.price === 0
          ? 'Price on request'
          : `₦${(item.menuItem.price * item.quantity).toLocaleString()}`;
      orderListText += `- ${item.menuItem.name} x${item.quantity} — ${priceVal}\n`;
    });

    const totalText = hasPriceOnRequest
      ? `₦${totalPriced.toLocaleString()} + Price On Request Items`
      : `₦${totalPriced.toLocaleString()}`;

    const textPayload = `Hello DeltaPot! I'd like to place an order:

${orderListText}
Total: ${totalText}

My delivery address:
${address.trim() ? address.trim() : '_[Insert delivery address here]_'}${
      notes.trim() ? `\n\nSpecial Instructions:\n${notes.trim()}` : ''
    }`;

    const encodedText = encodeURIComponent(textPayload);
    const whatsappUrl = `https://wa.me/${RESTAURANT_SETTINGS.whatsapp.replace('+', '')}?text=${encodedText}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Dark overlay backdrop */}
      <div
        className="fixed inset-0 z-50 bg-brand-charcoal/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Floating sliding drawer */}
      <div className="fixed inset-y-0 right-0 z-50 flex max-w-full pl-10">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 180 }}
          className="w-screen max-w-md bg-brand-charcoal border-l border-brand-gold/20 flex flex-col justify-between shadow-2xl"
          role="dialog"
          aria-modal="true"
        >
          {/* Header controls */}
          <div className="p-5 border-b border-brand-gold/15 flex items-center justify-between bg-brand-dark">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5.5 h-5.5 text-brand-gold" />
              <h2 className="font-serif text-xl font-bold text-white uppercase tracking-wide">
                Your Tray ({totalCount})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-brand-cream/60 hover:text-brand-red rounded-full hover:bg-white/5 cursor-pointer transition-colors duration-200"
              aria-label="Close Tray"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Contents Scroll */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <ShoppingBag className="w-16 h-16 text-brand-gold/25 stroke-[1.5]" />
                <div>
                  <h3 className="font-serif text-lg font-bold text-brand-cream">Your tray is empty</h3>
                  <p className="text-xs text-brand-cream/50 max-w-xs mt-1 font-sans">
                    Browse DeltaPot's legendary Southern menu to fill your tray with smoking hot traditional dishes.
                  </p>
                </div>
              </div>
            ) : (
              <>
                {/* Visual warning on Price on Request items */}
                {hasPriceOnRequest && (
                  <div className="p-3 bg-brand-gold/10 border border-brand-gold/25 rounded-md text-brand-gold text-xs leading-relaxed font-sans">
                    💥 <strong>Note:</strong> Some premium items in your tray have "Price on request" status. The kitchen will quote prices directly on WhatsApp.
                  </div>
                )}

                {/* Clear all triggers */}
                <div className="flex justify-between items-center text-xs">
                  <span className="text-brand-cream/40 uppercase tracking-wider font-semibold">Review Portions</span>
                  <button
                    onClick={onClearCart}
                    className="text-brand-red hover:underline font-extrabold uppercase tracking-wide flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear All</span>
                  </button>
                </div>

                {/* Items collection */}
                <div className="space-y-3.5">
                  {cartItems.map((item) => {
                    const priceCombined =
                      item.menuItem.price === 0
                        ? 'Price on request'
                        : `₦${(item.menuItem.price * item.quantity).toLocaleString()}`;

                    return (
                      <div
                        key={item.menuItem.id}
                        className="p-3.5 bg-brand-dark/50 border border-brand-gold/5 rounded-2xl flex gap-3.5 items-start relative group shadow-sm"
                      >
                        {item.menuItem.image && (
                          <img
                            src={item.menuItem.image}
                            alt={item.menuItem.name}
                            className="w-14 h-14 object-cover rounded-xl flex-shrink-0 border border-brand-gold/10"
                          />
                        )}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif text-sm sm:text-base font-bold text-white truncate pr-6">
                            {item.menuItem.name}
                          </h4>
                          <span className="text-[10px] uppercase font-sans tracking-widest text-brand-gold/75 block mt-0.5">
                            {item.menuItem.category}
                          </span>
                          <span className="font-mono text-xs text-brand-gold/90 block mt-1">
                            {priceCombined}
                          </span>
                        </div>

                        {/* Quantity adjust controls */}
                        <div className="flex flex-col items-center gap-1">
                          <button
                            onClick={() => onRemoveItem(item.menuItem.id)}
                            className="p-1 text-brand-cream/25 hover:text-brand-red rounded-full transition-colors duration-150 cursor-pointer text-xs"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                          <div className="flex items-center bg-brand-dark border border-brand-gold/15 rounded-full text-xs overflow-hidden py-0.5">
                            <button
                              onClick={() => onUpdateQuantity(item.menuItem.id, -1)}
                              className="px-2 py-1 text-brand-cream/80 hover:bg-white/5 font-bold cursor-pointer"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2.5 font-bold font-mono text-white text-xs">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.menuItem.id, 1)}
                              className="px-2 py-1 text-brand-gold hover:bg-white/5 font-bold cursor-pointer"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Address and Instruction Forms */}
                <div className="space-y-4 pt-4 border-t border-brand-gold/15 mt-4">
                  <div className="space-y-1.5 animate-fade-in">
                    <label className="text-xs uppercase tracking-widest font-sans font-bold text-brand-gold flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-brand-red" />
                      <span>Delivery Address *</span>
                    </label>
                    <textarea
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Input Lekki suite, street or office location in detail for our dispatcher..."
                      rows={2}
                      className="w-full text-xs sm:text-sm p-3.5 bg-brand-dark border border-brand-gold/15 rounded-2xl text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold font-sans font-light placeholder-brand-cream/30 transition-all duration-200 h-20"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-widest font-sans font-bold text-brand-cream/70 flex items-center gap-1.5">
                      <MessageSquare className="w-4 h-4 text-brand-gold" />
                      <span>Cooking Instructions / Notes</span>
                    </label>
                    <input
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      type="text"
                      placeholder="e.g. Extra spicy, hold the onions, add water bottle..."
                      className="w-full text-xs sm:text-sm p-3.5 bg-brand-dark border border-brand-gold/15 rounded-2xl text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold font-sans font-light placeholder-brand-cream/30 transition-all duration-200"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Checkout Tray Footer summary */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-brand-gold/15 bg-brand-dark">
              <div className="space-y-3 mb-5">
                <div className="flex justify-between items-center text-brand-cream/70 text-sm">
                  <span>Subtotal portions</span>
                  <span className="font-mono">{totalCount} items</span>
                </div>
                <div className="flex justify-between items-end border-t border-brand-cream/10 pt-3">
                  <div className="text-base font-serif font-bold text-white uppercase tracking-wider">
                    Total Estimated
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-mono font-bold text-brand-gold leading-none">
                      ₦{totalPriced.toLocaleString()}
                    </div>
                    {hasPriceOnRequest && (
                      <span className="text-[10px] text-brand-red font-sans uppercase font-bold block mt-1 tracking-widest">
                        + Price on request
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* PLACE ORDER ACTION BUTTON */}
              <button
                onClick={handlePlaceOrder}
                className="w-full py-4 bg-brand-red hover:bg-brand-gold hover:text-brand-charcoal text-white text-xs sm:text-sm font-extrabold uppercase tracking-widest rounded-full transition-all duration-300 shadow-lg shadow-brand-red/15 cursor-pointer flex items-center justify-center gap-2 border border-brand-red hover:border-brand-gold"
              >
                <Send className="w-4 h-4" />
                <span>Place Order via WhatsApp</span>
              </button>

              <div className="text-center font-sans text-[10px] text-brand-cream/40 mt-3 uppercase tracking-wider">
                 Opens WhatsApp redirecting to DeltaPot lines
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </>
  );
}
