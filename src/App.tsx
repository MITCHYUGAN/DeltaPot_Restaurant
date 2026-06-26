/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CheckCircle, Info, ShoppingBag } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { MenuItem, CartItem } from "./types";
import { RESTAURANT_SETTINGS } from "./data";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import Home from "./screens/Home";
import Menu from "./screens/Menu";

// Helper component to scroll window to top upon route transitions
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If there's a hash, let browser handle smooth scrolling to element
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toasts, setToasts] = useState<{ id: string; message: string; type: "success" | "info" }[]>([]);

  // Calculate quick metrics
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Custom high-converting reactive toast logger
  const showToast = (message: string, type: "success" | "info" = "success") => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  };

  // 1. Add item to cart tray
  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((ci) => ci.menuItem.id === item.id);
      if (existing) {
        showToast(`Increased ${item.name} quantity to ${existing.quantity + 1}`, "success");
        return prev.map((ci) => (ci.menuItem.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci));
      }
      showToast(`Added ${item.name} to your portion tray`, "success");
      return [...prev, { menuItem: item, quantity: 1 }];
    });
  };

  // 2. Adjust quantity on Cart drawer (+/-)
  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((ci) => {
          if (ci.menuItem.id === itemId) {
            const nextQty = ci.quantity + delta;
            return { ...ci, quantity: nextQty };
          }
          return ci;
        })
        .filter((ci) => ci.quantity > 0),
    );
  };

  // 3. Remove single item
  const handleRemoveItem = (itemId: string) => {
    setCartItems((prev) => {
      const target = prev.find((ci) => ci.menuItem.id === itemId);
      if (target) {
        showToast(`Removed ${target.menuItem.name} from tray`, "info");
      }
      return prev.filter((ci) => ci.menuItem.id !== itemId);
    });
  };

  // 4. Reset/Clear full cart
  const handleClearCart = () => {
    setCartItems([]);
    showToast("Tray cleared successfully", "info");
  };

  // 5. Instantly place order on WhatsApp for single food card item
  const handleOrderNowSingle = (item: MenuItem) => {
    const priceDisplay = item.price === 0 ? "Price on request" : `₦${item.price.toLocaleString()}`;
    const totalDisplay = item.price === 0 ? "Price on request" : `₦${item.price.toLocaleString()}`;

    const textPayload = `Hello DeltaPot! I'd like to place an order:

- ${item.name} x1 — ${priceDisplay}

Total: ${totalDisplay}

My delivery address:
_[Please specify your delivery location here]_`;

    const encodedText = encodeURIComponent(textPayload);
    const whatsappUrl = `https://wa.me/${RESTAURANT_SETTINGS.whatsapp.replace("+", "")}?text=${encodedText}`;

    showToast(`Redirecting directly to WhatsApp for ${item.name}...`, "info");
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 1000);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-brand-charcoal text-brand-cream font-sans">
        {/* Banner with logo & navigation menu */}
        <Navbar cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />

        {/* Dynamic Route Screen Switcher */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu onAddToCart={handleAddToCart} onOrderNowSingle={handleOrderNowSingle} cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />} />
            {/* Fallback route back to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Polished Foot details */}
        <Footer />

        {/* Collapsible right sidebar cart drawer */}
        <AnimatePresence>
          {isCartOpen && (
            <CartDrawer
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
              cartItems={cartItems}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveItem}
              onClearCart={handleClearCart}
            />
          )}
        </AnimatePresence>

        {/* Custom Toast Portal notifications positioning overlay */}
        <div className="fixed top-24 right-4 z-50 flex flex-col gap-2 max-w-sm pointer-events-none">
          <AnimatePresence>
            {toasts.map((toast) => (
              <motion.div
                key={toast.id}
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 50, scale: 0.9 }}
                className="pointer-events-auto p-4 bg-brand-dark/95 border-l-4 border-brand-gold bg-[#1e1511] text-brand-cream text-xs rounded shadow-2xl flex items-start gap-3 backdrop-blur-sm shadow-black/60"
              >
                {toast.type === "success" ? <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0" /> : <Info className="w-5 h-5 text-brand-red flex-shrink-0 animate-pulse" />}
                <div className="flex-1">
                  <p className="font-semibold uppercase tracking-wider text-[10px] text-brand-gold">Notification</p>
                  <p className="text-brand-cream/90 mt-0.5 leading-relaxed">{toast.message}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </Router>
  );
}
