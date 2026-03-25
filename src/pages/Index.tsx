const SKULL_URL = "https://cdn.poehali.dev/files/b9ba4833-7d23-4739-8157-f8274cda22d0.jpg";

const bloodDrops = [
  { left: '6px',  start: '-20px', len: '180px', duration: '4.2s', delay: '0s'    },
  { left: '18px', start: '-40px', len: '260px', duration: '5.8s', delay: '1.3s'  },
  { left: '30px', start: '-10px', len: '140px', duration: '3.9s', delay: '0.7s'  },
  { left: '44px', start: '-60px', len: '320px', duration: '6.5s', delay: '2.1s'  },
  { left: '56px', start: '-30px', len: '200px', duration: '4.8s', delay: '3.4s'  },
  { left: '68px', start: '-15px', len: '110px', duration: '3.5s', delay: '1.8s'  },
];

const skulls = [
  { top: '5%',  left: '3%',   size: 80,  opacity: 0.12, rotate: -15, duration: '6s',  delay: '0s'    },
  { top: '12%', left: '82%',  size: 60,  opacity: 0.09, rotate: 20,  duration: '8s',  delay: '1.2s'  },
  { top: '28%', left: '91%',  size: 100, opacity: 0.07, rotate: -8,  duration: '7s',  delay: '0.5s'  },
  { top: '55%', left: '88%',  size: 70,  opacity: 0.11, rotate: 35,  duration: '9s',  delay: '2s'    },
  { top: '75%', left: '78%',  size: 55,  opacity: 0.08, rotate: -25, duration: '5.5s',delay: '0.8s'  },
  { top: '85%', left: '55%',  size: 90,  opacity: 0.06, rotate: 10,  duration: '10s', delay: '3s'    },
  { top: '80%', left: '8%',   size: 75,  opacity: 0.10, rotate: -40, duration: '7.5s',delay: '1.5s'  },
  { top: '60%', left: '2%',   size: 55,  opacity: 0.08, rotate: 18,  duration: '6.5s',delay: '2.5s'  },
  { top: '40%', left: '5%',   size: 65,  opacity: 0.07, rotate: -5,  duration: '8.5s',delay: '0.3s'  },
  { top: '18%', left: '18%',  size: 45,  opacity: 0.06, rotate: 30,  duration: '11s', delay: '1.8s'  },
  { top: '3%',  left: '55%',  size: 85,  opacity: 0.08, rotate: -12, duration: '7s',  delay: '4s'    },
  { top: '92%', left: '30%',  size: 50,  opacity: 0.09, rotate: 22,  duration: '9.5s',delay: '2.2s'  },
];

const c = {
  red:    '#ff0033',
  dim:    'rgba(255,0,51,0.4)',
  gray:   'rgba(180,140,140,0.5)',
  white:  'rgba(220,200,200,0.85)',
  string: '#ce9178',
  key:    '#9cdcfe',
  num:    '#b5cea8',
  comment:'rgba(255,0,51,0.35)',
};

