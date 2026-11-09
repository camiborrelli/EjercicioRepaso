import { useState } from 'react';
import { Sliders, CheckCircle2, Zap, ArrowRight, ShieldCheck, Play, Eye } from 'lucide-react';

const PYRO_EFFECTS = [
  {
    id: 'brocade',
    name: 'Palmera Brocada Titanio (Brocade Crown)',
    category: 'Gran Altura',
    altitude: '35 a 45 metros',
    noise: 'Intensidad Tradicional',
    caliber: '1.5" - 2" Pulgadas',
    description: 'El efecto rey de las grandes celebraciones. Al detonar a máxima altura, despliega enormes ramas doradas que descienden en cascada luminosa de larga duración.',
    image: 'https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?auto=format&fit=crop&w=900&q=80',
    colors: ['#FFD166', '#FFB703', '#FFFFFF'],
    catId: 'tortas',
  },
  {
    id: 'pet-aurora',
    name: 'Cometas Aurora Pet Friendly (Zero Noise)',
    category: 'Línea Silenciosa',
    altitude: '20 a 30 metros',
    noise: 'Silencioso (< 65 dB)',
    caliber: '1.2" Neón',
    description: 'Diseñado específicamente para cuidar mascotas y personas con hipersensibilidad acústica. Ráfagas rítmicas de esferas de luz neón violeta, turquesa y esmeralda sin detonación sonora.',
    image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=900&q=80',
    colors: ['#00F5D4', '#7B2CBF', '#06D6A0'],
    catId: 'pet-friendly',
  },
  {
    id: 'indoor-cold',
    name: 'Chispas Frías para Salones (Sparkular FX)',
    category: 'Efectos Especiales',
    altitude: '2 a 4 metros regulable',
    noise: 'Silencioso (0% Estampido)',
    caliber: 'Titanio Compuesto',
    description: 'Pirotecnia fría para bodas y fiestas de 15. No emite humo asfixiante, no activa alarmas de incendio y las chispas no queman telas ni la piel al contacto.',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=900&q=80',
    colors: ['#FFFFFF', '#FFE6A7'],
    catId: 'fuentes',
  },
  {
    id: 'chrysanthemum',
    name: 'Crisantemo Imperial Multicolor con Pistilo',
    category: 'Show Festivo',
    altitude: '30 metros',
    noise: 'Fuerte Impacto',
    caliber: '1.5" Pulgadas',
    description: 'Apertura simétrica esférica perfecta con núcleo de color rubí y puntas con efecto estroboscópico de titanio blanco.',
    image: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?auto=format&fit=crop&w=900&q=80',
    colors: ['#EF476F', '#118AB2', '#FFE6A7'],
    catId: 'tortas',
  },
];

