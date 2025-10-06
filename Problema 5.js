const likes = [150, 90, 1200, 300, 250]
const comentarios = [10, 5, 50, 15, 12]

analizarinteracciones = (likes, comentarios) => {
    const todosAltos = likes.every(like => like >= 100)
    const viral = likes.find(like => like >= 1000)
    return { todosAltos, viral }
}

const resultado = analizarinteracciones(likes, comentarios)
console.log(resultado)
