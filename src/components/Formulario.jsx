import useClima from "../hooks/UseClima";
import { useState } from "react";


const Formulario = () => {

    const [alerta, setAlerta] = useState('')

    const {busqueda, datosBusqueda, consultarClima} = useClima()

    const {ciudad, pais} = busqueda

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(busqueda).includes('')){
            setAlerta('All fields are required')
            return
        }
          setAlerta('')
          consultarClima(busqueda)  
    }

  return (
    <div className="contenedor">
        {alerta && <p>{alerta}</p>}
      <form
      onSubmit={handleSubmit}
      >
        <div className="campo">
          <label htmlFor="ciudad">City</label>
          <input type="text" id="ciudad" name="ciudad" onChange={datosBusqueda} value={ciudad} />
        </div>
        <div className="campo">
          <label htmlFor="pais">Country</label>
          <select id="pais" name="pais" onChange={datosBusqueda} value={pais}>
            <option value="">--- Select a Country ---</option>
            <option value="US">United States</option>
            <option value="MX">Mexico</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">Spain</option>
            <option value="PE">Peru</option>
          </select>
        </div>
        <input
            type='submit'
            value='Search'
        />
      </form>
    </div>
  );
};

export default Formulario;
