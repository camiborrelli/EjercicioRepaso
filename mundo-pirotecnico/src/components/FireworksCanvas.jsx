import { useEffect, useRef } from 'react';

const FIREWORK_COLORS = [
  ['#FF3366', '#FF9933', '#FFFF66'], // Sunset Blaze
  ['#00F5D4', '#00BBF9', '#7B2CBF'], // Cyber Neon
  ['#FFD166', '#FFB703', '#FFFFFF'], // Golden Spark
  ['#EF476F', '#F72585', '#7209B7'], // Electric Magenta
  ['#06D6A0', '#118AB2', '#073B4C'], // Aurora Green
  ['#4CC9F0', '#4895EF', '#3F37C9'], // Crystal Blue
  ['#FFFFFF', '#FFE6A7', '#D4AF37'], // Royal Titanium White
];

export default function FireworksCanvas({
  isAuto = true,
  interactive = true,
  onRegisterTrigger = null,
}) {
  const canvasRef = useRef(null);
  const fireworksRef = useRef([]);
  const particlesRef = useRef([]);
  const animFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Particle Class (Original)
    class Particle {
      constructor(x, y, color, type = 'peony') {
        this.x = x;
        this.y = y;
        this.color = color;
        this.type = type;

        const angle = Math.random() * Math.PI * 2;
        const speed = type === 'willow' 
          ? Math.random() * 4 + 1 
          : Math.random() * 6 + 1.5;

        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.friction = type === 'willow' ? 0.96 : 0.94;
        this.gravity = type === 'willow' ? 0.08 : 0.06;
        this.alpha = 1;
        this.decay = type === 'willow' 
          ? Math.random() * 0.012 + 0.008 
          : Math.random() * 0.02 + 0.015;
        this.size = Math.random() * 2.5 + 1.5;
        this.flicker = Math.random() > 0.4;
      }

      update() {
        this.vx *= this.friction;
        this.vy *= this.friction;
        this.vy += this.gravity;
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= this.decay;
        return this.alpha > 0;
      }

      draw(c) {
        c.save();
        c.globalAlpha = Math.max(0, this.alpha);
        if (this.flicker && Math.random() > 0.3) {
          c.globalAlpha = Math.max(0, this.alpha * 0.4);
        }
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.shadowColor = this.color;
        c.shadowBlur = 8;
        c.fill();
        c.restore();
      }
    }

    // Rocket Class (Original)
    class Rocket {
      constructor(sx, sy, tx, ty, colorPalette, type = 'peony') {
        this.x = sx;
        this.y = sy;
        this.sx = sx;
        this.sy = sy;
        this.tx = tx;
        this.ty = ty;
        this.colorPalette = colorPalette;
        this.type = type;
        this.distanceToTarget = Math.hypot(tx - sx, ty - sy);
        this.distanceTraveled = 0;
        this.trail = [];
        this.trailLength = 4;
        this.angle = Math.atan2(ty - sy, tx - sx);
        this.speed = 4;
        this.acceleration = 1.05;
      }

      update() {
        this.trail.push([this.x, this.y]);
        if (this.trail.length > this.trailLength) {
          this.trail.shift();
        }

        this.speed *= this.acceleration;
        const vx = Math.cos(this.angle) * this.speed;
        const vy = Math.sin(this.angle) * this.speed;
        this.distanceTraveled = Math.hypot(this.x - this.sx, this.y - this.sy);

        if (this.distanceTraveled >= this.distanceToTarget || vy >= 0) {
          this.explode();
          return false;
        }

        this.x += vx;
        this.y += vy;
        return true;
      }

      draw(c) {
        c.save();
        c.beginPath();
        if (this.trail.length > 1) {
          c.moveTo(this.trail[0][0], this.trail[0][1]);
          for (let i = 1; i < this.trail.length; i++) {
            c.lineTo(this.trail[i][0], this.trail[i][1]);
          }
        } else {
          c.moveTo(this.x, this.y);
          c.lineTo(this.x, this.y + 4);
        }
        c.strokeStyle = '#FFAA33';
        c.lineWidth = 2.5;
        c.shadowColor = '#FFAA00';
        c.shadowBlur = 6;
        c.stroke();
        c.restore();
      }

      explode() {
        const count = this.type === 'grand' ? 140 : 80;
        for (let i = 0; i < count; i++) {
          const color = this.colorPalette[Math.floor(Math.random() * this.colorPalette.length)];
          particlesRef.current.push(new Particle(this.tx, this.ty, color, this.type));
        }
      }
    }

    // Function to launch a rocket
    const createRocket = (targetX, targetY, customPalette = null, type = 'peony') => {
      const sx = targetX + (Math.random() * 100 - 50);
      const sy = canvas.height;
      const palette = customPalette || FIREWORK_COLORS[Math.floor(Math.random() * FIREWORK_COLORS.length)];
      fireworksRef.current.push(new Rocket(sx, sy, targetX, targetY, palette, type));
    };

    // Expose trigger to parent
    if (onRegisterTrigger) {
      onRegisterTrigger((x, y, palette, type) => {
        const destX = x ?? Math.random() * (canvas.width * 0.8) + canvas.width * 0.1;
        const destY = y ?? Math.random() * (canvas.height * 0.45) + canvas.height * 0.1;
        createRocket(destX, destY, palette, type);
      });
    }

    // Interactive click handler
    const handleClick = (e) => {
      if (!interactive) return;
      const targetTag = e.target.tagName ? e.target.tagName.toLowerCase() : '';
      if (['button', 'a', 'input', 'textarea', 'select'].includes(targetTag) || e.target.closest('button, a, input, textarea, select')) {
        return;
      }
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      createRocket(x, y, null, Math.random() > 0.5 ? 'willow' : 'peony');
    };

    window.addEventListener('click', handleClick);

    // Auto fireworks timer
    let lastAutoTime = Date.now();
    let autoInterval = 2600;

    // Animation Loop
    const loop = () => {
      ctx.fillStyle = 'rgba(8, 9, 20, 0.22)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (isAuto && Date.now() - lastAutoTime > autoInterval) {
        lastAutoTime = Date.now();
        autoInterval = Math.random() * 2400 + 1600;
        const targetX = Math.random() * (canvas.width * 0.8) + canvas.width * 0.1;
        const targetY = Math.random() * (canvas.height * 0.4) + canvas.height * 0.08;
        createRocket(targetX, targetY);

        if (Math.random() > 0.6) {
          setTimeout(() => {
            const tx2 = targetX + (Math.random() * 200 - 100);
            const ty2 = targetY + (Math.random() * 100 - 50);
            createRocket(tx2, ty2, null, 'willow');
          }, 350);
        }
      }

      fireworksRef.current = fireworksRef.current.filter((rocket) => {
        const alive = rocket.update();
        if (alive) rocket.draw(ctx);
        return alive;
      });

      particlesRef.current = particlesRef.current.filter((p) => {
        const alive = p.update();
        if (alive) p.draw(ctx);
        return alive;
      });

      animFrameRef.current = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('click', handleClick);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isAuto, interactive, onRegisterTrigger]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
