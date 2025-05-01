'use client'
import { useState } from 'react'
import React from 'react';

const UploadProyectos: React.FC = () => {
  
  // Estado para almacenar el archivo seleccionado
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

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
  };*/

  return (
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
  );
};

export default UploadProyectos;