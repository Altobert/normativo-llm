import Link from 'next/link'
import React from 'react'

const UploadProyectos = () => {
  return (    
    <div className="container mx-auto p-10">
           <form className="bg-white p-6 rounded shadow-md">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file-upload">
                            Selecciona Proyecto Normativo desde tu PC:
                        </label>
                        <input type="file" id="file-upload" className="border rounded w-full py-2 px-3 text-gray-700" />
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Subir
                    </button>
            </form>   
            <div className="mt-4">
                    <h2 className="text-xl font-bold mb-2">Proyectos Subidos</h2>
                    <ul className="list-disc pl-5">
                        <li>Proyecto 1</li>
                        <li>Proyecto 2</li>
                        <li>Proyecto 3</li>
                    </ul>
            </div>    
            <div className="mt-4">
                    <h2 className="text-xl font-bold mb-2">Proyectos en Revisión</h2>
                    <ul className="list-disc pl-5">
                        <li>Proyecto A</li>
                        <li>Proyecto B</li>
                        <li>Proyecto C</li>
                    </ul>
            </div>
            <div className="mt-4">
                    <h2 className="text-xl font-bold mb-2">Proyectos Aprobados</h2>
                    <ul className="list-disc pl-5">
                        <li>Proyecto X</li>
                        <li>Proyecto Y</li>
                        <li>Proyecto Z</li>
                    </ul>
            </div>
    </div>
  );
}

export default UploadProyectos