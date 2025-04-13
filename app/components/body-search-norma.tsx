// This file is part of the "Normativo" project.
"use client";

import React, { useState } from 'react';

const BodySearchNorma: React.FC = () => {
    const [query, setQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Buscando:', query);
        // Aca agregar la logica para realizar la búsqueda
    };

    return (
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
    );
};

export default BodySearchNorma;