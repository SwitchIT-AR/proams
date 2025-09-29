import { SimpleGrid, Image } from "@mantine/core";
import ships1 from "../assets/ships1.png"
import ships2 from "../assets/ships2.png"
import ships3 from "../assets/ships3.png"


export function Ships() {

    return (
    <SimpleGrid cols={3} spacing={0}>

<Image src={ships1}></Image>
<Image src={ships2}></Image>
<Image src={ships3}></Image>



    </SimpleGrid>
    )
}