import { Container, Image, Title } from '@mantine/core';
import Logo from '../assets/proa-logo.png';
import { IconArrowDown } from '@tabler/icons-react';

export function HeroImageBackground() {
  return (
    <Container fluid p={0} style={{ position: 'relative' }}>
      <div
        style={{
          backgroundImage: 'url("/proa-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100svh', // altura real del viewport
          width: '100%',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',   // apila vertical
            justifyContent: 'space-between', // reparte arriba y abajo
            alignItems: 'flex-start',  // todo alineado a la izquierda
            height: '100%',
            padding: '3rem',
          }}
        >
          {/* arriba: logo */}
          <div>
            <Image src={Logo} alt="Proa MS" maw={350} />
          </div>

          {/* abajo: texto */}
          <div>
            <Title order={1} c="white" fw={400} style={{ textAlign: 'left' }}>
              tu <strong>aliado</strong> estrategico
            </Title>
             <Title order={1} c="white" fw={400} style={{ textAlign: 'left' }}>
              <IconArrowDown></IconArrowDown>
            </Title>
          </div>
        </div>
      </div>
    </Container>
  );
}
