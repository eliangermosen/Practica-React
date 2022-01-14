import Banner from "../sections/Banner"
import Cupcakes from "./cupcakes"

const home = () =>(
    <>
      <Banner />
      <Cupcakes peticion="cupcakes?sabor_like=banana"/>
    </>
)

export default home