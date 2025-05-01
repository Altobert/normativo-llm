import Link from 'next/link'
import React from 'react'
/**
 * necesito agregar filtros para buscar proyectos normativos
 * 1. Tipo de Proyecto (Ley, Reglamento, etc.)
 * 2. Estado del Proyecto (En revisión, Aprobado, etc.)
 * 3. Fecha de Publicación (Desde, Hasta)
 * 4. Palabras Clave
 * 5. Autor (Nombre del autor o entidad responsable)
 * 6. Ubicación Geográfica (Región, Provincia, etc.)
 * 7. Categoría (Salud, Educación, Medio Ambiente, etc.)
 * 8. Fecha de Inicio y Fin de Vigencia
 * 9. Número de Proyecto
 * 10. Tipo de Documento (Borrador, Definitivo, etc.)
 * 11. departamento o unidad responsable
 */

// FiltrosBuscador.tsx
// Este componente es un formulario que permite a los usuarios buscar proyectos normativos
// necesito un menu lateral izquiero que implemente los filtros

const FiltrosBuscador = () => {
  return (
    //disminuir tamanio contenedor    
    // agregar un menu lateral izquierdo que implemente los filtros
    
    
    <div className="container mx-auto p-10 bg-gray-100 rounded shadow-md mt-4 mb-4">
        
        <h1 className="text-2xl font-bold mb-4">Filtros de Búsqueda de Proyectos Normativos</h1>
        <p className="mb-4">Utiliza los siguientes filtros para encontrar proyectos normativos específicos:</p>
        {/* disminuir tamanio contenedor */}    
        {/* Formulario de búsqueda */}
         {/* Este formulario permite a los usuarios ingresar criterios de búsqueda para filtrar proyectos normativos */}

        <form className="bg-white p-4 rounded shadow-md">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tipo-proyecto">
                    Tipo de Proyecto:
                </label>
                <input type="text" id="tipo-proyecto" className="border rounded w-full py-2 px-3 text-gray-700" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="estado-proyecto">
                    Estado del Proyecto:
                </label>
                <input type="text" id="estado-proyecto" className="border rounded w-full py-2 px-3 text-gray-700" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fecha-publicacion">
                    Fecha de Publicación (Desde, Hasta):
                </label>
                <input type="date" id="fecha-publicacion-desde" className="border rounded w-full py-2 px-3 text-gray-700 mb-2" />
                <input type="date" id="fecha-publicacion-hasta" className="border rounded w-full py-2 px-3 text-gray-700" />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Buscar
            </button>
        </form>

        {/*
         Resultados de búsqueda 
         <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Proyectos Normativos Encontrados</h2>
            <ul className="list-disc pl-5">
                <li>
                    <Link href="/proyecto1" className="text-blue-500 hover:underline">
                        Proyecto Normativo 1
                    </Link>
                </li>
                <li>
                    <Link href="/proyecto2" className="text-blue-500 hover:underline">
                        Proyecto Normativo 2
                    </Link>
                </li>
                <li>
                    <Link href="/proyecto3" className="text-blue-500 hover:underline">
                        Proyecto Normativo 3
                    </Link>
                </li>
            </ul>
        </div>      
        */}
        
    </div>
  );
}
export default FiltrosBuscador