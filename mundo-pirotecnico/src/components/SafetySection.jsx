import { SAFETY_TIPS } from '../data/products';
import { ShieldCheck, AlertCircle, FileCheck, PhoneCall } from 'lucide-react';

export default function SafetySection() {
  return (
    <section id="seguridad" style={{ padding: '80px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '9999px',
            background: 'rgba(6, 214, 160, 0.1)',
            border: '1px solid rgba(6, 214, 160, 0.3)',
            color: '#06D6A0',
            fontSize: '0.85rem',
            fontWeight: 700,
            marginBottom: '14px',
          }}>
            <ShieldCheck size={16} />
            <span>SEGURIDAD Y RESPONSABILIDAD</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', color: '#FFFFFF', marginBottom: '14px' }}>
            Normas de Uso y <span className="text-gradient-cyan">Certificación SMA</span>
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '1.05rem', maxWidth: '680px', margin: '0 auto' }}>
            Todos los artículos comercializados por Mundo Pirotécnico cumplen rigurosamente con la normativa vigente del Servicio de Material y Armamento del Ejército y la Dirección Nacional de Bomberos.
          </p>
        </div>

        {/* Safety tips cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px',
          marginBottom: '40px',
        }}>
          {SAFETY_TIPS.map((tip) => (
            <div
              key={tip.number}
              className="glass-panel"
              style={{
                padding: '24px',
                position: 'relative',
                background: 'rgba(18, 20, 38, 0.65)',
              }}
            >
              <span style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '2.4rem',
                fontWeight: 900,
                color: 'rgba(255, 255, 255, 0.1)',
                position: 'absolute',
                top: '14px',
                right: '18px',
                lineHeight: 1,
              }}>
                {tip.number}
              </span>
              <h3 style={{ fontSize: '1.15rem', color: '#FFF', marginBottom: '10px' }}>
                {tip.title}
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#9CA3AF', lineHeight: 1.6 }}>
                {tip.text}
              </p>
            </div>
          ))}
        </div>

        {/* Legal & Emergency Callout */}
        <div className="glass-panel" style={{
          padding: '24px 30px',
          background: 'rgba(255, 84, 0, 0.08)',
          border: '1px solid rgba(255, 84, 0, 0.25)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              background: 'rgba(255, 84, 0, 0.2)',
              padding: '12px',
              borderRadius: '12px',
              color: '#FFB703',
            }}>
              <AlertCircle size={28} />
            </div>
            <div>
              <h4 style={{ color: '#FFF', fontSize: '1.05rem', marginBottom: '4px' }}>
                Prohibida la venta a menores de 18 años
              </h4>
              <p style={{ color: '#9CA3AF', fontSize: '0.86rem' }}>
                La manipulación de pirotecnia debe ser siempre realizada por adultos responsables y sobrios.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#E5E7EB' }}>
            <FileCheck size={18} color="#06D6A0" />
            <span>Registro Oficial SMA N° 451/2012</span>
          </div>
        </div>

      </div>
    </section>
  );
}