export default function ShowSimulator({ onSelectCategory }) {
  const [selectedEffect, setSelectedEffect] = useState(PYRO_EFFECTS[0]);

  const handleFilterClick = () => {
    if (onSelectCategory) {
      onSelectCategory(selectedEffect.catId);
      const el = document.getElementById('catalogo');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="simulador" style={{
      padding: 'clamp(50px, 8vw, 80px) 16px',
      position: 'relative',
      overflow: 'hidden',
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
            background: 'rgba(255, 183, 3, 0.1)',
            border: '1px solid rgba(255, 183, 3, 0.3)',
            color: '#FFB703',
            fontSize: '0.82rem',
            fontWeight: 700,
            marginBottom: '12px',
          }}>
            <Sliders size={15} />
            <span>GUÍA TÉCNICA DE EFECTOS PIROTÉCNICOS</span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3.2rem)', color: '#FFF', marginBottom: '12px' }}>
            Conoce los <span className="text-gradient-fire">Efectos & Calibres Reales</span>
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', maxWidth: '680px', margin: '0 auto' }}>
            Explora las características técnicas de nuestras líneas: desde la suavidad acústica Pet Friendly hasta los festivales aéreos de nivel internacional.
          </p>
        </div>

        {/* Interactive Showcase Box */}
        <div className="glass-panel" style={{
          padding: 'clamp(20px, 4vw, 36px)',
          background: 'rgba(15, 17, 34, 0.92)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
        }}>
          
          {/* Effect Selector Tabs */}
          <div style={{
            display: 'flex',
            gap: '10px',
            overflowX: 'auto',
            paddingBottom: '16px',
            marginBottom: '26px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          }} className="hide-scroll-bar">
            {PYRO_EFFECTS.map((eff) => {
              const isSelected = selectedEffect.id === eff.id;
              return (
                <button
                  key={eff.id}
                  onClick={() => setSelectedEffect(eff)}
                  style={{
                    background: isSelected ? 'linear-gradient(135deg, rgba(255,84,0,0.25), rgba(247,37,133,0.25))' : 'rgba(255, 255, 255, 0.04)',
                    border: `1px solid ${isSelected ? '#FF5400' : 'rgba(255, 255, 255, 0.1)'}`,
                    borderRadius: '12px',
                    padding: '10px 18px',
                    color: isSelected ? '#FFFFFF' : '#9CA3AF',
                    fontWeight: 600,
                    fontSize: '0.86rem',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.2s',
                    flexShrink: 0,
                  }}
                >
                  <span style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: isSelected ? '#FF5400' : '#6B7280',
                  }} />
                  <span>{eff.name.split(' (')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Effect Spotlight Card */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 45vw, 480px), 1fr))',
            gap: '28px',
            alignItems: 'center',
          }}>
            
            {/* Visual Real Photo Container */}
            <div style={{
              position: 'relative',
              borderRadius: '18px',
              overflow: 'hidden',
              height: 'clamp(240px, 35vw, 360px)',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
            }}>
              <img
                src={selectedEffect.image}
                alt={selectedEffect.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(7, 8, 20, 0.85) 0%, transparent 60%)',
              }} />

              {/* Badge on Image */}
              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                right: '16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span style={{
                  background: 'rgba(0,0,0,0.7)',
                  backdropFilter: 'blur(8px)',
                  padding: '5px 12px',
                  borderRadius: '9999px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: '#FFB703',
                  border: '1px solid rgba(255, 183, 3, 0.3)'
                }}>
                  {selectedEffect.category}
                </span>

                <div style={{ display: 'flex', gap: '6px' }}>
                  {selectedEffect.colors.map((c, i) => (
                    <span
                      key={i}
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: c,
                        boxShadow: `0 0 8px ${c}`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Technical Information */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <h3 style={{ fontSize: 'clamp(1.3rem, 3.5vw, 1.7rem)', color: '#FFF', marginBottom: '8px' }}>
                  {selectedEffect.name}
                </h3>
                <p style={{ color: '#D1D5DB', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  {selectedEffect.description}
                </p>
              </div>

              {/* Specs Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '12px',
                padding: '16px',
                background: 'rgba(0, 0, 0, 0.35)',
                borderRadius: '14px',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#9CA3AF', textTransform: 'uppercase' }}>Altura Promedio</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFF' }}>{selectedEffect.altitude}</div>
                </div>

                <div>
                  <div style={{ fontSize: '0.72rem', color: '#9CA3AF', textTransform: 'uppercase' }}>Calibre</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#00F5D4' }}>{selectedEffect.caliber}</div>
                </div>

                <div>
                  <div style={{ fontSize: '0.72rem', color: '#9CA3AF', textTransform: 'uppercase' }}>Nivel Sonoro</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: selectedEffect.catId === 'pet-friendly' ? '#06D6A0' : '#FFB703' }}>
                    {selectedEffect.noise}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
                <button
                  onClick={handleFilterClick}
                  className="btn-fire"
                  style={{ fontSize: '0.92rem', padding: '12px 22px' }}
                >
                  <Eye size={16} />
                  <span>Ver Productos con este Efecto</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
