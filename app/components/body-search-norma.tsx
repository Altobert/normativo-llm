// This file is part of the "Normativo" project.
"use client";

import React, { useState } from 'react';

const BodySearchNorma: React.FC = () => {
    const [query, setQuery] = useState('');

    // Función para manejar el envío del formulario con el texto completo para buscar

    const handleSearch = async () => {
        if (!query.trim()) {
          alert('Por favor, ingresa un término de búsqueda.');
          return;
        }
    
        try {
          const response = await fetch(`http://127.0.0.1:8080/api/search?query=${encodeURIComponent(query)}`, {
            method: 'GET',
          });
    
          if (response.ok) {
            const data = await response.json();
            console.log('Resultados de la búsqueda:', data);
            alert('Búsqueda realizada con éxito. Revisa la consola para ver los resultados.');
          } else {
            alert('Error al realizar la búsqueda.');
          }
        } catch (error) {
          console.error('Error al realizar la búsqueda:', error);
          alert('Ocurrió un error al realizar la búsqueda.');
        }
      };
    
    /*const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Buscando:', query);
        // Aquí puedes agregar la lógica para realizar la búsqueda
        // Por ejemplo, puedes hacer una llamada a una API o filtrar una lista de proyectos normativos
        // y mostrar los resultados en la interfaz de usuario.
        // Puedes usar la función fetch para hacer una solicitud a tu API


        <div style={{ textAlign: 'center', marginTop: '50px', width: '100%' }}>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Realice su búsqueda en un Proyecto Normativo..."
                    style={{
                        width: '50%',
                        padding: '10px',
                        fontSize: '16px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        outline: 'none',
                        transition: 'border-color 0.3s',
                        marginRight: '10px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    }}
                />
                <button
                    type="submit"
                    style={{
                        marginLeft: '100px',
                        padding: '10px 20px',
                        fontSize: '16px',
                        borderRadius: '4px',
                        border: 'none',
                        backgroundColor: '#4285F4',
                        color: 'white',
                        cursor: 'pointer',
                    }}
                >
                    Buscar
                </button>
            </form>
            
        </div>
                                
    };*/

    return (
        <div className="container mx-auto p-10">
      <h1 className="text-2xl font-bold mb-4">Buscador</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Escribe tu búsqueda aquí..."
        className="border border-gray-300 rounded py-2 px-4 w-full mb-4"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Buscar
      </button>
    </div>
    );
};

export default BodySearchNorma;