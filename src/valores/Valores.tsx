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
import valores from "../assets/valores.png";

export function Valores() {
  return (
    <Box  h={"auto"} bg={"#F0F0F0"}>
      <SimpleGrid cols={2} spacing={0}>
        <Stack gap={"xl"} justify="center" align="stretch" pl={100} pr={100}>
          <Title>Valores </Title>

          <Text size={"1.3em"}>
            El compromiso, la confiabilidad y la efectividad son nuestro sello y
            herramienta fundamental para sostener e incrementar nuestra cartera
            de Clientes, también nuestro principal valor para todos y cada uno
            de los integrantes de la empresa.
          </Text>
        </Stack>

        <Box>
          <Image src={valores} fit="cover"></Image>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
export default Valores;
