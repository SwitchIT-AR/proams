import {
  Flex,
  Title,
  Box,
  Text,
  Image,
  Stack,
} from "@mantine/core";
import alianzas from "../assets/alianzas.png";

export function Alianzas() {
  return (
    <Box bg={"#F0F0F0"} pt={{ base: 70, sm: 0 }}>
      <Flex
        direction={{ base: "column-reverse", md: "row" }}
        gap={0}
      >
        {/* Imagen: en mobile va abajo, en desktop a la izquierda */}
        <Box w={{ base: "100%", md: "50%" }}>
          <Image src={alianzas} w={"100%"} />
        </Box>

        {/* Texto: en mobile va arriba, en desktop a la derecha */}
        <Box w={{ base: "100%", md: "50%" }} mt={{ base: 10, sm: 140 }} pb={100}>
          <Stack
            gap={"xl"}
            justify="center"
            align="stretch"
            pl={{ base: 30, md: 100 }}
            pr={{ base: 30, md: 100 }}
          >
            <Title c={"#1A3B6D"}>Alianzas</Title>
            <Text size={"1.3em"}>
              Establecimos <strong>alianzas estratégicas con astilleros</strong> de la
              región en rubros como{" "}
              <strong>diseño, construcción y reparación de buques.</strong>
            </Text>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}

export default Alianzas;
