import React from 'react'

const InfoNegocio = () => {
  return (
    <div className='pl-5 pr-5 pt-5'>

        {/* Titulo */}
        <h1 className='text-center'> INFORMACIÓN DE TU NEGOCIO</h1>

        {/* Formulario */}
        <form className='pt-5 space-y-8'>

          {/* Nombre del negocio */}
          <div className='grid grid-cols-1 gap-2'>
            <label>Nombre de tu negocio*</label>
            <input type="text" className='w-96 bg-gris2' />

            {/* Logo del negocio   */}
            <a href="#">
              <div>Logo de tu negocio</div>
            </a>
          </div>

          {/* Tipo de servicio (barra de seleccion) */}
          <div className='grid grid-cols-1 gap-2'>
            <label>Tipo del servicio*</label>
            <select name="" id="" className='w-96'>
              <option value="opcion1">Atención sólo en tu local</option>
              <option value="opcion2">Atención sólo a domicilio</option>
              <option value="opcion3">Atención en local o a domicilio</option>
            </select>  
          </div>

          {/* Direccion, ciudad y pais */}
          <div className='flex space-x-4'>
            <div>
              <p>Dirección de tu negocio</p>
              <input className='w-64' type="text" />
            </div>

            <div>
              <p>Ciudad</p>
              <input className='w-64' type="text" />
            </div>

            <div>
              <p>País:</p>
              <input className='w-64' type="text" />
            </div>
          </div>


          {/* Numero de profesionales (casillas de seleccion) */}
          <div>
            <label className='grid grid-cols-1 gap-2'>Número de profesionales*</label>
            <input type='checkbox'/>
            <label> 1 </label>
            <input type="checkbox"/>
            <label> 2 </label>
            <input type="checkbox"/>
            <label> 3 </label>
            <input type="checkbox"/>
            <label> 4 </label>
            <input type="checkbox"/>
            <label> 5 </label>
          </div>

          {/* Nombre de los profesionales */}
          <div className='grid grid-cols-1 gap-2'>
            <label>Nombre de profesional 1</label>
            <input className='w-96' type="text" />
            <label>Nombre de profesional 2</label>
            <input className='w-96' type="text" />
            <label>Nombre de profesional 3</label>
            <input className='w-96' type="text" />
            <label>Nombre de profesional 4</label>
            <input className='w-96' type="text" />
            <label>Nombre de profesional 5</label>
            <input className='w-96' type="text" />
          </div>

        </form>
    </div>
  )
}

export default InfoNegocio