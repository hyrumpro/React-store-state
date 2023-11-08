import PropTypes from 'prop-types';

function Greeting({text, children}) {
    const tittleStyles = {
      color: "orange",
      textAlign: "center",
      fontSize: "40px",
    }

	return (
		<>
      <div>
      <header>
        <h1 style={tittleStyles}>Nombre de la Empresa</h1>
        <p>Descripción breve de la empresa</p>
      </header>
      <nav>
        <a href="#">Inicio</a>
        <a href="#">Servicios</a>
        <a href="#">Portafolio</a>
        <a href="#">Contacto</a>
      </nav>
      <div className="container">
        <section key="Servicios">
          <h2 className="clase-test">Servicios</h2>
          <p>{text}</p>
        </section>
        <section key="Portafolio">
          <h2>Portafolio</h2>
          <p>Echa un vistazo a algunos de nuestros proyectos anteriores.</p>
        </section>
        <section key="Contacto">
          <h2 style={{
          color: "red",
          textAlign: "center",
          fontSize: "40px",
        }}>Contacto</h2>
          <p>Ponte en contacto con nosotros a través de correo electrónico o teléfono.</p>
        </section>
      </div>
      <footer>
        <p>Derechos Reservados &copy; 2023 Nombre de la Empresa</p>
        {children}
      </footer>
    </div>
    </>


		);

}


Greeting.propTypes = {
    text: PropTypes.string,
}


Greeting.defaultProps = {
    text: "Valor Generico",
}


export default Greeting;