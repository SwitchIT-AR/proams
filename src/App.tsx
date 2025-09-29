import { HeroImageBackground } from './hero/HeroImageBackground';
import {Us} from './us/Us'
import {Footer} from './footer/Footer'
import Mision from './mision/Mision';
import Vision from './vision/Vision';
import Alianzas from './alianzas/Alianzas';
import Valores from './valores/Valores';
import { Ships } from './ships/Ships';
import ServiciosGrid from './servicios/Servicios';
import { Brochure } from './brochure/Brochure';

export default function App() {

  return (
<>
<HeroImageBackground />
<Us></Us>
<Mision />
<Vision></Vision>
<Valores></Valores>
<Alianzas></Alianzas>
<ServiciosGrid></ServiciosGrid>
<Brochure></Brochure>
<Ships></Ships>
<Footer></Footer>
</>
  );
}
