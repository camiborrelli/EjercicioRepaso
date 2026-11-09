import { useState, useRef, useCallback } from 'react';
import FireworksCanvas from './components/FireworksCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PetFriendlySection from './components/PetFriendlySection';
import CatalogSection from './components/CatalogSection';
import ShowSimulator from './components/ShowSimulator';
import EventsShowsSection from './components/EventsShowsSection';
import SafetySection from './components/SafetySection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import QuoteCartDrawer from './components/QuoteCartDrawer';
import Footer from './components/Footer';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [prefilledContactSubject, setPrefilledContactSubject] = useState('');

  // Fireworks trigger callback ref
  const fireworkLauncherRef = useRef(null);

  const handleRegisterTrigger = useCallback((launcherFn) => {
    fireworkLauncherRef.current = launcherFn;
  }, []);

  const triggerFirework = useCallback((x = null, y = null, colors = null, type = 'peony') => {
    if (fireworkLauncherRef.current) {
      fireworkLauncherRef.current(x, y, colors, type);
    }
  }, []);

  // Multi-shell Grand Finale sequence (Original)
  const triggerGrandFinale = useCallback(() => {
    if (!fireworkLauncherRef.current) return;
    const colorsList = [
      ['#FF3366', '#FF9933', '#FFFF66'],
      ['#00F5D4', '#00BBF9', '#7B2CBF'],
      ['#FFD166', '#FFB703', '#FFFFFF'],
      ['#EF476F', '#F72585', '#7209B7'],
      ['#06D6A0', '#118AB2', '#FFE6A7'],
    ];

    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        const x = window.innerWidth * (0.15 + (i % 5) * 0.18) + (Math.random() * 60 - 30);
        const y = window.innerHeight * (0.12 + Math.random() * 0.3);
        const palette = colorsList[i % colorsList.length];
        const type = i % 2 === 0 ? 'willow' : 'grand';
        triggerFirework(x, y, palette, type);
      }, i * 260);
    }
  }, [triggerFirework]);

  // Cart operations
  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    triggerFirework(null, null, product.colors, 'peony');
  };

  const handleUpdateQty = (productId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleSelectPetCategory = () => {
    setSelectedCategory('pet-friendly');
    const el = document.getElementById('catalogo');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenContactWithSubject = (subject) => {
    setPrefilledContactSubject(subject);
    const el = document.getElementById('contacto');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#070814', overflowX: 'hidden' }}>
      
      {/* Background Interactive Canvas (Original design, completely silent) */}
      <FireworksCanvas
        isAuto={true}
        interactive={true}
        onRegisterTrigger={handleRegisterTrigger}
      />

      {/* Main Content (layered above canvas) */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navbar
          cartCount={totalCartCount}
          onOpenCart={() => setIsCartOpen(true)}
          onLaunchFireworks={triggerGrandFinale}
        />

        <main>
          <Hero onTriggerGrandFinale={triggerGrandFinale} />

          <PetFriendlySection
            onSelectPetCategory={handleSelectPetCategory}
            onAddToCart={handleAddToCart}
          />

          <ShowSimulator onSelectCategory={setSelectedCategory} />

          <CatalogSection
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onAddToCart={handleAddToCart}
            onTriggerFirework={triggerFirework}
          />

          <EventsShowsSection onOpenContactWithSubject={handleOpenContactWithSubject} />

          <SafetySection />

          <ReviewsSection />

          <ContactSection prefilledSubject={prefilledContactSubject} />
        </main>

        <Footer />
      </div>

      {/* Slide-in Cart / Presupuesto Drawer */}
      <QuoteCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating WhatsApp Action Pill for quick access */}
      <a
        href="https://wa.me/59895018716?text=Hola%20Mundo%20Pirot%C3%A9cnico%2C%20quisiera%20hacer%20una%20consulta"
        target="_blank"
        rel="noopener noreferrer"
        title="Chatear con un asesor por WhatsApp"
        className="whatsapp-float-btn"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          background: '#25D366',
          color: '#FFF',
          padding: '12px 20px',
          borderRadius: '9999px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontWeight: 700,
          textDecoration: 'none',
          boxShadow: '0 8px 30px rgba(37, 211, 102, 0.45)',
          zIndex: 80,
          fontFamily: 'Outfit, sans-serif',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <span style={{ fontSize: '1.2rem' }}>💬</span>
        <span>WhatsApp Oficial</span>
      </a>
    </div>
  );
}
