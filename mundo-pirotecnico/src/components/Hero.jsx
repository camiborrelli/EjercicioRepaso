import { Sparkles, Flame, Zap, Award, Shield, MapPin, CheckCircle } from 'lucide-react';

export default function Hero({ onTriggerGrandFinale }) {
  return (
    <section style={{
      position: 'relative',
      minHeight: '88vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 'clamp(95px, 14vw, 140px) 16px 50px 16px',
      overflow: 'hidden',
      background: 'transparent',
    }}>
      {/* Background glow orbs */}
      <div style={{
        position: 'absolute',
        top: '25%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'clamp(300px, 70vw, 600px)',
        height: 'clamp(300px, 70vw, 600px)',
        background: 'radial-gradient(circle, rgba(255, 84, 0, 0.16) 0%, rgba(247, 37, 133, 0.08) 50%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(70px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1, width: '100%' }}>
        
        {/* Top Floating Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 14px',
          borderRadius: '9999px',
          background: 'rgba(255, 255, 255, 0.06)',
          border: '1px solid rgba(255, 183, 3, 0.3)',
          backdropFilter: 'blur(10px)',
          marginBottom: '20px',
          cursor: 'pointer',
          maxWidth: '95vw',
        }}
        onClick={onTriggerGrandFinale}
        title="Toca para detonar fuegos artificiales"
        >
          <span style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#FF5400',
            boxShadow: '0 0 10px #FF5400',
            flexShrink: 0
          }} className="animate-pulse-glow" />
          <span style={{ fontSize: 'clamp(0.75rem, 2.5vw, 0.85rem)', color: '#FFE6A7', fontWeight: 600, textAlign: 'left' }}>
            🎆 Haz clic en cualquier lugar para detonar fuegos artificiales
          </span>
          <Sparkles size={14} color="#FFB703" style={{ flexShrink: 0 }} />
        </div>

        {/* Main Title */}
        <h1 style={{
          fontSize: 'clamp(2rem, 7vw, 4.4rem)',
          lineHeight: 1.1,
          marginBottom: '16px',
          fontWeight: 900,
          color: '#FFFFFF'
        }}>
          EL ARTE DE ILUMINAR <br />
          <span className="text-gradient-fire">TUS GRANDES MOMENTOS</span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(0.92rem, 2.5vw, 1.2rem)',
          color: '#D1D5DB',
          maxWidth: '780px',
          margin: '0 auto 30px auto',
          fontWeight: 400,
          lineHeight: 1.6
        }}>
          Bienvenido a <strong>Mundo Pirotécnico</strong>. Espectáculos y fuegos de alta gama: festivales aéreos, <strong>línea Pet Friendly de bajo ruido</strong>, chispas frías para bodas y cañones para revelación de género.
        </p>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '40px',
        }}>
          <button
            onClick={onTriggerGrandFinale}
            className="btn-fire"
            style={{ fontSize: '1rem', padding: '12px 24px', flex: '1 1 200px', maxWidth: '300px' }}
          >
            <Flame size={18} />
            <span>¡Detonar Gran Final!</span>
          </button>

          <a
            href="#catalogo"
            className="btn-outline"
            style={{ fontSize: '1rem', padding: '12px 24px', textDecoration: 'none', flex: '1 1 180px', maxWidth: '280px' }}
          >
            <Zap size={16} color="#00F5D4" />
            <span>Ver Catálogo 2026</span>
          </a>

          <a
            href="#pet-friendly"
            className="btn-pet"
            style={{ fontSize: '0.95rem', padding: '12px 20px', textDecoration: 'none', flex: '1 1 180px', maxWidth: '280px' }}
          >
            <span>🐾 Pet Friendly</span>
          </a>
        </div>

        {/* Highlight trust metrics */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '14px',
          marginTop: '10px'
        }}>
          <div className="glass-panel" style={{ padding: '18px 16px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <div style={{ background: 'rgba(255, 183, 3, 0.15)', padding: '6px', borderRadius: '8px' }}>
                <Award size={18} color="#FFB703" />
              </div>
              <h4 style={{ fontSize: '1rem', color: '#FFF' }}>Líderes en Uruguay</h4>
            </div>
            <p style={{ fontSize: '0.82rem', color: '#9CA3AF' }}>
              Más de 15 años brindando seguridad y magia en festejos familiares y masivos.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '18px 16px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <div style={{ background: 'rgba(6, 214, 160, 0.15)', padding: '6px', borderRadius: '8px' }}>
                <Shield size={18} color="#06D6A0" />
              </div>
              <h4 style={{ fontSize: '1rem', color: '#FFF' }}>100% Homologado</h4>
            </div>
            <p style={{ fontSize: '0.82rem', color: '#9CA3AF' }}>
              Habilitados por el Servicio de Material y Armamento (SMA) y Bomberos.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '18px 16px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <div style={{ background: 'rgba(0, 245, 212, 0.15)', padding: '6px', borderRadius: '8px' }}>
                <CheckCircle size={18} color="#00F5D4" />
              </div>
              <h4 style={{ fontSize: '1rem', color: '#FFF' }}>Pirotecnia Fría Indoor</h4>
            </div>
            <p style={{ fontSize: '0.82rem', color: '#9CA3AF' }}>
              Chispas sin humo asfixiante, especial para casamientos y salones de fiesta.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '18px 16px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <div style={{ background: 'rgba(247, 37, 133, 0.15)', padding: '8px', borderRadius: '10px' }}>
                <MapPin size={18} color="#F72585" />
              </div>
              <h4 style={{ fontSize: '1rem', color: '#FFF' }}>Local & Envíos</h4>
            </div>
            <p style={{ fontSize: '0.82rem', color: '#9CA3AF' }}>
              Local en Hocquart 1642 (Montevideo) y despachos a todo el interior.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
