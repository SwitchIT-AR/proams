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
import misionship from "../assets/misonship.png";

export function Mision() {
  return (
    <Box  h={"auto"} bg={"#F0F0F0"}>
      <SimpleGrid cols={2} spacing={0}>
        <Stack gap={"xl"} justify="center" align="stretch" pl={100} pr={100}>
          <Title>Mision </Title>

          <Text size={"1.3em"}>
            Gracias a nuestra trayectoria, la excelencia de nuestros estándares
            y la competitividad de nuestros costos, nos consolidamos como una
            consultora referente en el ámbito marítimo. Nos proyectamos hacia el
            objetivo de ofrecer una gama amplia y dinámica de servicios,
            ajustados con precisión y eficacia a las necesidades particulares de
            cada cliente.
          </Text>
        </Stack>

        <Box>
          <Image src={misionship} fit="cover"></Image>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
export default Mision;
