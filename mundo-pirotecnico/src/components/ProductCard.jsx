import { Sparkles, Plus, Check, Volume2, Clock, Zap, Play, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';

export default function ProductCard({
  product,
  onOpenDetails,
  onAddToCart,
  onPreviewColors,
  isAdded = false,
}) {
  const [justAdded, setJustAdded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    onAddToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  const handleSparkClick = (e) => {
    e.stopPropagation();
    if (onPreviewColors) {
      onPreviewColors(product.colors);
    }
  };

  return (
    <div
      className="glass-panel"
      onClick={() => onOpenDetails(product)}
      style={{
        padding: '0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '20px',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.borderColor = 'rgba(255, 183, 3, 0.45)';
        e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Product Image Container */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '200px',
        overflow: 'hidden',
        backgroundColor: '#121426',
      }}>
        {!imageError && product.image ? (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setImageError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.5s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
        ) : (
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #161936, #0e1022)',
            color: '#6B7280',
            gap: '8px',
          }}>
            <ImageIcon size={32} />
            <span style={{ fontSize: '0.8rem' }}>Mundo Pirotécnico</span>
          </div>
        )}

        {/* Gradient shadow overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(18, 20, 38, 0.95) 0%, rgba(18, 20, 38, 0.2) 60%, transparent 100%)',
          pointerEvents: 'none',
        }} />

        {/* Top Badges overlay */}
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          right: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <span style={{
            fontSize: '0.72rem',
            fontWeight: 800,
            padding: '5px 12px',
            borderRadius: '9999px',
            background: product.category === 'pet-friendly' 
              ? 'rgba(6, 214, 160, 0.9)' 
              : 'rgba(255, 84, 0, 0.9)',
            color: product.category === 'pet-friendly' ? '#071913' : '#FFFFFF',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}>
            {product.tag}
          </span>

          {/* Video indicator badge */}
          {product.video && (
            <span style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              padding: '4px 10px',
              borderRadius: '9999px',
              background: 'rgba(0, 0, 0, 0.7)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#FFF',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              backdropFilter: 'blur(6px)',
            }}>
              <Play size={10} fill="#FFB703" color="#FFB703" />
              <span>Video</span>
            </span>
          )}
        </div>

        {/* Color preview dots floating at bottom right of image */}
        <div
          title="Haz clic para probar los colores de este fuego"
          onClick={handleSparkClick}
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            background: 'rgba(0, 0, 0, 0.65)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            padding: '4px 8px',
            borderRadius: '9999px',
            cursor: 'pointer',
            backdropFilter: 'blur(6px)',
          }}
        >
          {product.colors.map((c, i) => (
            <span
              key={i}
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: c,
                display: 'inline-block',
                boxShadow: `0 0 5px ${c}`
              }}
            />
          ))}
          <Sparkles size={11} color="#FFB703" style={{ marginLeft: '2px' }} />
        </div>
      </div>

      {/* Card Body */}
      <div style={{ padding: '20px 22px 22px 22px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
        
        <div style={{ marginBottom: '16px' }}>
          <h3 style={{
            fontSize: '1.2rem',
            color: '#FFFFFF',
            marginBottom: '8px',
            lineHeight: 1.3,
          }}>
            {product.name}
          </h3>
          <p style={{
            fontSize: '0.86rem',
            color: '#9CA3AF',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            lineHeight: 1.5,
          }}>
            {product.description}
          </p>
        </div>

        {/* Meta Specs */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '8px 12px',
          background: 'rgba(0, 0, 0, 0.3)',
          borderRadius: '12px',
          marginBottom: '16px',
          fontSize: '0.78rem',
          color: '#D1D5DB'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Zap size={13} color="#FFB703" />
            <span><strong>{product.shots}</strong> {product.shots === 1 ? 'tiro' : 'tiros'}</span>
          </div>
          <span>•</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Clock size={13} color="#00F5D4" />
            <span>{product.duration}</span>
          </div>
          <span>•</span>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            color: product.noiseLevel === 1 ? '#06D6A0' : '#FF9933'
          }}>
            <Volume2 size={13} />
            <span>{product.noiseLevel === 1 ? 'Silencioso' : `${product.noiseLevel}/5`}</span>
          </div>
        </div>

        {/* Bottom Bar: Price & Action */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '12px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        }}>
          <div>
            <span style={{ fontSize: '0.7rem', color: '#9CA3AF', display: 'block', textTransform: 'uppercase' }}>
              Precio UYU
            </span>
            <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'Outfit, sans-serif' }}>
              ${product.price.toLocaleString('es-UY')}
            </span>
          </div>

          <button
            onClick={handleAdd}
            style={{
              background: justAdded ? '#06D6A0' : 'rgba(255, 255, 255, 0.08)',
              border: `1px solid ${justAdded ? '#06D6A0' : 'rgba(255, 255, 255, 0.2)'}`,
              color: justAdded ? '#071913' : '#FFFFFF',
              borderRadius: '9999px',
              padding: '9px 18px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontWeight: 600,
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            {justAdded ? (
              <>
                <Check size={16} />
                <span>¡Agregado!</span>
              </>
            ) : (
              <>
                <Plus size={16} />
                <span>Agregar</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
