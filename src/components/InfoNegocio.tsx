import React from 'react'

const InfoNegocio = () => {
  return (
    <div className='pl-5 pr-5 pt-5 pb-5'>

        {/* Titulo */}
        <h1 className='pb-10'> INFORMACIÓN DE TU NEGOCIO</h1>

        {/* Formulario */}
        <form className='pt-5 space-y-10'>

          {/* Nombre del negocio */}
          <div className='flex gap-2 space-x-20 items-end'>
            <div className='grid grid-cols-1'>
              <label>Nombre de tu negocio*</label>
              <input type="text" className='w-96 bg-gris2' />
            </div>

            {/* Logo del negocio */}
            <div>
              <a href="#">
                <div className='h-32 w-32 flex text-center items-center rounded-full bg-gris2'>Logo de tu negocio</div>
              </a>
            </div>  
          
            
          </div>

          {/* Tipo de servicio (barra de seleccion) */}
          <div className='grid grid-cols-1 gap-2'>
            <label>Tipo del servicio*</label>
            <select name="" id="" className='w-96 bg-gris2 border-style:none'>
              <option value="opcion1">Atención sólo en tu local</option>
              <option value="opcion2">Atención sólo a domicilio</option>
              <option value="opcion3">Atención en local o a domicilio</option>
            </select>  
          </div>

          {/* Direccion, ciudad y pais */}
          <div className='flex space-x-4'>
            <div>
              <p>Dirección de tu negocio</p>
              <input className='w-64 bg-gris2' type="text" />
            </div>

            <div>
              <p>Ciudad</p>
              <input className='w-64 bg-gris2' type="text" />
            </div>

            <div>
              <p>País</p>
              <input className='w-64 bg-gris2' type="text" />
            </div>
          </div>


          {/* Numero de profesionales (casillas de seleccion) */}
          <div>
            <label className='grid grid-cols-1 gap-2'>Número de profesionales*</label>
            <input type='checkbox'/>
            <label className='mr-10'> 1 </label>
            <input type="checkbox"/>
            <label className='mr-10'> 2 </label>
            <input type="checkbox"/>
            <label className='mr-10'> 3 </label>
            <input type="checkbox"/>
            <label className='mr-10'> 4 </label>
            <input type="checkbox"/>
            <label> 5 </label>
          </div>

          {/* Nombre de los profesionales */}
          <div className='grid grid-cols-1 gap-2'>
            <label>Nombre de profesional 1</label>
            <input className='w-96 bg-gris2' type="text" />
            <label>Nombre de profesional 2</label>
            <input className='w-96 bg-gris2' type="text" />
            <label>Nombre de profesional 3</label>
            <input className='w-96 bg-gris2' type="text" />
            <label>Nombre de profesional 4</label>
            <input className='w-96 bg-gris2' type="text" />
            <label>Nombre de profesional 5</label>
            <input className='w-96 bg-gris2' type="text" />
          </div>

        </form>
    </div>
  )
}

export default InfoNegocio