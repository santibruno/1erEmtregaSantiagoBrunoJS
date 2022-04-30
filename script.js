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
    while (!isNaN(color)){
        color = prompt("Ingrese un color valido")
    }
    let stock = parseInt(prompt("Ingrese el stock de su producto"))
    while (isNaN(stock)){
        stock =  parseInt(prompt("Ingrese el stock de su producto valido"))
    }
    productos.push (new Producto(nombre,tipo,valor,color,stock))
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
    const nombresProd=productos.map(producto=>producto.nombre)
    while (nombresProd){
        const eleccion = prompt(`Que producto desea eliminar \n ${nombresProd}`)               
        if (productos.find(producto=>producto.nombre===eleccion.toUpperCase())){
            return productos.filter(producto1=>producto1.nombre!==eleccion.toUpperCase())
        } else {
            alert("Producto Invalido")
        }        
    }
    
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
                cantidad =  parseInt(prompt(`El Stock a disminuir debe ser un valor valido (numerico) menor a ${producto.stock}\n Cuanto desea eliminar?` ))
            }
            return productos.map(producto1=>{
                if( producto1.nombre===producto.nombre){producto1.stock-=cantidad}})
        } else {
            alert("Producto Invalido")
        }        
    }
}
function calcularCuotas(cantidad,valor){
    const impuesto = 0.05*cantidad + 1
    return (valor*impuesto)/cantidad
}
function menuEleccion(menu = parseInt(prompt("Ingrese que quiere realizar: \n1:Agregar Producto \n2:Agregar stock \n3:Borrar Producto \n4:Descontar Stock "))){
    switch (menu){
        case 1:
            agregarProduto(productos)
            alert("Se agrego el producto correctamente")
            if (confirm("desea Realizar otra operacion?")){
                menuEleccion()
            }
            break
        case 2:
            agregarStock(productos)
            alert("Se modifico el stock correctamente")
            if (confirm("desea Realizar otra operacion?")){
                menuEleccion()
            }
            break
        case 3:
            productos=borrarProducto(productos)
            alert("Se elimino el producto correctamente")
            if (confirm("desea Realizar otra operacion?")){
                menuEleccion()
            }
            break
        case 4:
            disminuirStock(productos)
            alert("Se modifico el stock correctamente")             
            if (confirm("desea Realizar otra operacion?")){
                menuEleccion()
            }
            break
        
        default:
            alert("Opcion incorrecta, elegir opcion valida")              
            menuEleccion()
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

//------------------------------------------------------------------------------------------------
let productos=[]
productos.push(new Producto ("Remera con estampa", "1", "500","negra","9"),new Producto ("Remera lisa", "1", "300","blanca","5"),new Producto ("Jean skinny", "2", "1200","azul", "2"))

menuEleccion()





 