import React from 'react';

const PaginaUno = ({
    navigateTo, idiomaActual, changeLang,prueba
  }) => (
    <div>
      Pagina uno aqui<br />
      <form>
          {/* onChange={(e)=>(console.log(e.target.value))}*/}
          <div>
              <input type="text" placeholder="Nombre"  />
          </div>
          <div>
              <input type="text" placeholder="Monto de apertura"  />
          </div>
  
          <div>
          <a href="#" onClick = {() => navigateTo('pagina-2')}> Ingresar</a>
      </div>
      </form>
      <br />
    </div>
  );

  export default PaginaUno;