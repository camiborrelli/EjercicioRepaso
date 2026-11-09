import { useState } from 'react';
import { Sparkles, ShoppingBag, Menu, X, MessageSquare, Phone } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#catalogo', label: 'Catálogo' },
    { href: '#pet-friendly', label: '🐾 Pet Friendly' },
    { href: '#simulador', label: 'Efectos & Shows' },
    { href: '#eventos', label: 'Bodas & Eventos' },
    { href: '#seguridad', label: 'Seguridad SMA' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <header className="glass-nav fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #FF5400, #F72585)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px rgba(247, 37, 133, 0.4)'
          }}>
            <Sparkles size={22} color="#FFF" />
          </div>
          <div>
            <div style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 900,
              fontSize: '1.2rem',
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              MUNDO <span className="text-gradient-fire">PIROTÉCNICO</span>
            </div>
            <div style={{ fontSize: '0.68rem', color: '#9CA3AF', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>
              Uruguay • Importación & Shows
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav style={{ display: 'none' }} className="md-nav">
          <ul style={{ display: 'flex', alignItems: 'center', gap: '22px', listStyle: 'none' }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{
                    color: link.href === '#pet-friendly' ? '#06D6A0' : '#D1D5DB',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: link.href === '#pet-friendly' ? 600 : 500,
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#FFB703')}
                  onMouseLeave={(e) => (e.target.style.color = link.href === '#pet-friendly' ? '#06D6A0' : '#D1D5DB')}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          
          {/* WhatsApp Direct Header Link */}
          <a
            href="https://wa.me/59895018716"
            target="_blank"
            rel="noopener noreferrer"
            title="Atención Comercial"
            style={{
              textDecoration: 'none',
              background: 'rgba(37, 211, 102, 0.12)',
              border: '1px solid rgba(37, 211, 102, 0.3)',
              color: '#25D366',
              borderRadius: '9999px',
              padding: '7px 14px',
              display: 'none',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.84rem',
              fontWeight: 600,
            }}
            id="desktop-whatsapp-nav"
          >
            <Phone size={14} />
            <span>095 018 716</span>
          </a>

          {/* Cart / Presupuesto Button */}
          <button
            onClick={onOpenCart}
            style={{
              background: 'linear-gradient(135deg, rgba(255,84,0,0.2), rgba(247,37,133,0.2))',
              border: '1px solid rgba(255,84,0,0.4)',
              color: '#FFFFFF',
              borderRadius: '9999px',
              padding: '8px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.88rem'
            }}
          >
            <ShoppingBag size={17} color="#FFB703" />
            <span>Presupuesto</span>
            {cartCount > 0 && (
              <span style={{
                background: '#F72585',
                color: '#FFF',
                borderRadius: '9999px',
                padding: '2px 7px',
                fontSize: '0.75rem',
                fontWeight: 700
              }}>
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
            style={{
              background: 'transparent',
              border: 'none',
              color: '#FFF',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              padding: '6px'
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: 'rgba(9, 11, 26, 0.98)',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: link.href === '#pet-friendly' ? '#06D6A0' : '#E5E7EB',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                padding: '6px 0'
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/59895018716"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              background: '#25D366',
              color: '#FFF',
              padding: '12px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              fontWeight: 700,
              fontSize: '0.92rem',
              marginTop: '6px',
            }}
          >
            <MessageSquare size={17} />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 860px) {
          .md-nav { display: block !important; }
          .mobile-toggle { display: none !important; }
          #desktop-whatsapp-nav { display: inline-flex !important; }
        }
      `}</style>
    </header>
  );
}
