import { Container, Image, Title } from '@mantine/core';
import Logo from '../assets/proa-logo.png';

export function HeroImageBackground() {
  return (
    <Container fluid p={0} style={{ position: 'relative' }}>
      <div
        style={{
          backgroundImage: 'url("/proa-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100svh',          // altura real del viewport
          width: '100%',
          position: 'relative',
        }}
      >
        {/* overlay para contraste */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.35)',
          }}
        />

        {/* fila principal: centrado vertical + separación izq/der */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',        // centra vertical
            justifyContent: 'space-between',
            height: '100%',
            padding: '3rem',
            gap: '2rem',
          }}
        >
          {/* izquierda: logo */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Image src={Logo} alt="Proa MS" maw={350} />
          </div>

          {/* derecha: texto */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Title order={1} c="white" fw={400} style={{ textAlign: 'right' }}>
              Sitio en mantenimiento
            </Title>
          </div>
        </div>
      </div>
    </Container>
  );
}
