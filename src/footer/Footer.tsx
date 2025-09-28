import { Container, SimpleGrid, Group, Text, Image, Box } from '@mantine/core';
import { IconPhone, IconMail, IconMapPin } from '@tabler/icons-react';
import Logo from '../assets/proa-logo.png';

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <Box
      style={{
        width: 44,
        height: 44,
        borderRadius: 9999,
        border: '1.5px solid rgba(255,255,255,0.75)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 auto',
      }}
    >
      {children}
    </Box>
  );
}

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#1E3B6E', color: '#fff' }}>
      <Container size="xl" py="lg">
        {/* fila principal */}
        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 4 }}
          spacing={{ base: 'lg', md: 'xl' }}
          verticalSpacing={{ base: 'lg', md: 'xl' }}
        >
          {/* Col 1: Logo + marca */}
          <Box>
            <Image src={Logo} alt="Proa MS" maw={180} />
          </Box>

          {/* Col 2: Teléfonos */}
          <Group align="center" wrap="nowrap" gap="md">
            <IconBadge>
              <IconPhone size={22} stroke={1.8} />
            </IconBadge>
            <Box>
              <Text size="sm">
                +54 9 11 <Text span fw={800}>6674-4929</Text>
              </Text>
              <Text size="sm" mt={4}>
                +54 9 11 <Text span fw={800}>3196-5967</Text>
              </Text>
            </Box>
          </Group>

          {/* Col 3: Email */}
          <Group align="center" wrap="nowrap" gap="md">
            <IconBadge>
              <IconMail size={22} stroke={1.8} />
            </IconBadge>
            <Box>
              <Text size="sm">
                info@
                <Text span fw={800}>
                  proa
                </Text>
                .ms
              </Text>
            </Box>
          </Group>

          {/* Col 4: Dirección */}
          <Group align="center" wrap="nowrap" gap="md">
            <IconBadge>
              <IconMapPin size={22} stroke={1.8} />
            </IconBadge>
            <Box>
              <Text size="sm">
                <Text span fw={800}>Juncal 643</Text>, 4°, “E”,
                <br />
                Ciudad Autónoma de Buenos Aires
              </Text>
            </Box>
          </Group>
        </SimpleGrid>

        {/* línea de separación sutil */}
        <Box my="lg" style={{ height: 1, background: 'rgba(255,255,255,0.12)' }} />

        {/* fila legal */}
        <Group justify="space-between" align="center" wrap="wrap" gap="sm">
          <Text size="xs">© 2025 <Text span fw={700}>Proa MS</Text></Text>

          <Group gap="md" wrap="wrap">
            <Text
              size="xs"
              style={{ cursor: 'pointer' }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >
              Términos de privacidad
            </Text>
            <Text
              size="xs"
              style={{ cursor: 'pointer' }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >
              Términos de uso
            </Text>
            <Text
              size="xs"
              style={{ cursor: 'pointer' }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >
              Preferencias de Cookies
            </Text>
          </Group>
        </Group>
      </Container>
    </footer>
  );
}
