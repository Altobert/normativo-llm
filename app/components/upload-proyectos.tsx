import Link from 'next/link'
import React from 'react'

const UploadProyectos = () => {
  return (    
    <div className="container mx-auto p-10">
           <form className="bg-white p-6 rounded shadow-md">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file-upload">
                            Selecciona un archivo:
                        </label>
                        <input type="file" id="file-upload" className="border rounded w-full py-2 px-3 text-gray-700" />
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Subir
                    </button>
            </form>       
    </div>
  );
}

export default UploadProyectos