import React from 'react';

const estados = [
  { code: 'AS', name: 'Aguascalientes' }, { code: 'BC', name: 'Baja California' },
  { code: 'BS', name: 'Baja California Sur' }, { code: 'CC', name: 'Campeche' },
  { code: 'CS', name: 'Chiapas' }, { code: 'CH', name: 'Chihuahua' },
  { code: 'DF', name: 'Ciudad de México' }, { code: 'CL', name: 'Coahuila' },
  { code: 'CM', name: 'Colima' }, { code: 'DG', name: 'Durango' },
  { code: 'GT', name: 'Guanajuato' }, { code: 'GR', name: 'Guerrero' },
  { code: 'HG', name: 'Hidalgo' }, { code: 'JC', name: 'Jalisco' },
  { code: 'MC', name: 'México' }, { code: 'MN', name: 'Michoacán' },
  { code: 'MS', name: 'Morelos' }, { code: 'NT', name: 'Nayarit' },
  { code: 'NL', name: 'Nuevo León' }, { code: 'OC', name: 'Oaxaca' },
  { code: 'PL', name: 'Puebla' }, { code: 'QT', name: 'Querétaro' },
  { code: 'QR', name: 'Quintana Roo' }, { code: 'SP', name: 'San Luis Potosí' },
  { code: 'SL', name: 'Sinaloa' }, { code: 'SR', name: 'Sonora' },
  { code: 'TC', name: 'Tabasco' }, { code: 'TS', name: 'Tamaulipas' },
  { code: 'TL', name: 'Tlaxcala' }, { code: 'VZ', name: 'Veracruz' },
  { code: 'YN', name: 'Yucatán' }, { code: 'ZS', name: 'Zacatecas' }
];

const CUEForm = ({ formData, onChange }) => {
  const isMatriculaIncomplete = formData.matricula.length > 0 && formData.matricula.length !== 9;

  return (
    <div className="form-container">
      <input type="text" name="nombre" placeholder="Nombre(s)" value={formData.nombre} onChange={onChange} />
      <input type="text" name="paterno" placeholder="Apellido Paterno" value={formData.paterno} onChange={onChange} />
      <input type="text" name="materno" placeholder="Apellido Materno" value={formData.materno} onChange={onChange} />
      
      <input type="date" name="fecha" value={formData.fecha} onChange={onChange} />
      
      <select name="genero" value={formData.genero} onChange={onChange}>
        <option value="">Género</option>
        <option value="H">Hombre</option>
        <option value="M">Mujer</option>
      </select>

      <select name="estado" value={formData.estado} onChange={onChange}>
        <option value="">Estado</option>
        {estados.map(e => <option key={e.code} value={e.code}>{e.name}</option>)}
      </select>

      <div className="input-group" style={{ gridColumn: 'span 2' }}>
        <input 
          type="text" 
          name="matricula" 
          placeholder="Matrícula (9 dígitos)" 
          maxLength={9}
          className={isMatriculaIncomplete ? 'error' : ''}
          value={formData.matricula} 
          onChange={onChange} 
          style={{ width: '100%' }}
        />
        {isMatriculaIncomplete && (
          <p className="error-msg" style={{ margin: '5px 0 0 0' }}>
            Faltan dígitos (deben ser exactamente 9)
          </p>
        )}
      </div>
    </div>
  );
};

export default CUEForm;