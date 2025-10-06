const verificarbecas = (estudiantes) => {
  const asistenciaOk = estudiantes.every(est => est.asistencia > 80);
  const estudianteDestacado = estudiantes.find(est => est.promedio > 95);
  return [asistenciaOk, estudianteDestacado];
};

const estudiantes = [
  { nombre: "Alex", promedio: 92, asistencia: 85 },
  { nombre: "Beta", promedio: 98, asistencia: 85 }, 
  { nombre: "Clara", promedio: 88, asistencia: 95 },
  { nombre: "David", promedio: 97, asistencia: 90 },
];
console.log(verificarbecas(estudiantes));
