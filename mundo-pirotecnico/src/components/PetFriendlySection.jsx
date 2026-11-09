import { ShieldCheck, Heart, Sparkles, VolumeX, Eye, ArrowRight } from 'lucide-react';

export default function PetFriendlySection({ onSelectPetCategory }) {
  const benefits = [
    {
      icon: <VolumeX size={24} color="#06D6A0" />,
      title: 'Bajo Nivel Decibélico',
      desc: 'Genera menos de 65 decibeles, eliminando las detonaciones secas que provocan taquicardia o pánico en mascotas.',
    },
    {
      icon: <Eye size={24} color="#00F5D4" />,
      title: 'Máximo Impacto Visual',
      desc: 'Disfruta de cometas de colores vibrantes, fuentes de perlas y cascadas doradas con la misma belleza de siempre.',
    },
    {
      icon: <Heart size={24} color="#F72585" />,
      title: 'Inclusivo para la Familia',
      desc: 'Ideal para celebraciones con niños pequeños, personas con hipersensibilidad acústica (TEA) y adultos mayores.',
    },
    {
      icon: <ShieldCheck size={24} color="#FFB703" />,
      title: 'Compromiso Consciente',
      desc: 'Mundo Pirotécnico lidera en Uruguay la evolución hacia festejos armónicos, alegres y respetuosos.',
    },
  ];

  return (
    <section id="pet-friendly" style={{
      position: 'relative',
      padding: 'clamp(50px, 8vw, 80px) 16px',
      background: 'linear-gradient(180deg, rgba(6, 214, 160, 0.05) 0%, rgba(7, 8, 20, 0) 100%)',
      borderTop: '1px solid rgba(6, 214, 160, 0.15)',
      borderBottom: '1px solid rgba(6, 214, 160, 0.15)',
    }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '5px 14px',
            borderRadius: '9999px',
            background: 'rgba(6, 214, 160, 0.12)',
            border: '1px solid rgba(6, 214, 160, 0.3)',
            color: '#06D6A0',
            fontWeight: 700,
            fontSize: '0.82rem',
            marginBottom: '14px',
          }}>
            <ShieldCheck size={16} />
            <span>PIROTECNIA CONSCIENTE • URUGUAY</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(1.8rem, 5vw, 3.2rem)',
            color: '#FFFFFF',
            marginBottom: '14px',
          }}>
            Línea <span style={{ color: '#06D6A0' }}>Pet Friendly</span> & Bajo Ruido
          </h2>
          <p style={{
            color: '#9CA3AF',
            maxWidth: '720px',
            margin: '0 auto',
            fontSize: 'clamp(0.92rem, 2vw, 1.05rem)',
          }}>
            Porque celebrar no tiene por qué ser un momento de angustia para nuestros amigos de cuatro patas. Descubre nuestra gama de fuegos artificiales silenciosos enfocados en luz, color y magia.
          </p>
        </div>

        {/* Benefits Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(220px, 45vw, 260px), 1fr))',
          gap: '16px',
          marginBottom: '36px',
        }}>
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: 'clamp(18px, 3vw, 24px)',
                background: 'rgba(12, 28, 24, 0.6)',
                borderColor: 'rgba(6, 214, 160, 0.2)',
              }}
            >
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '14px',
              }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.1rem', color: '#FFFFFF', marginBottom: '8px' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.86rem', color: '#9CA3AF', lineHeight: 1.55 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Action card banner */}
        <div className="glass-panel" style={{
          padding: 'clamp(22px, 4vw, 34px)',
          background: 'linear-gradient(135deg, rgba(6, 214, 160, 0.15) 0%, rgba(0, 180, 216, 0.08) 100%)',
          borderColor: 'rgba(6, 214, 160, 0.35)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
          borderRadius: '20px',
        }}>
          <div style={{ flex: '1 1 300px' }}>
            <h3 style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.55rem)', color: '#FFFFFF', marginBottom: '6px' }}>
              ¿Buscas armar un show familiar sin estampidos molestos?
            </h3>
            <p style={{ color: '#D1D5DB', fontSize: '0.9rem', maxWidth: '640px' }}>
              Te asesoramos para cumpleaños, quintas, chacras y festejos de fin de año con total tranquilidad para tus mascotas.
            </p>
          </div>
          <button
            onClick={onSelectPetCategory}
            className="btn-pet"
            style={{ fontSize: '0.95rem', padding: '12px 24px', flex: '1 1 240px' }}
          >
            <span>Ver Productos Pet Friendly</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
