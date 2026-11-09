import { useState } from 'react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';
import ProductDetailModal from './ProductDetailModal';
import { Search, Sparkles, ShieldCheck, Flame, Sun, Wind, Zap, Smile } from 'lucide-react';

const ICON_MAP = {
  Sparkles,
  ShieldCheck,
  Flame,
  Sun,
  Wind,
  Zap,
  Smile,
};

export default function CatalogSection({
  selectedCategory,
  onSelectCategory,
  onAddToCart,
  onTriggerFirework,
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sortBy, setSortBy] = useState('popular');

  // Filter products
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'shots') return b.shots - a.shots;
    return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
  });

  return (
    <section id="catalogo" style={{ padding: ' clamp(50px, 8vw, 80px) 16px', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '5px 14px',
            borderRadius: '9999px',
            background: 'rgba(255, 84, 0, 0.1)',
            border: '1px solid rgba(255, 84, 0, 0.3)',
            color: '#FFB703',
            fontSize: '0.82rem',
            fontWeight: 700,
            marginBottom: '12px',
          }}>
            <Sparkles size={15} />
            <span>CATÁLOGO OFICIAL 2026</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3.2rem)', color: '#FFFFFF', marginBottom: '12px' }}>
            Explora Nuestra <span className="text-gradient-fire">Gama Pirotécnica</span>
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', maxWidth: '650px', margin: '0 auto' }}>
            Artículos certificados. Agrega productos a tu presupuesto y cotiza en un clic por WhatsApp.
          </p>
        </div>

        {/* Filter bar & Search */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '22px',
        }}>
          {/* Search Input */}
          <div style={{
            position: 'relative',
            flex: '1 1 240px',
            width: '100%',
          }}>
            <Search
              size={17}
              color="#9CA3AF"
              style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }}
            />
            <input
              type="text"
              placeholder="Buscar tortas, volcanes, humo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px 12px 44px',
                background: 'rgba(18, 20, 38, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '9999px',
                color: '#FFF',
                fontSize: '0.9rem',
                outline: 'none',
              }}
            />
          </div>

          {/* Sort Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto' }}>
            <span style={{ fontSize: '0.82rem', color: '#9CA3AF', whiteSpace: 'nowrap' }}>Ordenar:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                background: 'rgba(18, 20, 38, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#FFF',
                padding: '10px 14px',
                borderRadius: '12px',
                fontSize: '0.85rem',
                outline: 'none',
                cursor: 'pointer',
              }}
            >
              <option value="popular">Más Populares</option>
              <option value="price-low">Precio: Menor a Mayor</option>
              <option value="price-high">Precio: Mayor a Menor</option>
              <option value="shots">Cantidad de Tiros</option>
            </select>
          </div>
        </div>

        {/* Category Pills (Touch scroll friendly) */}
        <div
          className="hide-scroll-bar"
          style={{
            display: 'flex',
            gap: '8px',
            overflowX: 'auto',
            paddingBottom: '12px',
            marginBottom: '26px',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {CATEGORIES.map((cat) => {
            const Icon = ICON_MAP[cat.icon] || Sparkles;
            const isSelected = selectedCategory === cat.id;

            let btnBg = 'rgba(255, 255, 255, 0.04)';
            let btnBorder = 'rgba(255, 255, 255, 0.1)';
            let textColor = '#D1D5DB';

            if (isSelected) {
              if (cat.id === 'pet-friendly') {
                btnBg = 'linear-gradient(135deg, #06D6A0, #00A896)';
                btnBorder = '#06D6A0';
                textColor = '#071913';
              } else {
                btnBg = 'linear-gradient(135deg, #FF5400, #F72585)';
                btnBorder = '#FF5400';
                textColor = '#FFFFFF';
              }
            } else if (cat.id === 'pet-friendly') {
              textColor = '#06D6A0';
              btnBorder = 'rgba(6, 214, 160, 0.35)';
              btnBg = 'rgba(6, 214, 160, 0.08)';
            }

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                style={{
                  background: btnBg,
                  border: `1px solid ${btnBorder}`,
                  color: textColor,
                  padding: '9px 18px',
                  borderRadius: '9999px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '7px',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  flexShrink: 0,
                }}
              >
                <Icon size={15} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid (Responsive) */}
        {sortedProducts.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(250px, 45vw, 300px), 1fr))',
            gap: '18px',
          }}>
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetails={(p) => setSelectedProduct(p)}
                onAddToCart={onAddToCart}
                onPreviewColors={(colors) => {
                  if (onTriggerFirework) onTriggerFirework(null, null, colors, 'peony');
                }}
              />
            ))}
          </div>
        ) : (
          <div className="glass-panel" style={{ padding: '50px 20px', textAlign: 'center' }}>
            <p style={{ color: '#9CA3AF', fontSize: '1rem', marginBottom: '14px' }}>
              No encontramos productos que coincidan con &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                onSelectCategory('todos');
              }}
              className="btn-outline"
            >
              Restablecer Filtros
            </button>
          </div>
        )}

      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={onAddToCart}
          onTriggerFirework={onTriggerFirework}
        />
      )}
    </section>
  );
}
