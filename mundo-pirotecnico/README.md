# 🎆 Mundo Pirotécnico - Web Oficial Moderna

Sitio web oficial interactivo, moderno y de alto impacto para **Mundo Pirotécnico** (Montevideo, Uruguay). Desarrollado con **Node.js**, **React 19** y **Vite**.

---

## 🚀 Cómo Iniciar el Proyecto

1. Abrir una terminal en esta carpeta:
   ```bash
   cd mundo-pirotecnico
   ```
2. Instalar dependencias (si no las instalaste ya):
   ```bash
   npm install
   ```
3. Iniciar el servidor de desarrollo en vivo:
   ```bash
   npm run dev
   ```
4. Abre el enlace que te indique la consola (generalmente `http://localhost:5173`) en tu navegador.

Para compilar la versión optimizada de producción:
```bash
npm run build
```

---

## 📂 Estructura de Componentes (Fácil de Editar)

El proyecto está diseñado de forma 100% modular para que puedas modificar cualquier sección sin tocar el resto:

```
mundo-pirotecnico/
├── src/
│   ├── components/
│   │   ├── FireworksCanvas.jsx      # Motor canvas de fuegos artificiales interactivos
│   │   ├── Navbar.jsx               # Barra de navegación con control de sonido y cotizador
│   │   ├── Hero.jsx                 # Encabezado principal con botón de "Gran Final"
│   │   ├── PetFriendlySection.jsx   # Sección especial dedicada a la línea Pet Friendly
│   │   ├── ShowSimulator.jsx        # Simulador interactivo de efectos pirotécnicos
│   │   ├── CatalogSection.jsx       # Catálogo con buscador, filtros y ordenamiento
│   │   ├── ProductCard.jsx          # Tarjeta individual con precio y previsualizador
│   │   ├── ProductDetailModal.jsx   # Modal con características técnicas y botón WhatsApp
│   │   ├── EventsShowsSection.jsx   # Servicios para bodas, 15 años y gender reveals
│   │   ├── SafetySection.jsx        # Normas de seguridad y homologación SMA
│   │   ├── ReviewsSection.jsx       # Opiniones de clientes satisfechos
│   │   ├── ContactSection.jsx       # Formulario y datos del local (Hocquart 1642)
│   │   ├── QuoteCartDrawer.jsx      # Carrito/Cotizador con exportación directa a WhatsApp
│   │   └── Footer.jsx               # Pie de página y enlaces institucionales
│   │
│   ├── data/
│   │   └── products.js              # Lista editable de productos, precios y categorías
│   │
│   ├── utils/
│   │   └── audio.js                 # Sintetizador Web Audio API (efectos de sonido)
│   │
│   ├── App.jsx                      # Ensamblado principal de todos los componentes
│   ├── index.css                    # Estilos modernos nocturnos (Glassmorphism & Neón)
│   └── main.jsx                     # Punto de entrada de React
```

---

## 🎨 Características Destacadas

1. **Efectos de Fuegos Artificiales en Canvas:**
   - Lanzamiento automático de fondo y explosión interactiva al hacer clic en cualquier parte de la pantalla.
   - Variedad de efectos: Crisantemos, sauces dorados (willow), palmeras y ráfagas en abanico.
   - Sonidos realistas de silbido y estampido sintetizados con **Web Audio API** (sin necesidad de archivos de audio pesados).

2. **Línea Pet Friendly (Bajo Ruido):**
   - Destacado especial con foco en el cuidado de mascotas, niños y personas con hipersensibilidad sonora.

3. **Simulador de Fuegos en Vivo:**
   - Permite al usuario probar combinaciones de colores y tipos de fuegos directamente en la pantalla.

4. **Cotizador con Envío Directo a WhatsApp:**
   - Los clientes pueden agregar productos a su presupuesto y enviarlo formateado directamente al WhatsApp de Mundo Pirotécnico (`+598 95 018 716`).

5. **Diseño Responsivo Ultra Moderno:**
   - Tema oscuro inspirado en cielos nocturnos de fiesta, con gradientes neón, desenfoque de cristal (glassmorphism) y badges luminosos.

---

## ✏️ ¿Cómo editar los productos o agregar nuevos?

Solo tienes que abrir el archivo [`src/data/products.js`](file:///c:/cami/DevOps/Repaso/EjercicioRepaso/mundo-pirotecnico/src/data/products.js) y modificar o agregar elementos en el arreglo `PRODUCTS`. Cada producto tiene:
- `id`: identificador único
- `name`: nombre del producto
- `category`: categoría (`'pet-friendly'`, `'tortas'`, `'fuentes'`, `'humos'`, `'canas'`, `'infantil'`)
- `price`: precio en Pesos Uruguayos (UYU)
- `shots`: cantidad de tiros
- `duration`: tiempo estimado
- `noiseLevel`: nivel de ruido de 1 (silencioso) a 5 (intenso)
- `description`: descripción del efecto
- `colors`: paleta de colores para la simulación visual
