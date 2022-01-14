import Banner from "../sections/Banner"
import Servicios from "../sections/Servicios"
import Cupcakes from "./cupcakes"

const home = () =>(
    <>
      <Banner />
      <Cupcakes peticion="cupcakes?sabor_like=banana"/>
      <Servicios peticion="servicios" />
    </>
)

export default home