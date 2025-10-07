const productos = [
    { idProducto: 101, nombre: "Mouse", modelo: "G-502", precio: 650, stock: 20, disponible: true },
    { idProducto: 102, nombre: "Teclado", modelo: "K-100", precio: 450, stock: 15, disponible: true },
    { idProducto: 103, nombre: "Monitor", modelo: "S-27", precio: 800, stock: 5, disponible: true }
];

const generarReporteInventario = (productos) => {
    const pfiltrar = productos.filter((p) => p.disponible === true && p.precio <= 500)
    const nuevo = productos.map(({ idProducto, nombre, modelo, stock }) => ({
        sku: idProducto,
        nombreCompleto: `${nombre} ${modelo}`,
        stock
    }));
    return nuevo
}

console.log(generarReporteInventario(productos))
