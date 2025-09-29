import {
  Container,
  SimpleGrid,
  Title,
  Box,
  Text,
  Image,
  Group,
  Stack,
} from "@mantine/core";
import logo from "../assets/logo-azul.png";
import pexels1 from "../assets/pexels1.png";
import pexels2 from "../assets/pexels2.png";

export function Us() {
  return (
    <Container size={"xl"} h={"80dvh"} p={0}>
      <SimpleGrid cols={2} spacing={35}>
        <Stack gap={"xl"} justify="center" align="stretch" pt={200}>
          <Title>Quienes Somos </Title>
          <Text size={"1.3em"}>
            Somos un equipo de profesionales y técnicos asociados, con sólida
            trayectoria en el ámbito marítimo que, a través de los años,
            desarrollamos conocimiento y especialización en industria naval,
            puertos, marina mercante, transporte, comercio exterior y derecho
            marítimo, consolidando prácticas eficientes y confiables,
            garantizando la excelencia en cada operación y el respaldo constante
            a nuestros clientes.
          </Text>
          <Image src={logo} w={270}></Image>
        </Stack>

        <Group justify="right" gap={"xl"}>
          <Image src={pexels2} w={200}></Image>
          <Image src={pexels1} w={200} mt={120} pt={100}></Image>
        </Group>
      </SimpleGrid>
    </Container>
  );
}
export default Us;
