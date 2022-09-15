function saludar() {
    alert('Hola! Bienvenid@ a Laica')
}
saludar ();

let cantidad = 0;
let cantidadPrendas = 0;
let precioTotal= 0;

function comprarProductos () {
    let precioArticulo = 0;
    let seguirComprando = false;

do {
    let articulo = 0;
    do {
    articulo = parseInt(prompt('¿Qué atuendo querés comprar?\nSeleccioná un número \n1~Vestido ($700)\n2~Remera ($500)\n3~Pollera ($400)\n4~Pantalón ($800)'));
        }while (articulo != 1 && articulo != 2 && articulo != 3 && articulo != 4)
          switch (articulo) {
                    case 1:
                              precioArticulo = 700;
                    break;
                    case 2:
                              precioArticulo = 500;
                    break;
                    case 3:
                              precioArticulo = 400;
                    break;
                    case 4:
                              precioArticulo = 800;
              }

          cantidad = parseInt(prompt('¿Cuántas prendas desea comprar?'));
          while (Number.isNaN(cantidad)) {
                    cantidad = parseInt(prompt('¿Cuántas prendas desea comprar?'));
    }
precioTotal += precioArticulo * cantidad;
cantidadPrendas += cantidad;
seguirComprando = confirm("¿Querés agregar otra prenda?");
} while (seguirComprando)
return precioTotal;
}

let cintura = 0;
let pecho = 0;
let piernas = 0;

function medidasCuerpo () {
let seguirMidiendo = false;

    do {
              alert('En Laica hacemos las prendas a tu medida!\nAgarrá un centímetro y respondé tus medidas.');
              do {
                        cintura = parseInt(prompt('Describa las medidas de su cintura:'));
              } while (isNaN(cintura))
              do {
                        pecho = parseInt(prompt('Describa las medidas de su pecho:'));
              } while (isNaN(pecho))
              do {
                        piernas = parseInt(prompt('Describa las medidas de sus piernas:'));
              } while (isNaN(piernas))

              seguirMidiendo = confirm('¿Estas segur@ de que esas son tus medidas?');
    } while (!seguirMidiendo)
}


function chau(cantidadPrendas,cintura,pecho,piernas,precioTotal) {
    alert('Has comprado ' + cantidadPrendas + ' atuendos de Laica. Tus medidas son: Cintura: ' + cintura + ' Pecho: ' + pecho + '. Piernas: ' + piernas + '. Tu compra fue de: $' + precioTotal + '.');
}
function hastaPronto() {
    alert('Agradecemos tu compra en Laica, l@s esperamos pronto!');
}

comprarProductos();
medidasCuerpo();
chau(cantidadPrendas,cintura,pecho,piernas,precioTotal);
hastaPronto();