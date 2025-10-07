const calificaciones = [85, 95, 78, 100, 60];

const calcular = (calificaciones) => {
    const aumentar = calificaciones.map((p) => p >= 90 ? p * 1.1 : p);
    const suma = aumentar.reduce((p, aumentar) => p + aumentar)
    const promedio = suma / calificaciones.length
    return promedio
}

console.log(calcular(calificaciones))
