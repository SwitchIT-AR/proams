import {
  Container,
  SimpleGrid,
  Title,
  Text,
  Image,
  Stack,
  Box
} from "@mantine/core";

import alianzas from "../assets/alianzas.png";

export function Alianzas() {
  return (
    <Box  h={"auto"} bg={"#F0F0F0"}>
      <SimpleGrid cols={2} spacing={0}>
        <Image src={alianzas} w={"100%"}></Image>
        <Stack gap={"xl"} justify="center" align="stretch" pl={100} pr={100}>
          <Title>Alianzas </Title>
          <Text size={"1.3em"}>
            Establecimos alianzas estratégicas con astilleros de la región en
            rubros como diseño, construcción y reparación de buques.
          </Text>
        </Stack>
      </SimpleGrid>
    </Box>
  );
}
export default Alianzas;
