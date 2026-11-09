import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function ContactSection({ prefilledSubject = '' }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    eventType: prefilledSubject || 'Boda / Fiesta de 15',
    date: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `¡Hola Mundo Pirotécnico! Mi nombre es ${form.name}.\n` +
      `Teléfono: ${form.phone}\n` +
      `Tipo de Evento: ${form.eventType}\n` +
      (form.date ? `Fecha estimada: ${form.date}\n` : '') +
      `Mensaje: ${form.message}`
    );
    window.open(`https://wa.me/59895018716?text=${text}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contacto" style={{ padding: 'clamp(50px, 8vw, 80px) 16px', position: 'relative' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
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
            <MessageSquare size={15} />
            <span>ATENCIÓN PERSONALIZADA</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3.2rem)', color: '#FFFFFF', marginBottom: '12px' }}>
            Hablemos de tu <span className="text-gradient-fire">Próximo Festejo</span>
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', maxWidth: '650px', margin: '0 auto' }}>
            Visítanos en Montevideo o escríbenos directamente. Te asesoramos sin compromiso.
          </p>
        </div>

        {/* Content Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 45vw, 360px), 1fr))',
          gap: '24px',
        }}>
          
          {/* Info Card */}
          <div className="glass-panel" style={{ padding: 'clamp(22px, 4vw, 34px)', display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div>
              <h3 style={{ fontSize: '1.35rem', color: '#FFF', marginBottom: '8px' }}>
                Mundo Pirotécnico Uruguay
              </h3>
              <p style={{ color: '#9CA3AF', fontSize: '0.88rem', lineHeight: 1.55 }}>
                Venta minorista, mayorista y contratación de espectáculos homologados.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ background: 'rgba(255, 84, 0, 0.15)', padding: '9px', borderRadius: '10px', color: '#FF5400', flexShrink: 0 }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#9CA3AF', textTransform: 'uppercase' }}>Local Principal</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#FFF' }}>Hocquart 1642, La Comercial</div>
                  <div style={{ fontSize: '0.82rem', color: '#9CA3AF' }}>Montevideo, Uruguay</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ background: 'rgba(37, 211, 102, 0.15)', padding: '9px', borderRadius: '10px', color: '#25D366', flexShrink: 0 }}>
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#9CA3AF', textTransform: 'uppercase' }}>WhatsApp & Teléfono</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#FFF' }}>+598 95 018 716</div>
                  <div style={{ fontSize: '0.82rem', color: '#9CA3AF' }}>Teléfono fijo: 2929 6788</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ background: 'rgba(0, 245, 212, 0.15)', padding: '9px', borderRadius: '10px', color: '#00F5D4', flexShrink: 0 }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#9CA3AF', textTransform: 'uppercase' }}>Correo Electrónico</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#FFF' }}>ventas@mundopirotecnico.uy</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ background: 'rgba(255, 183, 3, 0.15)', padding: '9px', borderRadius: '10px', color: '#FFB703', flexShrink: 0 }}>
                  <Clock size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#9CA3AF', textTransform: 'uppercase' }}>Horarios</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#FFF' }}>Lun a Vie: 09:00 - 19:00 hs</div>
                  <div style={{ fontSize: '0.82rem', color: '#9CA3AF' }}>Sáb: 09:30 - 14:00 hs</div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp button */}
            <a
              href="https://wa.me/59895018716"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#25D366',
                color: '#FFF',
                textDecoration: 'none',
                padding: '13px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                fontWeight: 700,
                fontSize: '0.95rem',
                marginTop: '6px',
              }}
            >
              <MessageSquare size={18} />
              <span>Chatear por WhatsApp Ahora</span>
            </a>
          </div>

          {/* Contact Form */}
          <div className="glass-panel" style={{ padding: 'clamp(22px, 4vw, 34px)' }}>
            <h3 style={{ fontSize: '1.35rem', color: '#FFF', marginBottom: '6px' }}>
              Envíanos tu Consulta
            </h3>
            <p style={{ color: '#9CA3AF', fontSize: '0.86rem', marginBottom: '20px' }}>
              Completa los datos y te responderemos de inmediato.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', color: '#9CA3AF', marginBottom: '5px' }}>
                  Nombre y Apellido *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre completo"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '11px 13px',
                    background: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '10px',
                    color: '#FFF',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: '#9CA3AF', marginBottom: '5px' }}>
                    Teléfono / Celular *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="099 123 456"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 13px',
                      background: 'rgba(0, 0, 0, 0.3)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '10px',
                      color: '#FFF',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: '#9CA3AF', marginBottom: '5px' }}>
                    Fecha del Evento
                  </label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 13px',
                      background: 'rgba(0, 0, 0, 0.3)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '10px',
                      color: '#FFF',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', color: '#9CA3AF', marginBottom: '5px' }}>
                  Tipo de Evento
                </label>
                <select
                  value={form.eventType}
                  onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '11px 13px',
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '10px',
                    color: '#FFF',
                    fontSize: '0.88rem',
                    outline: 'none',
                  }}
                >
                  <option value="Boda / Fiesta de 15">Boda / Fiesta de 15</option>
                  <option value="Revelación de Género (Gender Reveal)">Revelación de Género (Gender Reveal)</option>
                  <option value="Show Pet Friendly Silencioso">Show Pet Friendly Silencioso</option>
                  <option value="Festejo Familiar / Fin de Año">Festejo Familiar / Fin de Año</option>
                  <option value="Evento Masivo / Festival">Evento Masivo / Festival</option>
                  <option value="Compra Mayorista / Revendedor">Compra Mayorista / Revendedor</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', color: '#9CA3AF', marginBottom: '5px' }}>
                  Detalles o Consulta
                </label>
                <textarea
                  rows={3}
                  placeholder="Cuéntanos el lugar del evento, cantidad de invitados..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '11px 13px',
                    background: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '10px',
                    color: '#FFF',
                    fontSize: '0.88rem',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-fire"
                style={{ width: '100%', justifyContent: 'center', padding: '13px', fontSize: '0.95rem' }}
              >
                {sent ? (
                  <>
                    <CheckCircle2 size={18} />
                    <span>¡Enviado a WhatsApp!</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Enviar Consulta a WhatsApp</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
