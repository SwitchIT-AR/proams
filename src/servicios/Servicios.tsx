import { useState } from "react";
import { Container, Title, Card, Text, SimpleGrid, Box } from "@mantine/core";

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
      <Title c="#1A3B6D" order={1} mt="xl" mb="xl">
        NUESTROS SERVICIOS:
      </Title>

      <SimpleGrid cols={{ base: 2, sm: 2, md: 3 }} spacing="lg">
        {SERVICES.map((s) => (
          <HoverCard key={s.id} label={s.label} />
        ))}
      </SimpleGrid>
    </Container>
  );
}

// Componente reutilizable con hover inline
function HoverCard({ label }: { label: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Box style={{ display: "flex", justifyContent: "center" }}>
      <Card
        radius="md"
        shadow="sm"
        withBorder
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: hovered ? "#e5e7eb" : "#1b5b8f", // gris al hover
          color: hovered ? "#111827" : "white",        // texto oscuro en gris
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 16,
          borderColor:"transparent",
          width: 250,
          height: 250,
          cursor: "pointer",
          transition: "all 0.25s ease",
        }}
      >
        <Text size="xl" fw={400} lh={1.25}>
          {label}
        </Text>
      </Card>
    </Box>
  );
}
