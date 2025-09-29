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
import visionship from "../assets/visionship.png";

export function Vision() {
  return (
    <Box  h={"auto"} bg={"#F0F0F0"}>
      <SimpleGrid cols={2} spacing={0}>
        <Image src={visionship} w={"100%"}></Image>
        <Stack gap={"xl"} justify="center" align="stretch" pl={100} pr={100}>
          <Title>Vision </Title>
          <Text size={"1.3em"}>
            Nuestra visión se orienta a consolidar un crecimiento sostenido en
            el mercado, basado en la profesionalidad y las buenas prácticas de
            nuestros servicios. Aspiramos a mantenernos como la opción de
            confianza y preferencia para quienes nos eligen, respaldados siempre
            por la transparencia y efectividad que nos distinguen.
          </Text>
        </Stack>
      </SimpleGrid>
    </Box>
  );
}
export default Vision;
