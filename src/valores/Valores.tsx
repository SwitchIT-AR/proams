import {
  Flex,
  Title,
  Box,
  Text,
  Image,
  Stack,
} from "@mantine/core";
import valores from "../assets/valores.png";

export function Valores() {
  return (
    <Box bg={"#F0F0F0"} pt={{ base: 70, sm: 0 }}>
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={0}
      >
        {/* Texto: en todas las vistas queda primero */}
        <Box w={{ base: "100%", md: "50%" }} pt={{ base: 10, sm: 100 }} pb={{ base: 100, sm: 0 }}>
          <Stack
            gap={"xl"}
            justify="center"
            align="stretch"
            pl={{ base: 30, md: 100 }}
            pr={{ base: 30, md: 100 }}
          >
            <Title c={"#1A3B6D"}>Valores</Title>
            <Text size={"1.3em"}>
              <strong>El compromiso, la confiabilidad y la efectividad</strong> son nuestro sello y
              herramienta fundamental para sostener e incrementar nuestra cartera
              de clientes. También representan <strong>nuestro principal valor para todos y cada uno
              de los integrantes de la empresa.</strong>
            </Text>
          </Stack>
        </Box>

        {/* Imagen: siempre a la derecha en desktop, abajo en mobile */}
        <Box w={{ base: "100%", md: "50%" }}>
          <Image src={valores} fit="cover" w={"100%"} />
        </Box>
      </Flex>
    </Box>
  );
}

export default Valores;
