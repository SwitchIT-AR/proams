import {
  Flex,
  Title,
  Text,
  Image,
  Stack,
  Box
} from "@mantine/core";
import alianzas from "../assets/alianzas.png";

export function Alianzas() {
  return (
    <Box bg={"#F0F0F0"} pt={{ base: 70, sm: 0 }}>
      <Flex direction={{ base: "column", md: "row" }} gap={0}>
        {/* Texto: primero en todas las vistas */}
        <Box w={{ base: "100%", md: "50%" }} pt={{ base: 10, sm: 100 }} pb={{ base: 100, sm: 0 }}>
          <Stack
            gap={"xl"}
            justify="center"
            align="stretch"
            pl={{ base: 30, md: 100 }}
            pr={{ base: 30, md: 100 }}
          >
            <Title c={"#1A3B6D"}>Alianzas</Title>
            <Text size={"1.3em"}>
              Establecimos <strong>alianzas estratégicas con astilleros</strong> de la región en
              rubros como <strong>diseño, construcción y reparación de buques.</strong>
            </Text>
          </Stack>
        </Box>

        {/* Imagen: derecha en desktop, abajo en mobile */}
        <Box w={{ base: "100%", md: "50%" }}>
          <Image src={alianzas} fit="cover" w={"100%"} />
        </Box>
      </Flex>
    </Box>
  );
}

export default Alianzas;
