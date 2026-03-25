import React, { useState, useMemo } from 'react';
import CUEForm from './components/CUEForm';
import CUEResult from './components/CUEResult';
import { generateCUE } from './utils/cueUtils';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    paterno: '',
    materno: '',
    fecha: '',
    genero: '',
    estado: '',
    matricula: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // 1. Bloqueo estricto de letras en Matrícula
    if (name === 'matricula' && !/^\d*$/.test(value)) return;

    // 2. Bloqueo de números en nombres y apellidos
    if (['nombre', 'paterno', 'materno'].includes(name) && /\d/.test(value)) return;
    
    setFormData({ ...formData, [name]: value });
  };

  // Reactividad: el CUE solo se genera si los datos están completos y la matrícula tiene 9 dígitos
  const cueValue = useMemo(() => {
    const isComplete = Object.values(formData).every(val => val !== '');
    const isMatriculaValid = formData.matricula.length === 9;

    if (!isComplete || !isMatriculaValid) {
      return "Esperando datos válidos...";
    }

    return generateCUE(formData);
  }, [formData]);

  return (
    <main className="app-wrapper">
      <h1>Generador CUE Académico</h1>
      <CUEForm formData={formData} onChange={handleInputChange} />
      <hr />
      <CUEResult result={cueValue} />
    </main>
  );
}

export default App;