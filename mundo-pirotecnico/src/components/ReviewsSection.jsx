import { TESTIMONIALS } from '../data/products';
import { Star, MessageCircle } from 'lucide-react';

export default function ReviewsSection() {
  return (
    <section style={{ padding: '70px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '9999px',
            background: 'rgba(255, 183, 3, 0.1)',
            border: '1px solid rgba(255, 183, 3, 0.3)',
            color: '#FFB703',
            fontSize: '0.85rem',
            fontWeight: 700,
            marginBottom: '14px',
          }}>
            <Star size={16} fill="#FFB703" />
            <span>OPINIONES DE CLIENTES</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', color: '#FFFFFF' }}>
            La Confianza de Miles de Celebraciones
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="glass-panel"
              style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '14px' }}>
                  {[...Array(t.stars)].map((_, idx) => (
                    <Star key={idx} size={18} color="#FFB703" fill="#FFB703" />
                  ))}
                </div>
                <p style={{ color: '#E5E7EB', fontStyle: 'italic', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '20px' }}>
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '14px' }}>
                <div style={{ fontWeight: 700, color: '#FFF', fontSize: '1rem' }}>{t.name}</div>
                <div style={{ fontSize: '0.82rem', color: '#06D6A0' }}>{t.event}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

