import {
  SimpleGrid,
  Title,
  Box,
  Text,
  Image,
  Stack,
} from "@mantine/core";
import valores from "../assets/valores.png";

export function Valores() {
  return (
    <Box  h={"auto"} bg={"#F0F0F0"}>
      <SimpleGrid cols={2} spacing={0}>
        <Stack gap={"xl"} justify="center" align="stretch" pl={100} pr={100}>
          <Title c={"#1A3B6D"}>Valores </Title>

          <Text size={"1.3em"}>
           <strong> El compromiso, la confiabilidad y la efectividad</strong> son nuestro sello y
            herramienta fundamental para sostener e incrementar nuestra cartera
            de Clientes, también <strong>nuestro principal valor para todos y cada uno
            de los integrantes de la empresa.</strong>
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
