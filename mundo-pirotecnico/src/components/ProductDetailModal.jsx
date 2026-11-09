import { X, Sparkles, Plus, Check, ShieldCheck, Zap, Clock, Volume2, MessageSquare, Play, Image as ImageIcon, Video as VideoIcon } from 'lucide-react';
import { useState } from 'react';

function getEmbedUrl(url) {
  if (!url) return null;
  if (url.includes('youtube.com/embed/')) return url;
  if (url.includes('youtu.be/')) {
    const id = url.split('youtu.be/')[1]?.split('?')[0];
    return `https://www.youtube.com/embed/${id}`;
  }
  if (url.includes('youtube.com/watch')) {
    const params = new URLSearchParams(url.split('?')[1]);
    const id = params.get('v');
    return id ? `https://www.youtube.com/embed/${id}` : url;
  }
  return url;
}

export default function ProductDetailModal({ product, onClose, onAddToCart, onTriggerFirework }) {
  const [added, setAdded] = useState(false);
  const [activeMediaTab, setActiveMediaTab] = useState(product?.video ? 'video' : 'photo');

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  const handleTestExplosion = () => {
    if (onTriggerFirework) {
      const type = product.category === 'fuentes' ? 'willow' : 'peony';
      onTriggerFirework(null, null, product.colors, type);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `¡Hola Mundo Pirotécnico! Estoy interesado/a en consultar disponibilidad de: ${product.name} ($${product.price} UYU).`
  );

  const embedUrl = getEmbedUrl(product.video);
  const isDirectVideo = product.video && (product.video.endsWith('.mp4') || product.video.endsWith('.webm'));

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(5, 6, 15, 0.88)',
        backdropFilter: 'blur(12px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '12px',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '680px',
          background: 'rgba(15, 17, 34, 0.98)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '20px',
          position: 'relative',
          maxHeight: '94vh',
          overflowY: 'auto',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Cerrar ventana"
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            background: 'rgba(0, 0, 0, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#D1D5DB',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 30,
          }}
        >
          <X size={20} />
        </button>

        {/* Media Preview Area */}
        <div style={{
          position: 'relative',
          width: '100%',
          minHeight: '220px',
          height: 'clamp(220px, 35vw, 320px)',
          backgroundColor: '#090a16',
        }}>
          {/* Tab Switcher at Top Left */}
          <div style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            zIndex: 25,
            display: 'flex',
            gap: '6px',
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)',
            padding: '4px',
            borderRadius: '9999px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
          }}>
            <button
              onClick={() => setActiveMediaTab('photo')}
              style={{
                background: activeMediaTab === 'photo' ? 'linear-gradient(135deg, #FF5400, #F72585)' : 'transparent',
                border: 'none',
                color: activeMediaTab === 'photo' ? '#FFF' : '#9CA3AF',
                padding: '6px 12px',
                borderRadius: '9999px',
                fontSize: '0.78rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                cursor: 'pointer',
              }}
            >
              <ImageIcon size={13} />
              <span>Foto</span>
            </button>

            <button
              onClick={() => setActiveMediaTab('video')}
              style={{
                background: activeMediaTab === 'video' ? 'linear-gradient(135deg, #FF5400, #F72585)' : 'transparent',
                border: 'none',
                color: activeMediaTab === 'video' ? '#FFF' : '#9CA3AF',
                padding: '6px 12px',
                borderRadius: '9999px',
                fontSize: '0.78rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                cursor: 'pointer',
              }}
            >
              <VideoIcon size={13} />
              <span>Video {product.video && '🎬'}</span>
            </button>
          </div>

          {/* Media Content */}
          {activeMediaTab === 'photo' ? (
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          ) : (
            product.video ? (
              isDirectVideo ? (
                <video
                  src={product.video}
                  controls
                  autoPlay
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <iframe
                  src={`${embedUrl}?autoplay=1&mute=0`}
                  title={`Video de ${product.name}`}
                  style={{ width: '100%', height: '100%', border: 'none' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )
            ) : (
              <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px',
                textAlign: 'center',
                color: '#9CA3AF',
              }}>
                <Play size={36} color="#FFB703" style={{ marginBottom: '10px' }} />
                <h4 style={{ color: '#FFF', fontSize: '1rem', marginBottom: '6px' }}>
                  Video Demostración Próximamente
                </h4>
                <p style={{ fontSize: '0.8rem', maxWidth: '360px', color: '#9CA3AF' }}>
                  Puedes agregar la URL de YouTube en <code>src/data/products.js</code>.
                </p>
              </div>
            )
          )}
        </div>

        {/* Modal Info Content */}
        <div style={{ padding: 'clamp(18px, 4vw, 28px)' }}>
          
          {/* Category Tag */}
          <div style={{ marginBottom: '10px' }}>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              padding: '4px 10px',
              borderRadius: '9999px',
              background: product.category === 'pet-friendly' ? 'rgba(6, 214, 160, 0.15)' : 'rgba(255, 84, 0, 0.15)',
              color: product.category === 'pet-friendly' ? '#06D6A0' : '#FFB703',
              border: `1px solid ${product.category === 'pet-friendly' ? 'rgba(6, 214, 160, 0.3)' : 'rgba(255, 84, 0, 0.3)'}`,
              textTransform: 'uppercase',
            }}>
              {product.tag}
            </span>
          </div>

          {/* Title */}
          <h2 style={{ fontSize: 'clamp(1.35rem, 3.5vw, 1.8rem)', color: '#FFFFFF', marginBottom: '12px', lineHeight: 1.25 }}>
            {product.name}
          </h2>

          {/* Price & Specs row */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            marginBottom: '18px',
            paddingBottom: '16px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <div>
              <span style={{ fontSize: '0.72rem', color: '#9CA3AF', textTransform: 'uppercase' }}>Precio Contado</span>
              <div style={{ fontSize: 'clamp(1.5rem, 4vw, 1.9rem)', fontWeight: 900, color: '#FFB703', fontFamily: 'Outfit, sans-serif' }}>
                ${product.price.toLocaleString('es-UY')} <span style={{ fontSize: '0.85rem', color: '#9CA3AF', fontWeight: 500 }}>UYU</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '6px 10px',
                borderRadius: '10px',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.06)'
              }}>
                <Zap size={14} color="#FFB703" style={{ margin: '0 auto 2px' }} />
                <div style={{ fontSize: '0.65rem', color: '#9CA3AF' }}>Tiros</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFF' }}>{product.shots}</div>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '6px 10px',
                borderRadius: '10px',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.06)'
              }}>
                <Clock size={14} color="#00F5D4" style={{ margin: '0 auto 2px' }} />
                <div style={{ fontSize: '0.65rem', color: '#9CA3AF' }}>Duración</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFF' }}>{product.duration}</div>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '6px 10px',
                borderRadius: '10px',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.06)'
              }}>
                <Volume2 size={14} color={product.noiseLevel === 1 ? '#06D6A0' : '#FF5400'} style={{ margin: '0 auto 2px' }} />
                <div style={{ fontSize: '0.65rem', color: '#9CA3AF' }}>Ruido</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFF' }}>
                  {product.noiseLevel === 1 ? 'Mín.' : `${product.noiseLevel}/5`}
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div style={{ marginBottom: '16px' }}>
            <h4 style={{ fontSize: '0.9rem', color: '#FFFFFF', marginBottom: '6px' }}>Descripción</h4>
            <p style={{ color: '#D1D5DB', fontSize: '0.88rem', lineHeight: 1.55 }}>
              {product.description}
            </p>
          </div>

          {/* Features */}
          <div style={{ marginBottom: '18px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '6px' }}>
              {product.features.map((feat, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: '#9CA3AF' }}>
                  <ShieldCheck size={14} color="#06D6A0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Live Test Trigger */}
          <div style={{
            background: 'rgba(255, 183, 3, 0.06)',
            border: '1px dashed rgba(255, 183, 3, 0.3)',
            borderRadius: '12px',
            padding: '12px 14px',
            marginBottom: '20px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '10px',
          }}>
            <div>
              <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#FFF' }}>
                ¿Probar en el cielo?
              </div>
              <div style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>
                Simula los colores de este artículo
              </div>
            </div>
            <button
              onClick={handleTestExplosion}
              className="btn-outline"
              style={{ padding: '6px 14px', fontSize: '0.8rem', minHeight: '36px' }}
            >
              <Sparkles size={14} color="#FFB703" />
              <span>Detonar Prueba</span>
            </button>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <button
              onClick={handleAdd}
              className="btn-fire"
              style={{ flex: '1 1 200px', justifyContent: 'center', padding: '12px 18px', fontSize: '0.92rem' }}
            >
              {added ? (
                <>
                  <Check size={16} />
                  <span>¡Agregado al Presupuesto!</span>
                </>
              ) : (
                <>
                  <Plus size={16} />
                  <span>Agregar a Cotización</span>
                </>
              )}
            </button>

            <a
              href={`https://wa.me/59895018716?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                background: '#25D366',
                color: '#FFFFFF',
                borderRadius: '9999px',
                padding: '12px 20px',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                fontSize: '0.92rem',
                flex: '1 1 180px',
                minHeight: '46px',
              }}
            >
              <MessageSquare size={16} />
              <span>WhatsApp Directo</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
