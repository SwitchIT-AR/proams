import {
  Flex,
  Title,
  Box,
  Text,
  Image,
  Stack,
} from "@mantine/core";
import visionship from "../assets/visionship.png";

export function Vision() {
  return (
    <Box bg={"#F0F0F0"} pt={{ base: 70, sm: 0 }}>
      <Flex
        direction={{ base: "column-reverse", md: "row" }}
        gap={0}
      >
        {/* Imagen: en mobile va abajo, en desktop a la izquierda */}
        <Box w={{ base: "100%", md: "50%" }}>
          <Image src={visionship} w={"100%"} />
        </Box>

        {/* Texto: en mobile va arriba, en desktop a la derecha */}
        <Box w={{ base: "100%", md: "50%" }} mt={{base:10, sm:100}} pb={100}>
          <Stack
            gap={"xl"}
            justify="center"
            align="stretch"
            pl={{ base: 30, md: 100 }}
            pr={{ base: 30, md: 100 }}
          >
            <Title c={"#1A3B6D"}>Visión</Title>
            <Text size={"1.3em"}>
              Nuestra visión se orienta a <strong>consolidar un crecimiento sostenido en
              el mercado, basado en la profesionalidad y las buenas prácticas de
              nuestros servicios.</strong> Aspiramos a mantenernos como <strong>la opción de
              confianza y preferencia</strong> para quienes nos eligen, respaldados siempre
              por la transparencia y efectividad que nos distinguen.
            </Text>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}
export default Vision;
