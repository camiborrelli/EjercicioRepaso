import { X, Trash2, Plus, Minus, MessageSquare, ShoppingBag, ArrowRight } from 'lucide-react';

export default function QuoteCartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQty,
  onRemoveItem,
  onClearCart,
}) {
  if (!isOpen) return null;

  const total = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  const handleSendWhatsApp = () => {
    if (items.length === 0) return;

    let message = `¡Hola Mundo Pirotécnico! Quiero solicitar cotización para el siguiente pedido:\n\n`;
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.product.name} x${item.quantity} = $${(item.product.price * item.quantity).toLocaleString('es-UY')} UYU\n`;
    });
    message += `\n*TOTAL ESTIMADO: $${total.toLocaleString('es-UY')} UYU*\n\n`;
    message += `¿Tienen stock disponible y coordinamos el retiro o envío? Muchas gracias.`;

    window.open(`https://wa.me/59895018716?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(5, 6, 15, 0.8)',
        backdropFilter: 'blur(8px)',
        zIndex: 90,
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: 'clamp(320px, 85vw, 460px)',
          height: '100%',
          background: 'rgba(13, 15, 30, 0.98)',
          borderLeft: '1px solid rgba(255, 255, 255, 0.12)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.7)',
        }}
      >
        {/* Drawer Header */}
        <div style={{
          padding: '16px 20px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              background: 'linear-gradient(135deg, #FF5400, #F72585)',
              padding: '7px',
              borderRadius: '9px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <ShoppingBag size={18} color="#FFF" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', color: '#FFF' }}>Mi Presupuesto</h3>
              <div style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>
                {totalItems} {totalItems === 1 ? 'artículo' : 'artículos'}
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Cerrar presupuesto"
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: 'none',
              color: '#9CA3AF',
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Drawer Content / List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '18px' }}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '50px 10px', color: '#9CA3AF' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
              }}>
                <ShoppingBag size={24} color="#6B7280" />
              </div>
              <h4 style={{ color: '#FFF', fontSize: '1.05rem', marginBottom: '6px' }}>
                Tu presupuesto está vacío
              </h4>
              <p style={{ fontSize: '0.84rem', maxWidth: '260px', margin: '0 auto 18px' }}>
                Explora el catálogo y añade fuegos artificiales para cotizar.
              </p>
              <button
                onClick={onClose}
                className="btn-outline"
                style={{ fontSize: '0.85rem', padding: '10px 20px' }}
              >
                Ver Catálogo
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {items.map((item) => (
                <div
                  key={item.product.id}
                  style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '14px',
                    padding: '14px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <h4 style={{ color: '#FFF', fontSize: '0.92rem', marginBottom: '3px' }}>
                        {item.product.name}
                      </h4>
                      <div style={{ fontSize: '0.78rem', color: '#06D6A0', fontWeight: 600 }}>
                        ${item.product.price.toLocaleString('es-UY')} UYU c/u
                      </div>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#EF476F',
                        cursor: 'pointer',
                        padding: '4px',
                      }}
                      title="Eliminar producto"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>

                  {/* Quantity & Subtotal */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '8px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: 'rgba(0, 0, 0, 0.3)',
                      borderRadius: '8px',
                      padding: '3px 6px',
                    }}>
                      <button
                        onClick={() => onUpdateQty(item.product.id, item.quantity - 1)}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          color: '#FFF',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          padding: '3px',
                        }}
                      >
                        <Minus size={13} />
                      </button>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFF', minWidth: '18px', textAlign: 'center' }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQty(item.product.id, item.quantity + 1)}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          color: '#FFF',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          padding: '3px',
                        }}
                      >
                        <Plus size={13} />
                      </button>
                    </div>

                    <div style={{ fontSize: '1rem', fontWeight: 800, color: '#FFB703', fontFamily: 'Outfit, sans-serif' }}>
                      ${(item.product.price * item.quantity).toLocaleString('es-UY')} UYU
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        {items.length > 0 && (
          <div style={{
            padding: '18px 20px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            background: 'rgba(9, 10, 22, 0.95)',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '14px',
            }}>
              <div>
                <span style={{ fontSize: '0.72rem', color: '#9CA3AF', textTransform: 'uppercase' }}>Total Estimado</span>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#FFFFFF', fontFamily: 'Outfit, sans-serif' }}>
                  ${total.toLocaleString('es-UY')} <span style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>UYU</span>
                </div>
              </div>

              <button
                onClick={onClearCart}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#9CA3AF',
                  fontSize: '0.75rem',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }}
              >
                Vaciar lista
              </button>
            </div>

            <button
              onClick={handleSendWhatsApp}
              style={{
                width: '100%',
                background: '#25D366',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '14px',
                padding: '14px',
                fontWeight: 800,
                fontSize: '0.98rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 8px 25px rgba(37, 211, 102, 0.35)',
              }}
            >
              <MessageSquare size={18} />
              <span>Enviar Pedido a WhatsApp</span>
              <ArrowRight size={16} />
            </button>

            <p style={{ textAlign: 'center', fontSize: '0.72rem', color: '#6B7280', marginTop: '8px' }}>
              Precios con IVA incluido. Envíos a todo Uruguay.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
