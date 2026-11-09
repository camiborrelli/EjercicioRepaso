import { Sparkles, Heart, ShieldCheck, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: 'rgba(5, 6, 14, 0.95)',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '60px 24px 30px 24px',
      position: 'relative',
      zIndex: 1,
    }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        
        {/* Top Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px',
          marginBottom: '50px',
        }}>
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #FF5400, #F72585)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Sparkles size={20} color="#FFF" />
              </div>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '1.25rem', color: '#FFF' }}>
                MUNDO <span className="text-gradient-fire">PIROTÉCNICO</span>
              </span>
            </div>
            <p style={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '16px' }}>
              Empresa líder en Uruguay en importación directa, distribución mayorista y espectáculos de fuegos artificiales de alta gama y línea Pet Friendly.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#06D6A0', fontSize: '0.85rem' }}>
              <ShieldCheck size={16} />
              <span>Habilitado por el SMA y Bomberos</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '1.05rem', marginBottom: '16px' }}>Navegación</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><a href="#catalogo" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.9rem' }}>Catálogo de Productos</a></li>
              <li><a href="#pet-friendly" style={{ color: '#06D6A0', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>🐾 Línea Pet Friendly</a></li>
              <li><a href="#simulador" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.9rem' }}>Simulador de Fuegos</a></li>
              <li><a href="#eventos" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.9rem' }}>Shows para Bodas y Fiestas</a></li>
              <li><a href="#seguridad" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.9rem' }}>Normas de Seguridad</a></li>
              <li><a href="#contacto" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '0.9rem' }}>Contacto & Ubicación</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '1.05rem', marginBottom: '16px' }}>Líneas Destacadas</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: '#9CA3AF' }}>
              <li>Tortas & Festivales de Gran Altura</li>
              <li>Fuentes de Chispas Frías para Salones</li>
              <li>Humos Especiales Revelación de Sexo</li>
              <li>Cañas, Morteros y Efectos Estelares</li>
              <li>Combos Familiares & Infantiles</li>
            </ul>
          </div>

          {/* Location & Payment */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '1.05rem', marginBottom: '16px' }}>Local Montevideo</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: '#9CA3AF', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={16} color="#FF5400" />
                <span>Hocquart 1642, La Comercial</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} color="#25D366" />
                <span>+598 95 018 716 / 2929 6788</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} color="#00F5D4" />
                <span>ventas@mundopirotecnico.uy</span>
              </div>
            </div>

            <div style={{ fontSize: '0.8rem', color: '#6B7280' }}>
              Medios de Pago: Mercado Pago, Tarjetas OCA, VISA, Master, Transferencia BROU, Abitab, RedPagos.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          paddingTop: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '14px',
          fontSize: '0.84rem',
          color: '#6B7280',
        }}>
          <div>
            © {new Date().getFullYear()} Mundo Pirotécnico. Todos los derechos reservados. Montevideo, Uruguay.
          </div>
          <div>
            Hecho con pasión por el espectáculo y el respeto por nuestras mascotas 🐶✨
          </div>
        </div>

      </div>
    </footer>
  );
}