const Index = () => {
  return (
    <div className="min-h-screen neon-grid scanlines relative flex items-center justify-center px-4" style={{ backgroundColor: 'var(--bg-dark)' }}>

      {skulls.map((s, i) => (
        <div
          key={i}
          className="fixed pointer-events-none skull-float"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            zIndex: 1,
            '--skull-opacity': s.opacity,
            '--skull-rotate': `${s.rotate}deg`,
            '--skull-duration': s.duration,
            animationDelay: s.delay,
          } as React.CSSProperties}
        >
          <img src={SKULL_URL} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px', filter: 'contrast(1.4) brightness(0.9)' }} />
        </div>
      ))}

      {/* Кровь — левая сторона */}
      <div className="blood-left">
        {bloodDrops.map((d, i) => (
          <div key={i} className="blood-drop" style={{
            left: d.left,
            '--drop-duration': d.duration,
            '--drop-delay': d.delay,
            '--drop-len': d.len,
            '--drop-start': d.start,
          } as React.CSSProperties} />
        ))}
      </div>

      {/* Кровь — правая сторона */}
      <div className="blood-right">
        {bloodDrops.map((d, i) => (
          <div key={i} className="blood-drop" style={{
            left: d.left,
            '--drop-duration': d.duration,
            '--drop-delay': `calc(${d.delay} + 0.9s)`,
            '--drop-len': d.len,
            '--drop-start': d.start,
          } as React.CSSProperties} />
        ))}
      </div>

      <div className="fixed top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(180,0,30,0.1) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: 2 }} />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(100,0,60,0.08) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: 2 }} />
      <div className="fixed top-1/2 left-1/2 w-64 h-64 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(150,0,20,0.06) 0%, transparent 70%)', filter: 'blur(50px)', zIndex: 2, transform: 'translate(-50%,-50%)' }} />

      <div className="relative w-full text-left fade-in-1" style={{ zIndex: 10, maxWidth: '640px', fontFamily: "'Courier New', Courier, monospace" }}>

        {/* Большая надпись MY BIO */}
        <h1
          style={{
            fontSize: 'clamp(3rem, 12vw, 7rem)',
            fontWeight: 900,
            letterSpacing: '0.2em',
            lineHeight: 1,
            marginBottom: '24px',
            fontFamily: "'Orbitron', monospace",
            color: 'rgba(160, 40, 40, 0.75)',
            textShadow: '0 0 40px rgba(120,0,20,0.3)',
            textTransform: 'uppercase',
          }}
        >
          MY BIO
        </h1>

        {/* Заголовок файла */}
        <div style={{ color: c.comment, fontSize: '0.75rem', marginBottom: '6px', letterSpacing: '0.05em' }}>
          {'// profile.json — last modified: 2024'}
        </div>

        {/* Большая табличка в стиле кода */}
        <div className="neon-card relative" style={{ padding: '32px 36px', border: '1px solid rgba(255,0,51,0.2)', borderRadius: '2px' }}>
          <div className="corner-tl" /><div className="corner-tr" />
          <div className="corner-bl" /><div className="corner-br" />

          {/* Строка 1 */}
          <div style={{ color: c.dim, fontSize: '0.8rem', marginBottom: '18px' }}>{'{'}</div>

          {/* name */}
          <div style={{ marginBottom: '10px', paddingLeft: '24px', fontSize: '0.95rem', lineHeight: 1.6 }}>
            <span style={{ color: c.key }}>"name"</span>
            <span style={{ color: c.gray }}>: </span>
            <span style={{ color: c.string }}>"Scale"</span>
            <span style={{ color: c.gray }}>,</span>
          </div>

          {/* status */}
          <div style={{ marginBottom: '10px', paddingLeft: '24px', fontSize: '0.95rem', lineHeight: 1.6 }}>
            <span style={{ color: c.key }}>"status"</span>
            <span style={{ color: c.gray }}>: </span>
            <span style={{ color: c.string }}>"Пострадавший игрок"</span>
            <span style={{ color: c.gray }}>,</span>
          </div>

          {/* contacts */}
          <div style={{ marginBottom: '6px', paddingLeft: '24px', fontSize: '0.95rem', lineHeight: 1.6 }}>
            <span style={{ color: c.key }}>"contacts"</span>
            <span style={{ color: c.gray }}>: {'{'}</span>
          </div>

          {/* steam */}
          <div style={{ marginBottom: '8px', paddingLeft: '48px', fontSize: '0.95rem', lineHeight: 1.6 }}>
            <span style={{ color: c.key }}>"steam"</span>
            <span style={{ color: c.gray }}>: </span>
            <a
              href="https://steamcommunity.com/profiles/76561199172822318/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: c.string,
                textDecoration: 'none',
                transition: 'all 0.2s',
                borderBottom: '1px solid rgba(255,0,51,0.3)',
              }}
              onMouseEnter={e => {
                (e.target as HTMLElement).style.color = '#fff';
                (e.target as HTMLElement).style.textShadow = '0 0 10px #ff0033';
              }}
              onMouseLeave={e => {
                (e.target as HTMLElement).style.color = c.string;
                (e.target as HTMLElement).style.textShadow = 'none';
              }}
            >
              "steamcommunity.com/profiles/76561199172822318"
            </a>
            <span style={{ color: c.gray }}>,</span>
          </div>

          {/* discord */}
          <div style={{ marginBottom: '10px', paddingLeft: '48px', fontSize: '0.95rem', lineHeight: 1.6 }}>
            <span style={{ color: c.key }}>"discord"</span>
            <span style={{ color: c.gray }}>: </span>
            <span style={{ color: c.string }}>"fizercloud"</span>
          </div>

          <div style={{ paddingLeft: '24px', color: c.dim, fontSize: '0.95rem', marginBottom: '18px' }}>{'}'}<span style={{ color: c.gray }}>,</span></div>

          {/* Строка закрытия */}
          <div style={{ color: c.dim, fontSize: '0.8rem' }}>{'}'}</div>
        </div>

        {/* Курсор-моргалка */}
        <div style={{ marginTop: '12px', color: c.red, fontSize: '0.8rem', opacity: 0.5, animation: 'flicker 1.2s step-end infinite' }}>
          █
        </div>
      </div>
    </div>
  );
};

export default Index;