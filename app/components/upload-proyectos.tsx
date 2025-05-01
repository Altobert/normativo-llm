'use client'
import { useState } from 'react'
import React from 'react';

const UploadProyectos: React.FC = () => {
  
  // Estado para almacenar el archivo seleccionado
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Función para manejar el cambio de archivo. Cuando el usuario selecciona un archivo, se verifica si es un PDF y se actualiza el estado.
  // Si no es un PDF, se muestra una alerta.
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type === 'application/pdf') {
        setSelectedFile(file);
      } else {
        alert('Por favor, selecciona un archivo PDF.');
      }
    }
  };

  // Función para manejar la carga del archivo. 
  // Se crea un FormData y se envía una solicitud POST al servidor.
  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Por favor, primero selecicone un archivo.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('http://127.0.0.1:8080/api/documents/upload', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        alert('Archivo cargado de forma exitosa!');
      } else {
        alert('Fallida la carga del archivo.');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('An error occurred while uploading the file.');
    }
  };

  /*const handleUpload = () => {
    if (selectedFile) {
      // Aquí puedes manejar la lógica para subir el archivo
      console.log('Archivo seleccionado:', selectedFile);
      alert(`Archivo "${selectedFile.name}" listo para subir.`);
    } else {
      alert('No se ha seleccionado ningún archivo.');
    }

    <div>
      <h2>Subir Documento PDF</h2>
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
      />
      <button onClick={handleUpload} disabled={!selectedFile}>
        Subir Archivo
      </button>
    </div>
  };*/

  return (
    <div className="container mx-auto p-10">
        <h1 className="text-2xl font-bold mb-4">Subir Proyectos Normativos</h1>
        <p className="mb-4">Selecciona un archivo PDF para subir:</p>
        <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="mb-4"
        />
        <button
            onClick={handleUpload}
            disabled={!selectedFile}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${!selectedFile ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
            Cargar Proyecto Normativo
        </button>
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
};

export default UploadProyectos;