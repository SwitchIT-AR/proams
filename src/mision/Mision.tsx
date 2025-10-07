import {
  Flex,
  Title,
  Box,
  Text,
  Image,
  Stack,
} from "@mantine/core";
import misionship from "../assets/misonship.png";

export function Mision() {
  return (
    <Box bg={"#F0F0F0"} pt={{ base: 70, sm: 0 }}>
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={0}
      >
        {/* Texto: en todas las vistas queda primero */}
        <Box w={{ base: "100%", md: "50%" }} pt={{base:10, sm:100}} pb={{base:100, sm:0}}>
          <Stack
            gap={"xl"}
            justify="center"
            align="stretch"
            pl={{ base: 30, md: 100 }}
            pr={{ base: 30, md: 100 }}
          >
            <Title c={"#1A3B6D"}>Misión</Title>
            <Text size={"1.3em"}>
              Gracias a nuestra trayectoria, la excelencia de nuestros
              estándares y la competitividad de nuestros costos,
              <strong> nos consolidamos como una consultora referente en el ámbito marítimo.</strong>{" "}
              Nos proyectamos hacia el objetivo de{" "}
              <strong>
                ofrecer una gama amplia y dinámica de servicios, ajustados con
                precisión y eficacia
              </strong>{" "}
              a las necesidades particulares de cada cliente.
            </Text>
          </Stack>
        </Box>

        {/* Imagen: siempre a la derecha en desktop, abajo en mobile */}
        <Box w={{ base: "100%", md: "50%" }}>
          <Image src={misionship} fit="cover" w={"100%"} />
        </Box>
      </Flex>
    </Box>
  );
}

export default Mision;
