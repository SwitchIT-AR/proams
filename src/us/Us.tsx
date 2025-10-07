import {
  Container,
  Grid,
  Title,
  Text,
  Image,
  Group,
  Box,
} from "@mantine/core";
import logo from "../assets/logo-azul.png";
import pexels1 from "../assets/pexels1.png";
import pexels2 from "../assets/pexels2.png";

export function Us() {
  return (
    <Container
      size="xl"
      mt={100}
      py={{ base:90, sm: "lg" }}
      h={{ base: "140svh", sm: "80dvh", md: "70svh", lg: "80svh", xl: "90svh" }} // alturas responsivas
    >
      <Grid align="center" gutter={{ base: "xl", md: 0 }}>
        {/* Columna izquierda (texto + logo) */}
        <Grid.Col
          span={{ base: 12, md: 6 }}
          order={{ base: 2, md: 1 }} // en mobile va abajo si querés invertir, ajustá aquí
          pr={{ md: "xl" }}
        >
          <Box>
            <Title
              order={1}
              fw={800}
              c={"#1A3B6D"}
              style={{ letterSpacing: "-0.02em", lineHeight: 1.1 }}

            >
              Quiénes somos
            </Title>

            <Text
              size="xl"
              fw={300}        // light
              lh={1.6}
              mt="md"
              style={{ letterSpacing: "-0.01em" }}
            >
              <Text span fw={800}>
                Somos un equipo de profesionales y técnicos asociados, con sólida
                trayectoria en el ámbito marítimo
              </Text>{" "}
              que, a lo largo de los años, desarrollamos{" "}
              <Text span fw={800}>
                conocimiento y especialización en industria naval, puertos, marina
                mercante, transporte, comercio exterior y derecho marítimo
              </Text>
              , consolidando prácticas eficientes y confiables, garantizando la
              excelencia en cada operación y el respaldo constante a nuestros
              clientes.
            </Text>

            <Image
              src={logo}
              alt="Proa MS"
              w={{ base: 200, sm: 240, md: 270 }}
              mt={{ base: "lg", md: "xl" }}
            />
          </Box>
        </Grid.Col>

        {/* Columna derecha (imágenes) */}
        <Grid.Col
          span={{ base: 12, md: 6 }}
          order={{ base: 1, md: 2 }}
        >
          <Box h="100%" mt={-170}>
            <Group justify="flex-end" gap="xl" wrap="nowrap" h="100%">
              <Image
                src={pexels2}
                alt="Imagen 2"
                w={{ base: 160, sm: 200, md: 220 }}
              />
              <Image
                src={pexels1}
                alt="Imagen 1"
                w={{ base: 160, sm: 200, md: 220 }}
                mt={{ base: 60, md: 120 }} // desplazamiento vertical suave y responsivo
              />
            </Group>
          </Box>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default Us;
