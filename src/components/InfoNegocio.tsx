import React from 'react'

const InfoNegocio = () => {
  return (
    <div className='m-5 text-sm sm:flex justify-center'>

        {/* Titulo */}
        {/* <h1 className='pb-10 flex justify-center'> INFORMACIÓN DE TU NEGOCIO</h1> */}

        {/* Formulario */}
        <form className='pt-5 space-y-10 sm:text-base'>
          <h1 className='pb-10 text-center'> INFORMACIÓN DE TU NEGOCIO</h1>

          {/* Nombre del negocio */}
          <div className='flex space-x-10 items-end '>
            <div className='grid grid-cols gap-2'>
              <label>Nombre de tu negocio*</label>
              <input type="text" className='w-48 bg-gris2 rounded-full sm:w-[32rem]' />
            </div>

            {/* Logo del negocio */}
            <div>
              <a href="#">
                <div className='h-24 w-24 flex text-center items-center rounded-full bg-gris2 sm:w-32 sm:h-32' >Logo de tu negocio</div>
              </a>
            </div>  
          
            
          </div>

          {/* Tipo de servicio (barra de seleccion) */}
          <div className='grid grid-cols-1'>
            <label>Tipo del servicio*</label>
            <select name="" id="" className='w-80 bg-gris2 rounded-full border-style:none'>
              <option value="opcion1">Atención sólo en tu local</option>
              <option value="opcion2">Atención sólo a domicilio</option>
              <option value="opcion3">Atención en local o a domicilio</option>
            </select>  
          </div>

          {/* Direccion, ciudad y pais */}
          <div className='grid grid-rows-2 gap-y-4'>
            <div>
              <p>Dirección del negocio</p>
              <input className='w-40 bg-gris2 rounded-full sm:w-80' type="text" />
            </div>

            <div className='flex gap-4 sm:gap-2'>
              <div>
                <p>País</p>
                <input className='w-32 bg-gris2 rounded-full sm:w-64' type="text" />
              </div>
              <div>
                <p>Ciudad</p>
                <input className='w-32 bg-gris2 rounded-full sm:w-64' type="text" />
              </div>
              
            </div>

            

            {/* <div>
              <p>País</p>
              <input className='w-32 bg-gris2' type="text" />
            </div> */}
          </div>


          {/* Numero de profesionales (casillas de seleccion) */}
          <div >
            <label className='grid'>Número de profesionales*</label>
            <input type='checkbox'/>
            <label className='mr-5'> 1 </label>
            <input type="checkbox"/>
            <label className='mr-5'> 2 </label>
            <input type="checkbox"/>
            <label className='mr-5'> 3 </label>
            <input type="checkbox"/>
            <label className='mr-5'> 4 </label>
            <input type="checkbox"/>
            <label className='mr-5'> 5 </label>
            <input type="checkbox"/>
            <label> +5 </label>
          </div>

          {/* Nombre de los profesionales */}
          <div className='grid grid-cols gap-2'>
            <label>Nombre de profesional 1</label>
            <input className='w-80 bg-gris2 rounded-full sm:w-[32rem]' type="text" />
            <label>Nombre de profesional 2</label>
            <input className='w-80 bg-gris2 rounded-full sm:w-[32rem]' type="text" />
            <label>Nombre de profesional 3</label>
            <input className='w-80 bg-gris2 rounded-full sm:w-[32rem]' type="text" />
            <label>Nombre de profesional 4</label>
            <input className='w-80 bg-gris2 rounded-full sm:w-[32rem]' type="text" />
            <label>Nombre de profesional 5</label>
            <input className='w-80 bg-gris2 rounded-full sm:w-[32rem]' type="text" />
          </div>

          <div className='flex justify-center gap-x-5'>
            <button className="rounded-full gap-2 bg-gris2 py-2 px-4">Volver</button>
            <button className="rounded-full gap-2 bg-gris2 py-2 px-4">Guardar</button>
            <button className="rounded-full gap-2 bg-gris2 py-2 px-4">Siguiente</button>
          </div>

          <div>
            {/* <input type="file" /> */}
            {/* <div className='h-24 w-48 h-48 grid grid-cols-1 items-center bg-gris2'>
              <input type="file" className='text-sm grid grid-cols-1' />
            </div> */}

            
          
          </div>


          {/* <div>
            <label htmlFor='file'>Select Image</label>
            <input type='file' /> 
          </div>     */}
        </form>
    </div>
  )
}

export default InfoNegocio