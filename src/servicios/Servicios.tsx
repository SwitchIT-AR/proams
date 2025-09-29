import React from "react";
import { Container, Title, Card, Text, SimpleGrid, Box } from "@mantine/core";

// Fuente de datos (JSON) para mapear los 10 servicios
const SERVICES = [
  { id: 1, label: "Asesoramos en Diseño, Construcción y Reparaciones Navales" },
  { id: 2, label: "Seguros" },
  { id: 3, label: "Peritajes" },
  { id: 4, label: "Seguridad Portuaria y Marítima" },
  { id: 5, label: "Adquisición / Reparación de Grúas" },
  { id: 6, label: "Asesoramiento Legal" },
  { id: 7, label: "Habilitaciones, Permisos, Certificaciones ante PNA" },
  { id: 8, label: "Gestiones Ante Autoridades Nacionales, Provinciales y Municipales" },
  { id: 9, label: "Repuestos / Agentes de Compras" },
  { id: 10, label: "Comercialización de Graneles Líquidos y Sólidos" },
];

export default function ServiciosGrid() {
  return (
    <Container size="lg" py="xl">
      <Title order={3} mb="lg">NUESTROS SERVICIOS:</Title>

      <SimpleGrid
        cols={ 3}
        spacing={0}
        verticalSpacing={10}
      >
        {SERVICES.map((s) => (
            <Box style={{display:"flex", justifyContent:"center"}}>
          <Card
            key={s.id}
      
            radius="md"
            shadow="sm"
            withBorder
            style={{
              background: "#1b5b8f",
              color: "white",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 16,
              width:250,
              height:250,
            }}
          >
            <Text size="xl" fw={400} lh={1.25}>
              {s.label}
            </Text>
          </Card>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}
