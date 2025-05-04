// This file is part of the "Normativo" project.
"use client";
import React, { useState } from 'react';

interface SearchResult {
    id: number;
    title: string;
    description: string;
}
// Componente que permite realizar búsquedas en un proyecto normativo de acuerdo a un texto completo
// y muestra los resultados en la interfaz de usuario.
// Este componente utiliza el hook useState para manejar el estado de la búsqueda y los resultados.
// También utiliza la función fetch para realizar una solicitud a una API y obtener los resultados de la búsqueda.
const BodySearchNorma: React.FC = () => {
    
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // Filtros adicionales
    const [filterCategory, setFilterCategory] = useState<string>('');
    const [filterDate, setFilterDate] = useState<string>('');

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
            const data : SearchResult[] = await response.json();
            console.log('Resultados de la búsqueda:', data);
            alert('Búsqueda realizada con éxito. Revisa la consola para ver los resultados.');
            setResults(data);
          } else {
            alert('Error al realizar la búsqueda.');
          }
          setIsLoading(true);
        } catch (error) {
          console.error('Error al realizar la búsqueda:', error);
          alert('Ocurrió un error al realizar la búsqueda.');
        } finally {
            setIsLoading(false);
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

        -----------------------------------------------

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

      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">Resultados:</h2>
        {results.length === 0 && !isLoading && <p>No se encontraron resultados.</p>}
        <ul className="list-disc pl-5">
          {results.map((result) => (
            <li key={result.id} className="mb-2">
              <h3 className="font-bold text-black">{result.title}</h3>
              <p>{result.description}</p>
            </li>
          ))}
        </ul>
      </div>

    </div>
       
                                
    };*/

    return (
      <div className="flex">
      {/* Menú lateral */}
      <div className="w-1/4 bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4">Filtros</h2>
        <div className="mb-4">
          <label className="block font-bold mb-2">Categoría:</label>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="border border-gray-300 rounded py-2 px-4 w-full"
          >
            <option value="">Todas</option>
            <option value="normativa">Normativa</option>
            <option value="jurisprudencia">Jurisprudencia</option>
            <option value="doctrina">Doctrina</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Fecha:</label>
          <input
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="border border-gray-300 rounded py-2 px-4 w-full"
          />
        </div>
        <div className="mb-4">
        <label className="block font-bold mb-2">Departamento:</label>
        <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="border border-gray-300 rounded py-2 px-4 w-full"
          >
            <option value="">Todos</option>
            <option value="departamento1">Departamento 1</option>
            <option value="departamento2">Departamento 2</option>
            <option value="departamento3">Departamento 3</option>
          </select>
        </div>

        <div className="mb-4">
        <label className="block font-bold mb-2">Palabra Clave:</label>
        <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Escribe tu búsqueda aquí..."
            className="border border-gray-300 rounded py-2 px-4 w-full mb-4"
          />
        </div>

        <div className="mb-4">
        <label className="block font-bold mb-2">Tipo Norma:</label>
        <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="border border-gray-300 rounded py-2 px-4 w-full"
          >
            <option value="">Todas</option>
            <option value="tipo1">Tipo 1</option>
            <option value="tipo2">Tipo 2</option>
            <option value="tipo3">Tipo 3</option>
          </select>
        </div>
        <div className="mb-4">
        <label className="block font-bold mb-2">Año:</label>
        <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="border border-gray-300 rounded py-2 px-4 w-full"
          >
            <option value="">Todos</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
        <div className="mb-4">
        <label className="block font-bold mb-2">Estado proceso consulta:</label>
        <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="border border-gray-300 rounded py-2 px-4 w-full"
          >
            <option value="">Todos</option>
            <option value="estado1">Estado 1</option>
            <option value="estado2">Estado 2</option>
            <option value="estado3">Estado 3</option>
          </select>
        </div>
        <button
          onClick={handleSearch}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Aplicar Filtros
        </button>
      </div>

      {/* Contenido principal */}
      <div className="w-3/4 p-10">
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
          disabled={isLoading}
        >
          {isLoading ? 'Buscando...' : 'Buscar'}
        </button>

        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">Resultados:</h2>
          {results.length === 0 && !isLoading && <p>No se encontraron resultados.</p>}
          <ul className="list-disc pl-5">
            {results.map((result) => (
              <li key={result.id} className="mb-2">
                <h3 className="font-bold text-black">{result.title}</h3>
                <p>{result.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>    
    );
};

export default BodySearchNorma;