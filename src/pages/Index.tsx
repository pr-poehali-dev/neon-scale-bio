const Index = () => {
  return (
    <div className="min-h-screen neon-grid scanlines relative flex items-center justify-center px-4" style={{ backgroundColor: 'var(--bg-dark)' }}>

      {/* Ambient glow blobs */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,245,255,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(191,0,255,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }} />

      <div className="relative z-10 w-full max-w-lg text-center">

        {/* Top tag */}
        <div className="fade-in-1 mb-6">
          <span style={{
            fontFamily: 'Orbitron, monospace',
            fontSize: '0.6rem',
            letterSpacing: '0.4em',
            color: 'var(--neon-cyan)',
            textTransform: 'uppercase',
            opacity: 0.7
          }}>
            // personal.bio
          </span>
        </div>

        {/* Main name */}
        <div className="fade-in-1 mb-8">
          <h1
            className="neon-title"
            style={{
              fontSize: 'clamp(4rem, 15vw, 9rem)',
              fontWeight: 900,
              letterSpacing: '0.12em',
              lineHeight: 1,
            }}
          >
            SCALE
          </h1>
        </div>

        {/* Divider */}
        <div className="fade-in-2 neon-divider mb-8" />

        {/* Bio card */}
        <div className="fade-in-2 neon-card rounded-sm p-6 mb-8 relative">
          <div className="corner-tl" />
          <div className="corner-tr" />
          <div className="corner-bl" />
          <div className="corner-br" />

          <p style={{
            fontFamily: 'Rajdhani, sans-serif',
            fontSize: '1.05rem',
            fontWeight: 400,
            letterSpacing: '0.05em',
            color: 'rgba(224, 247, 250, 0.75)',
            lineHeight: 1.8,
          }}>
            Пострадавший игрок.
          </p>
        </div>

        {/* Social buttons */}
        <div className="fade-in-3 flex gap-4 justify-center flex-wrap">
          <a
            href="https://steamcommunity.com/profiles/76561199172822318/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-steam rounded-sm px-7 py-3 flex items-center gap-3 cursor-pointer no-underline"
          >
            <span style={{ fontSize: '1.1rem' }}>🎮</span>
            <span>Steam</span>
          </a>

          <div
            className="btn-discord rounded-sm px-7 py-3 flex items-center gap-3"
            style={{ cursor: 'default' }}
          >
            <span style={{ fontSize: '1.1rem' }}>💬</span>
            <span>fizercloud</span>
          </div>
        </div>

        {/* Bottom tag */}
        <div className="mt-10" style={{ opacity: 0.25 }}>
          <span style={{
            fontFamily: 'Orbitron, monospace',
            fontSize: '0.5rem',
            letterSpacing: '0.3em',
            color: 'var(--neon-cyan)',
          }}>
            ◆ EST. 2024 ◆
          </span>
        </div>

      </div>
    </div>
  );
};

export default Index;