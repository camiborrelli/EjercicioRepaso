import { SHOWS_SERVICES } from '../data/products';
import { Heart, Baby, Radio, ShieldCheck, Check, Calendar, ArrowRight } from 'lucide-react';

const ICON_MAP = {
  Heart,
  Baby,
  Radio,
  ShieldCheck,
};

export default function EventsShowsSection({ onOpenContactWithSubject }) {
  return (
    <section id="eventos" style={{ padding: '80px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '9999px',
            background: 'rgba(247, 37, 133, 0.1)',
            border: '1px solid rgba(247, 37, 133, 0.3)',
            color: '#F72585',
            fontSize: '0.85rem',
            fontWeight: 700,
            marginBottom: '14px',
          }}>
            <Calendar size={16} />
            <span>PRODUCCIONES INTEGRALES</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', color: '#FFFFFF', marginBottom: '14px' }}>
            Espectáculos para <span className="text-gradient-fire">Eventos Inolvidables</span>
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '1.05rem', maxWidth: '720px', margin: '0 auto' }}>
            Diseñamos shows a medida con operadores profesionales certificados, consolas electrónicas DMX computarizadas y homologación de seguridad en todo el país.
          </p>
        </div>

        {/* Services Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '50px',
        }}>
          {SHOWS_SERVICES.map((srv) => {
            const Icon = ICON_MAP[srv.icon] || Heart;

            return (
              <div
                key={srv.id}
                className="glass-panel"
                style={{
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: `3px solid ${srv.accent}`,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = `0 14px 30px ${srv.accent}25`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: `${srv.accent}20`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '18px',
                  }}>
                    <Icon size={24} color={srv.accent} />
                  </div>

                  <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', marginBottom: '4px' }}>
                    {srv.title}
                  </h3>
                  <div style={{ fontSize: '0.85rem', color: srv.accent, fontWeight: 600, marginBottom: '14px' }}>
                    {srv.subtitle}
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#9CA3AF', lineHeight: 1.6, marginBottom: '20px' }}>
                    {srv.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                    {srv.features.map((feat, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#D1D5DB' }}>
                        <Check size={14} color={srv.accent} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenContactWithSubject(srv.title)}
                  className="btn-outline"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '12px',
                    borderColor: `${srv.accent}50`,
                  }}
                >
                  <span>Solicitar Presupuesto</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

