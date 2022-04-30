function agregarProduto(productos){
    let nombre = prompt("Ingrese un nombre") 
    while (!isNaN(nombre)){
        nombre=prompt("Ingrese un nombre valido")
    }
    const tipo = productos.length
    let valor = parseInt(prompt("Ingrese un valor $$$"))
    while (isNaN(valor)){
        valor=parseInt(prompt("Ingrese un valor $$$ valido"))
    }
    let color = prompt("Ingrese un color")
    while (!isNaN(color)){// Tal vez podria hacerse un array de colores validos y recorrerlo para verificar que no se coloque cualquier cosa 
        color = prompt("Ingrese un color valido")
    }
    let stock = parseInt(prompt("Ingrese el stock de su producto"))
    while (isNaN(stock)){
        stock =  parseInt(prompt("Ingrese el stock de su producto valido"))
    }
    productos.push (new Producto(nombre.toUpperCase(),tipo,valor,color.toUpperCase(),stock))
    return alert (`El Producto ${nombre} fue agregado con exito con un valor de $ ${valor}`)
}

function agregarStock(productos){
    const nombresProd=productos.map(producto=>producto.nombre)
    while (nombresProd){
        eleccion = prompt(`Que producto desea modificar \n ${nombresProd}`)       
        if (productos.find(producto=>producto.nombre===eleccion.toUpperCase())){
            const producto=productos.find(producto=>producto.nombre===eleccion.toUpperCase())
            console.log(producto)
            let cantidad = parseInt(prompt(`El Stock del producto es ${producto.stock}\n Cuanto desea agregar?` ))
            while (isNaN(cantidad)){
                cantidad =  parseInt(prompt(`El Stock a agregar debe ser un valor valido (numerico) \n Cuanto desea agregar?` ))
            }
            return productos.map(producto1=>{
                if( producto1.nombre===producto.nombre){producto1.stock+=cantidad}})
        } else {
            alert("Producto Invalido")
        }        
    }
}

function borrarProducto(productos){
//borrar producto
}
function disminuirStock(productos){
    const nombresProd=productos.map(producto=>producto.nombre)
    while (nombresProd){
        eleccion = prompt(`Que producto desea modificar \n ${nombresProd}`)       
        if (productos.find(producto=>producto.nombre===eleccion.toUpperCase())){
            const producto=productos.find(producto=>producto.nombre===eleccion.toUpperCase())
            console.log(producto)
            let cantidad = parseInt(prompt(`El Stock del producto es ${producto.stock}\n Cuanto desea disminuir?` ))
            while (isNaN(cantidad)||producto.stock<cantidad){
                cantidad =  parseInt(prompt(`El Stock a disminuir debe ser un valor valido (numerico) \n Cuanto desea agregar?` ))
            }
            return productos.map(producto1=>{
                if( producto1.nombre===producto.nombre){producto1.stock-=cantidad}})
        } else {
            alert("Producto Invalido")
        }        
    }
}


class Producto {
    constructor(nombre, tipo, valor, color,stock){
        this.nombre = nombre.toUpperCase();
        this.tipo = parseInt(tipo);
        this.valor = parseFloat(valor);
        this.color = color.toUpperCase()  
        this.stock = parseInt(stock)
    }
    sumarIva(){
        this.valor=this.valor* iva
    }

}
let productos=[]
const iva= 1.21


productos.push(new Producto ("Remera con estampa", "1", "500","negra","9"),new Producto ("Remera lisa", "1", "300","blanca","5"),new Producto ("Jean skinny", "2", "1200","azul", "2"))
switch (menu = parseInt(prompt("Ingrese que quiere realizar: \n1:Agregar Producto \n2:Agregar stock \n3:Borrar Producto \n4:Descontar Stock \n5:Calcular Cuotas"))){
    case 1:
        agregarProduto(productos)
        break
    case 2:
        agregarStock(productos)
        alert("Se agrego el stock correctamente")
        break
    case 3:
        borrarProducto(productos)
        break
    case 4:
        disminuirStock(productos)
        break

}





