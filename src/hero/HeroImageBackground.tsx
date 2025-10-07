import { Container, Image, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Logo from '../assets/proa-logo.png';
import { IconArrowDown } from '@tabler/icons-react';

export function HeroImageBackground() {
  // ✅ Versión válida para Mantine v8.3
  const isMobile = useMediaQuery('(max-width: 639px)');
  const bg = isMobile ? "url('/video.gif')" : "url('/proa-bg.png')";

  return (
    <Container fluid p={0} style={{ position: 'relative' }}>
      <div
        style={{
          backgroundImage: bg,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100svh',
          width: '100%',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            height: '100%',
            padding: '3rem',
          }}
        >
          <div>
            <Image src={Logo} alt="Proa MS" maw={350} />
          </div>

          <div>
            <Title order={1} c="white" fw={400} style={{ textAlign: 'left' }}>
              tu <strong>aliado</strong> estrategico
            </Title>
            <div style={{ marginTop: '0.5rem' }}>
              <IconArrowDown size={36} color="white" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
