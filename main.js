// Crear un objeto para almacenar las ventas en diferentes categorías
const ventasPorCategoria = {
    Vapes: [],
    Ropa: [],
    Electrónica: []
};

// Función para agregar una venta a una categoría
function agregarVenta(categoria, monto) {
    ventasPorCategoria[categoria].push(monto);
}

// Función para calcular el monto total de ventas en una categoría
function calcularTotalVentas(categoria) {
    return ventasPorCategoria[categoria].reduce((total, monto) => total + monto, 0);
}

// Función para determinar la categoría con las ventas más altas
function obtenerCategoriaMasAlta() {
    let categoriaMasAlta = "";
    let montoMasAlto = 0;

    for (const categoria in ventasPorCategoria) {
        const totalVentas = calcularTotalVentas(categoria);
        if (totalVentas > montoMasAlto) {
            montoMasAlto = totalVentas;
            categoriaMasAlta = categoria;
        }
    }

    return categoriaMasAlta;
}

// Ejemplo de uso
agregarVenta("Vapes", 55);
agregarVenta("Ropa", 200);
agregarVenta("Electrónica", 150);
agregarVenta("Vapes", 25);

console.log("Ventas totales en Vapes:", calcularTotalVentas("Vapes"));
console.log("Ventas totales en Ropa:", calcularTotalVentas("Ropa"));
console.log("Ventas totales en Electrónica:", calcularTotalVentas("Electrónica"));

const categoriaMasAlta = obtenerCategoriaMasAlta();
console.log("La categoría con las ventas más altas es:", categoriaMasAlta);
