import Formulario from "./Formulario";
import Resultado from "./Resultado";
import Loading from "./Loading";
import useClima from "../hooks/UseClima";

const AppClima = () => {
  const { resultado, cargando, noResultado } = useClima();

  return (
    <>
      <main className="dos-columnas">
        <Formulario />
        {
            cargando ? <Loading /> : 
            resultado?.name ? <Resultado /> : 
            noResultado ? <p>{noResultado}</p>
            : <p>weather will be shown here</p>
         }
      </main>
    </>
  );
};

export default AppClima;
