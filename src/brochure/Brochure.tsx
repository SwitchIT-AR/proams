import brochure from "../assets/brochure.png"
import { IconArrowDown } from "@tabler/icons-react"

import { Button, SimpleGrid, Image, Container, Box } from "@mantine/core"

export function Brochure() {
    return (
        <Container fluid bg={"#F0F0F0"} mah={500} >
<SimpleGrid cols={2}>
<Box mt={200} pl={200}>
            <Button color="#F7B402" h={100} w={600} fz={30}> Descargar Brochure <IconArrowDown size={30}></IconArrowDown> </Button>
</Box>
        <Image w={900} src={brochure} style={{zIndex:100}} mt={-200}></Image>

</SimpleGrid>
        </Container>
    )
}