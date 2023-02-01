import React from "react";
import { useParams } from "react-router-dom";
import Tittle from '../../Components/Tittle/tittle.js'
import Menu from '../../Components/Menu/menu'
import Perfil from '../../Components/Perfil/perfil'
import Footer from "../../Components/Footer/footer.js";

/*

1. Declarar estado (useState)
2. Declarar useEffect (fetch al backend)
3. una vez recibida la info del BE, almacenarlo en el estado
4. Pasar ese estado al hijo
5. Usar esas props en el hijo (perfil.js)

*/

const MyUserPage = () => {
    const {slug} = useParams();

    return(<>
            <Perfil></Perfil>
        </>
    )
}

export default MyUserPage