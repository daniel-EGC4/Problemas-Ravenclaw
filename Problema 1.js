const generarRankingFinal2 = (participantes) => {
    return participantes
        .filter(p => !p.esHack)
        .sort((a, b) => b.puntajeFinal - a.puntajeFinal)
        .slice(0, 3)
        .map(p => ({ nombreUsuario: p.nombreUsuario, puntajeFinal: p.puntajeFinal }));
};

// Ejemplo de prueba:
const participantes = [
    { nombreUsuario: "NeoMata", puntajeFinal: 1200, nivel: 8, esHack: true },
    { nombreUsuario: "Alpha7", puntajeFinal: 2500, nivel: 10, esHack: true },
    { nombreUsuario: "ZetaOne", puntajeFinal: 900, nivel: 5, esHack: false },
    { nombreUsuario: "GamerPro", puntajeFinal: 1500, nivel: 9, esHack: false },
    { nombreUsuario: "Shadow_", puntajeFinal: 3000, nivel: 12, esHack: false },
];

console.log(generarRankingFinal(participantes));
