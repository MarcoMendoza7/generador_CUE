import React, { useState, useMemo } from 'react'; // <--- Agrega 'React,' aquí
import CUEForm from './components/CUEForm';
import CUEResult from './components/CUEResult';
import { generateCUE } from './utils/cueUtils';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    nombre: '', paterno: '', materno: '',
    fecha: '', genero: '', estado: '', matricula: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Regla: No números en campos de texto
    if (['nombre', 'paterno', 'materno'].includes(name) && /\d/.test(value)) return;
    
    setFormData({ ...formData, [name]: value });
  };

  // Reactividad: el CUE se calcula solo si formData cambia
  const cueValue = useMemo(() => {
    const isComplete = Object.values(formData).every(val => val !== '');
    return isComplete ? generateCUE(formData) : "Complete todos los campos";
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