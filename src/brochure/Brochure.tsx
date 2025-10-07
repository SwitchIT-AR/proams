import brochure from "../assets/brochure.png";
import { IconArrowDown } from "@tabler/icons-react";
import { Box, Button, Grid, Image } from "@mantine/core";

export function Brochure() {
  return (
    <Box bg="#F0F0F0" py={{ base: 32, md: 72 }}>
      <Grid
        gutter={0}
        align="center"
        justify="space-between"
      >
        {/* Columna izquierda: CTA */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Box
            px={{ base: 16, sm: 24, md: 80 }}
            ta={{ base: "center", md: "left" }}
          >
            <Button
              size="xl"
              radius="md"
              leftSection={<IconArrowDown size={28} />}
              // ancho y alto responsivo
              w={{ base: "100%", md: 600 }}
              h={{ base: 64, md: 100 }}
              fz={{ base: 20, md: 30 }}
              styles={{
                root: {
                  backgroundColor: "#F7B402",
                  color: "#0A2540",
                  border: "2px solid #2F5AFF",
                },
              }}
            >
              Descargar Brochure
            </Button>
          </Box>
        </Grid.Col>

        {/* Columna derecha: Imagen */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Box
            // contenedor para evitar desbordes en mobile
            pos="relative"
            pe={{ base: 0, md: 24 }}
          >
            <Image
              src={brochure}
              // tamaño responsivo
              w={{ base: "82%", sm: 420, md: 600 }}
              mx={{ base: "auto", md: 0 }}
              mt={{ base: 24, md: -40 }} // leve lift en desktop para imitar el diseño original
              style={{ zIndex: 100, objectFit: "contain" }}
              alt="Proa MS brochure"
            />
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
